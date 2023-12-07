from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import viewsets, permissions, status, authentication
from .models import *

# Create your views here.
class generaPrestamo(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def put(self, requets, **kwargs):
        # Si tiene permisos, salta un error
        if not requets.user.has_perm('muestraData.empleado'):
            return Response({'No tienes permiso'}, status=status.HTTP_401_UNAUTHORIZED)
        
        tipo = 'PERSONAL'
        total = 2500
        id_cliente = 50

        try:
            # Creamos el prestamo
            prestamo = Prestamo.objects.create(loan_type=tipo, loan_total=total, customer_id= id_cliente)
            # Traemos la cuenta
            cuenta = Cuenta.objects.get(customer_id = id_cliente)
            # Numero de operacion
            tipo_operacion = TipoMovimientos.objects.filter(tipo='PRESTAMO').first()
            # Creamos el movimiento
            movimiento = Movimientos.objects.create(numero_cuenta = cuenta.account_id, monto = total, id_tipo_operacion = tipo_operacion.id )
            # Acreditamos en la cuenta
            cuenta.balance += total
            # Guardamos todo
            prestamo.save()
            cuenta.save()
            movimiento.save()

            return Response({'Se creo el prestamo'}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({f'Ocurrrio un error, intenta nuevamente, {e}'}, status=status.HTTP_408_REQUEST_TIMEOUT)
        

        
