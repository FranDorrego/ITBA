from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import viewsets, permissions, status, authentication
from .models import *
from muestraData.serializer import *
from .serializer import *

# Create your views here.
class administraPrestamo(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def put(self, requets, **kwargs):
        # Si tiene permisos, salta un error
        if not requets.user.has_perm('muestraData.empleado'):
            return Response({'No tienes permiso'}, status=status.HTTP_401_UNAUTHORIZED)
        
        id_cliente = requets.headers.get('cliente')
        tipo = requets.headers.get('tipo')
        total = requets.headers.get('total')
        
        if not tipo or not total or not id_cliente:
            return Response({'Se necestia en el heder ' : "tipo, total, cliente", "tipo" : tipo , "total" : total , "cliente" : id_cliente }, status=status.HTTP_406_NOT_ACCEPTABLE)

        try: total = int(total)
        except: return Response({f" 'total' tiene que ser un int : {total}"}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try: id_cliente = int(id_cliente)
        except: return Response({f" 'id_cliente' tiene que ser un int : {id_cliente}"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        
        try:
            # Creamos el prestamo
            prestamo = Prestamo.objects.create(loan_type=tipo, loan_total=total, customer_id= id_cliente)
            # Traemos la cuenta
            cuenta = Cuenta.objects.get(customer_id = id_cliente)
            # Numero de operacion
            tipo_operacion = TipoMovimientos.objects.filter(tipo='PRESTAMO').first()
            # Creamos el movimiento
            movimiento = Movimientos.objects.create(numero_cuenta = cuenta, monto = total, id_tipo_operacion = tipo_operacion )
            # Acreditamos en la cuenta
            cuenta.balance += total
            # Guardamos todo
            prestamo.save()
            cuenta.save()
            movimiento.save()

            # Serializo para mostrar informacion
            prestamo = PrestamosAllSerializer(prestamo).data
            cuenta = CuentaSerializer(cuenta).data
            movimiento = MovimientoSerializer(movimiento).data

            return Response({'Se creo el prestamo' : 'ok','prestamo' : prestamo , 'cuenta' : cuenta,  'movimiento' : movimiento}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({f'Ocurrrio un error, intenta nuevamente : {e}'}, status=status.HTTP_408_REQUEST_TIMEOUT)
        
    def delete(self, requets, **kwargs):
        # Si tiene permisos, salta un error
        if not requets.user.has_perm('muestraData.empleado'):
            return Response({'No tienes permiso'}, status=status.HTTP_401_UNAUTHORIZED)
        
        id_prestamo = requets.headers.get('prestamo')
        
        if not id_prestamo:
            return Response({'Se necestia en el heder ' : "prestamo", "prestamo" : id_prestamo }, status=status.HTTP_406_NOT_ACCEPTABLE)

        try: id_prestamo = int(id_prestamo)
        except: return Response({f" 'id_prestamo' tiene que ser un int : {id_prestamo}"}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try:
            # buscamos el prestamo
            prestamo = Prestamo.objects.get(loan_id = id_prestamo)
            # Traemos la cuenta
            cuenta = Cuenta.objects.get(customer_id = prestamo.customer_id)
            # Numero de operacion
            tipo_operacion = TipoMovimientos.objects.filter(tipo='CANCELO_PRESTAMO').first()
            # Creamos el movimiento
            movimiento = Movimientos.objects.create(numero_cuenta = cuenta, monto = (prestamo.loan_total * -1), id_tipo_operacion = tipo_operacion )
            # Acreditamos en la cuenta
            cuenta.balance -= prestamo.loan_total
            # Guardamos todo
            prestamo.delete()
            cuenta.save()
            movimiento.save()

            # Serializo para mostrar informacion
            prestamo = PrestamosAllSerializer(prestamo).data
            cuenta = CuentaSerializer(cuenta).data
            movimiento = MovimientoSerializer(movimiento).data

            return Response({'Se Borro el prestamo' : 'DELATE','prestamo' : prestamo , 'cuenta' : cuenta,  'movimiento' : movimiento}, status=status.HTTP_204_NO_CONTENT)
        
        except Exception as e:
            return Response({f'Ocurrrio un error, intenta nuevamente : {e}'}, status=status.HTTP_408_REQUEST_TIMEOUT)
        
