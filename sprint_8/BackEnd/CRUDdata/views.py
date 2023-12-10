from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import viewsets, permissions, status, authentication
from .models import *
from muestraData.serializer import *
from .serializer import *
import json

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
    
    def get(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)
    
class NewDirrecion(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def put(self, requets, **kwargs):
        
        cliente = requets.headers.get('cliente')
        try: cliente = int(cliente)
        except: return Response({f'Formato incorrecto -> "cliente" int 1 = Empleado | 0 = CLiente: {cliente}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        if cliente < 0 or cliente > 1:
            return Response({f'Formato incorrecto -> "cliente" int 1 = Empleado | 0 = CLiente: {cliente}'}, status=status.HTTP_406_NOT_ACCEPTABLE)
        
        id = requets.headers.get('id')
        if not id: return Response({f'Falta Heder -> "id" int : {id}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try: id= int(id) 
        except: return Response({f'Falta Heder -> "id" int : {id}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        calle = requets.headers.get('calle')
        if not calle: return Response({f'Falta Heder -> "calle" str : {calle}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        cuidad = requets.headers.get('cuidad')
        if not cuidad: return Response({f'Falta Heder -> "cuidad" str : {cuidad}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        codigopostal = requets.headers.get('codigopostal')
        if not codigopostal: return Response({f'Falta Heder -> "codigopostal" str : {codigopostal}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        pais = requets.headers.get('pais')
        if not pais: return Response({f'Falta Heder -> "pais" str : {pais}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try:
            # Creamos la dirrecion
            dirrecion = Direccion.objects.create(calle=calle, ciudad=cuidad,codigo_postal=codigopostal, pais=pais)
            userdirrecion = ''

            # Vemos que es, cliente o empleado
            if cliente == 0:
                try: user = Cliente.objects.get(customer_id = id)
                except: return Response({'El id no fue encontrado'}, status=status.HTTP_204_NO_CONTENT)

                try: ClientesDireccion.objects.get(id= id).delete()
                except: pass

                user = Cliente.objects.get(customer_id = id)
                userdirrecion = ClientesDireccion.objects.create(customer= user , id_dirrecion = dirrecion, id= id)
            else:
                try: user = Empleado.objects.get(employee_id = id)
                except: return Response({'El id no fue encontrado'}, status=status.HTTP_204_NO_CONTENT)

                try: EmpleadoDireccion.objects.get(id= id).delete()
                except: pass

                user = Empleado.objects.get(employee_id = id)
                userdirrecion = EmpleadoDireccion.objects.create(employee= user , id_dirrecion= dirrecion, id = id)

            # guardamos todo
            dirrecion.save()
            userdirrecion.save()

            return Response({'se cambio la dirrecion' : cliente}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({f'Ocurrrio un error, intenta nuevamente : Error: {e}, id: {id}, User: {user}, dirrecion: {userdirrecion}'}, status=status.HTTP_408_REQUEST_TIMEOUT)
        
    def get(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def delete(self, request, *args, **kwargs):
        return self.forbidden_response()
    
    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class AceptaPrestamo(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def put(self, requets, **kwargs):
        
        cliente = requets.headers.get('cliente')
        try: cliente = int(cliente)
        except: return Response({f'Formato incorrecto -> "cliente" int 1 = Empleado | 0 = CLiente: {cliente}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        if cliente < 0 or cliente > 1:
            return Response({f'Formato incorrecto -> "cliente" int 1 = Empleado | 0 = CLiente: {cliente}'}, status=status.HTTP_406_NOT_ACCEPTABLE)
        
        id = requets.headers.get('id')
        if not id: return Response({f'Falta Heder -> "id" int : {id}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try: id= int(id) 
        except: return Response({f'Falta Heder -> "id" int : {id}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        calle = requets.headers.get('calle')
        if not calle: return Response({f'Falta Heder -> "calle" str : {calle}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        cuidad = requets.headers.get('cuidad')
        if not cuidad: return Response({f'Falta Heder -> "cuidad" str : {cuidad}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        codigopostal = requets.headers.get('codigopostal')
        if not codigopostal: return Response({f'Falta Heder -> "codigopostal" str : {codigopostal}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        pais = requets.headers.get('pais')
        if not pais: return Response({f'Falta Heder -> "pais" str : {pais}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try:
            # Creamos la dirrecion
            dirrecion = Direccion.objects.create(calle=calle, ciudad=cuidad,codigo_postal=codigopostal, pais=pais)
            userdirrecion = ''

            # Vemos que es, cliente o empleado
            if cliente == 0:
                try: user = Cliente.objects.get(customer_id = id)
                except: return Response({'El id no fue encontrado'}, status=status.HTTP_204_NO_CONTENT)

                try: ClientesDireccion.objects.get(id= id).delete()
                except: pass

                user = Cliente.objects.get(customer_id = id)
                userdirrecion = ClientesDireccion.objects.create(customer= user , id_dirrecion = dirrecion, id= id)
            else:
                try: user = Empleado.objects.get(employee_id = id)
                except: return Response({'El id no fue encontrado'}, status=status.HTTP_204_NO_CONTENT)

                try: EmpleadoDireccion.objects.get(id= id).delete()
                except: pass

                user = Empleado.objects.get(employee_id = id)
                userdirrecion = EmpleadoDireccion.objects.create(employee= user , id_dirrecion= dirrecion, id = id)

            # guardamos todo
            dirrecion.save()
            userdirrecion.save()

            return Response({'se cambio la dirrecion' : cliente}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({f'Ocurrrio un error, intenta nuevamente : Error: {e}, id: {id}, User: {user}, dirrecion: {userdirrecion}'}, status=status.HTTP_408_REQUEST_TIMEOUT)
        
    def get(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def delete(self, request, *args, **kwargs):
        return self.forbidden_response()
    
    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class RealizaTransferencia(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def put(self, requets, **kwargs):
        
        cliente = requets.headers.get('cliente')
        try: cliente = int(cliente)
        except: return Response({f'Formato incorrecto -> "cliente" int 1 = Empleado | 0 = CLiente: {cliente}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        if cliente < 0 or cliente > 1:
            return Response({f'Formato incorrecto -> "cliente" int 1 = Empleado | 0 = CLiente: {cliente}'}, status=status.HTTP_406_NOT_ACCEPTABLE)
        
        id = requets.headers.get('id')
        if not id: return Response({f'Falta Heder -> "id" int : {id}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try: id= int(id) 
        except: return Response({f'Falta Heder -> "id" int : {id}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        calle = requets.headers.get('calle')
        if not calle: return Response({f'Falta Heder -> "calle" str : {calle}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        cuidad = requets.headers.get('cuidad')
        if not cuidad: return Response({f'Falta Heder -> "cuidad" str : {cuidad}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        codigopostal = requets.headers.get('codigopostal')
        if not codigopostal: return Response({f'Falta Heder -> "codigopostal" str : {codigopostal}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        pais = requets.headers.get('pais')
        if not pais: return Response({f'Falta Heder -> "pais" str : {pais}'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        try:
            # Creamos la dirrecion
            dirrecion = Direccion.objects.create(calle=calle, ciudad=cuidad,codigo_postal=codigopostal, pais=pais)
            userdirrecion = ''

            # Vemos que es, cliente o empleado
            if cliente == 0:
                try: user = Cliente.objects.get(customer_id = id)
                except: return Response({'El id no fue encontrado'}, status=status.HTTP_204_NO_CONTENT)

                try: ClientesDireccion.objects.get(id= id).delete()
                except: pass

                user = Cliente.objects.get(customer_id = id)
                userdirrecion = ClientesDireccion.objects.create(customer= user , id_dirrecion = dirrecion, id= id)
            else:
                try: user = Empleado.objects.get(employee_id = id)
                except: return Response({'El id no fue encontrado'}, status=status.HTTP_204_NO_CONTENT)

                try: EmpleadoDireccion.objects.get(id= id).delete()
                except: pass

                user = Empleado.objects.get(employee_id = id)
                userdirrecion = EmpleadoDireccion.objects.create(employee= user , id_dirrecion= dirrecion, id = id)

            # guardamos todo
            dirrecion.save()
            userdirrecion.save()

            return Response({'se cambio la dirrecion' : cliente}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({f'Ocurrrio un error, intenta nuevamente : Error: {e}, id: {id}, User: {user}, dirrecion: {userdirrecion}'}, status=status.HTTP_408_REQUEST_TIMEOUT)
        
    def get(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def delete(self, request, *args, **kwargs):
        return self.forbidden_response()
    
    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)


class RealizaCambio(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]


    def put(self, request, *args, **kwargs):
        # Obtener datos del cuerpo (body) de la solicitud
        try:
            data = json.loads(request.body.decode('utf-8'))
            pesos = int(data.get('pesos'))
            dolar = int(data.get('dolar'))
            precio = int(data.get('precio'))
            compra = int(data.get('compra'))
        except (ValueError, TypeError):
            return Response({'error': 'Datos no válidos en el cuerpo de la solicitud.'}, status=status.HTTP_400_BAD_REQUEST)

        # Validar datos
        if compra not in (0, 1):
            return Response({'error': 'El campo "compra" debe ser 0 o 1.'}, status=status.HTTP_400_BAD_REQUEST)

        user = self.request.user
        cliente = Cliente.objects.filter(user_id=user.id)

        if cliente:
            # Traigo todas las cuentas del cliente
            cuentas = Cuenta.objects.filter(customer_id=cliente.first().customer_id)
            
            # Separo entre pesos y dolar
            tipos_cuenta_pesos = TipoCuenta.objects.filter(tipo_cuenta__contains='pesos')
            tipos_cuenta_dolar = TipoCuenta.objects.filter(tipo_cuenta__contains='dolar')
            pesosCuentas = []
            dolarCuentas = []

            for tipo in tipos_cuenta_pesos:
                cuent = cuentas.filter(tipo_cuenta = tipo)
                for cue in cuent:
                    pesosCuentas.append(cue)
            
            for tipo in tipos_cuenta_dolar:
                cuent = cuentas.filter(tipo_cuenta = tipo)
                for cue in cuent:
                    dolarCuentas.append(cue)
            

            if not pesosCuentas:
                return Response({'error': 'No tienes cuenta en pesos'}, status=status.HTTP_406_NOT_ACCEPTABLE)
            
            if not dolarCuentas:
                return Response({'error': 'No tienes cuenta en dolares'}, status=status.HTTP_406_NOT_ACCEPTABLE)
            
            # Si voy a comrpar, veo si tiene cuenta en dolares y le resto la cantidad
            if compra:
                for cuenta in pesosCuentas:
                    print(dolarCuentas)
                    print(pesosCuentas)
                    if cuenta.balance > pesos:
                        try:
                            cuenta.balance -= pesos
                            dolarCuentas[0].balance += dolar
                            id_tipo_operacion = TipoMovimientos.objects.get(tipo='COMPRA_DOLAR')
                            movimientoDescuento = Movimientos.objects.create(numero_cuenta=cuenta, monto=(pesos * -1), id_tipo_operacion=id_tipo_operacion)
                            movimientoAcredita = Movimientos.objects.create(numero_cuenta=dolarCuentas[0], monto=(dolar), id_tipo_operacion=id_tipo_operacion)

                            cuenta.save()
                            dolarCuentas[0].save()
                            movimientoDescuento.save()
                            movimientoAcredita.save()

                            return Response({'message': 'Operación realizada con éxito'}, status=status.HTTP_200_OK)
                        except Exception as e:
                            # Ocurrió un error durante la operación
                            return Response({'error': f'Ocurrió un error, vuelve a intentar: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                        
                return Response({'error': 'No tienes fondos suficientes'}, status=status.HTTP_406_NOT_ACCEPTABLE)
            
            else:
                for cuenta in dolarCuentas:
                    if cuenta.balance > dolar:
                        try:
                            cuenta.balance -= dolar
                            pesosCuentas[0].balance += pesos
                            id_tipo_operacion = TipoMovimientos.objects.get(tipo='VENTA_DOLAR')
                            movimientoDescuento = Movimientos.objects.create(numero_cuenta=cuenta, monto=(dolar * -1), id_tipo_operacion=id_tipo_operacion)
                            movimientoAcredita = Movimientos.objects.create(numero_cuenta=pesosCuentas[0], monto=(pesos), id_tipo_operacion=id_tipo_operacion)

                            cuenta.save()
                            pesosCuentas[0].save()
                            movimientoDescuento.save()
                            movimientoAcredita.save()
                            
                            return Response({'message': 'Operación realizada con éxito'}, status=status.HTTP_200_OK)
                        except Exception as e:
                            # Ocurrió un error durante la operación
                            return Response({'error': f'Ocurrió un error, vuelve a intentar: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                        
                return Response({'error': 'No tienes fondos suficientes'}, status=status.HTTP_406_NOT_ACCEPTABLE)
            
        else:
            # No existe el cliente
            return Response({'error': 'No existe el cliente'}, status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def delete(self, request, *args, **kwargs):
        return self.forbidden_response()
    
    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)


