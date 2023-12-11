from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView, Response
from CRUDdata.models import *
from .serializer import *
from .permissions import *
from rest_framework import viewsets, permissions, status, authentication
from sucursales.models import Sucursal
import base64
from operator import itemgetter

# Create your views here.
class ClienteViews(viewsets.ModelViewSet):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    serializer_class= ClienteSerializer

    def get_queryset(self):
        # Filtra el queryset para mostrar solo los datos del usuario autenticado
        user = self.request.user
        cliente = Cliente.objects.filter(user_id=user.id)
        return cliente
    
class SaldosViews(viewsets.ModelViewSet):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    serializer_class= CuentaSerializer

    def get_queryset(self):
        # Filtra el queryset para mostrar solo los datos del usuario autenticado
        user = self.request.user
        cliente = Cliente.objects.filter(user_id=user.id).first()
        cuenta = Cuenta.objects.filter(customer_id=cliente.customer_id)
        return cuenta
    
class PrestamosViews(viewsets.ModelViewSet):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    serializer_class= PrestamosSerializer

    def get_queryset(self):
        # Filtra el queryset para mostrar solo los datos del usuario autenticado
        user = self.request.user
        cliente = Cliente.objects.filter(user_id=user.id).first()
        cuenta = Prestamo.objects.filter(customer_id=cliente.customer_id)
        return cuenta

class prestamoDetailView(APIView):
    authentication_classes = [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk, **kwargs):
        # Filtra el queryset para mostrar solo los datos del usuario autenticado
        user = request.user
        cliente = Cliente.objects.filter(user_id=user.id).first()
        
        try:
            prestamo = Prestamo.objects.get(customer_id=cliente.customer_id, loan_id=pk)
            return Response(PrestamosAllSerializer(prestamo).data, status=status.HTTP_200_OK)
        except Prestamo.DoesNotExist:
            return Response({'error': 'Prestamo no encontrado'}, status=status.HTTP_404_NOT_FOUND)
     
class PrestamosSucursalesViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, id, **kwargs):

        # Si tiene permisos, salta un error
        if not requets.user.has_perm('muestraData.empleado'):
            return Response({'No tienes permiso'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Saco la sucursal
        sucursal = Sucursal.objects.filter(branch_id=id)

        if sucursal:
            # Traigo los clientes de esa sucursal
            clientes = Cliente.objects.filter(branch_id = id)
            # Traigo los prestamos de esos clientes
            prestamos_lista = []
            for cliente in clientes:
                prestamos = Prestamo.objects.filter(customer_id = cliente.customer_id)
                if prestamos:
                    if isinstance(prestamos_lista, list):
                        for prestamo in prestamos:
                            prestamos_lista.append(PrestamosAllSerializer(prestamo).data)
                    else:
                        prestamos_lista.append(PrestamosAllSerializer(prestamos.first()).data)

            # Serializo todo y meustro en lista
            return Response(prestamos_lista, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not id'}, status=status.HTTP_400_BAD_REQUEST) 

    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class TarjetasClienteViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, id, **kwargs):        
        # Si tiene permisos, salta un error
        if not requets.user.has_perm('muestraData.empleado'):
            return Response({'No tienes permiso'}, status=status.HTTP_401_UNAUTHORIZED) 
        
        # Saco el cliente
        cliente = Cliente.objects.filter(customer_id=id)

        if cliente:
            # Traigo las tarjetas de ese cliente
            tarjetas = Tarjeta.objects.filter(id_cliente = id)
            # Serializo todo y meustro en lista
            return Response(TarjetaSerializer(tarjetas.first()).data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not cliente con ese id'}, status=status.HTTP_400_BAD_REQUEST) 
        
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class movimientosViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, **kwargs):        
        # Saco el cliente
        user = self.request.user
        cliente = Cliente.objects.filter(user_id= user.id)

        if cliente:
            # Traigo las cuentas de ese cliente
            cuentas = Cuenta.objects.filter(customer_id= cliente.first().customer_id)
            
            # traigo los movimientos de esas cuentas
            movimientos = []
            for cuenta in cuentas:
                movimiento = Movimientos.objects.filter(numero_cuenta=cuenta.account_id).order_by('-id')
                for movi in movimiento:
                    movimientos.append(MovimientoSerializer(movi).data)

            # Ordeno la lista de movimientos según el campo 'id' de manera creciente
            movimientos = sorted(movimientos, key=itemgetter('id'), reverse=True)

            # Serializo todo y meustro en lista
            return Response(movimientos, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not cliente con ese id'}, status=status.HTTP_400_BAD_REQUEST) 
        
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class creditoDatos(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, **kwargs):        
        # Saco el cliente
        user = self.request.user
        cliente = Cliente.objects.filter(user_id= user.id)

        if not cliente:
            return Response({'error': 'not cliente con ese id'}, status=status.HTTP_400_BAD_REQUEST) 

        # Traigo las cuentas de ese cliente
        tarjeta = Tarjeta.objects.filter(id_cliente= cliente.first().customer_id)
        print(tarjeta.first().fecha_exipracion)

        if not tarjeta:
            return Response({'error': 'Este cliente no tiene tarjeta'}, status=status.HTTP_404_NOT_FOUND) 

        # Serializo todo
        return Response(TarjetaSerializer(tarjeta.first()).data, status=status.HTTP_200_OK)

            
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)


class movimientoDetailViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk, **kwargs):   
        id = pk
        try:      
            user = self.request.user
            cliente = Cliente.objects.get(user_id= user.id)
            cuentas = Cuenta.objects.filter(customer_id = cliente.customer_id)

            for cuenta in cuentas:
                movimiento =  Movimientos.objects.get(id = id, numero_cuenta = cuenta.account_id)
                return Response(MovimientoSerializer(movimiento).data, status=status.HTTP_200_OK)
            
            return Response('No tienes movimientos asociados a esta cuenta', status=status.HTTP_404_NOT_FOUND)
        
        except: return Response([], status=status.HTTP_200_OK)
       
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class cuentasViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, **kwargs): 
        # Saco el cliente
        user = self.request.user
        cliente = Cliente.objects.filter(user_id= user.id)

        if cliente:
            # Traigo las cuentas de ese cliente
            cuentas = Cuenta.objects.filter(customer_id= cliente.first().customer_id).order_by('tipo_cuenta_id')

            # Serializo todo y meustro en lista
            serializers = []
            for cuenta in cuentas:
                serializers.append(CuentaAllSerializer(cuenta).data)
           
            return Response(serializers, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not cliente con ese id'}, status=status.HTTP_400_BAD_REQUEST) 
        
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class statusViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, **kwargs): 
        # Saco el cliente
        user = self.request.user
        cliente = Cliente.objects.filter(user_id= user.id)

        if cliente:
            # Traigo las cuentas de ese cliente
            cuentas = Cuenta.objects.filter(customer_id= cliente.first().customer_id)

            # traigo movimientos
            saldo = 0
            ingreso = 0
            egreso = 0

            for cuenta in cuentas:
                saldo += cuenta.balance
                movimientos = Movimientos.objects.filter(numero_cuenta = cuenta.account_id)
                
                for movimiento in movimientos:
                    if movimiento.monto > 0: ingreso += movimiento.monto
                    else: egreso += movimiento.monto

            # Ordeno todo y muestro
            data = {
                "total" : saldo,
                "ingresos" : ingreso,
                "retiros" : egreso
            }

            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not cliente con ese id'}, status=status.HTTP_400_BAD_REQUEST) 
        
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)

class tarjetaViews(APIView):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, requets, **kwargs):        
        # Saco el cliente
        user = self.request.user
        cliente = Cliente.objects.filter(user_id= user.id)

        if cliente:
            # Traigo las cuentas de ese cliente
            tarejtas = Tarjeta.objects.filter(id_cliente= cliente.first().customer_id)

            # Serializo todo y meustro en lista
            serializers = []
            for tarejta in tarejtas:
                serializers.append(TarjetaSerializer(tarejta).data)
           
            return Response(serializers, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not cliente con ese id'}, status=status.HTTP_400_BAD_REQUEST) 
        
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)
