from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView, Response
from .models import Cliente, Cuenta, Prestamo
from .serializer import *
from rest_framework import viewsets, permissions, status, authentication
from sucursales.models import Sucursal

# Create your views here.
class ClienteViews(viewsets.ModelViewSet):
    authentication_classes= [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    serializer_class= ClienteSerializer

    def get_queryset(self):
        # Filtra el queryset para mostrar solo los datos del usuario autenticado
        user = self.request.user
        return Cliente.objects.filter(user_id=user.id)
    
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
                    prestamos_lista.append(PrestamosAllSerializer(prestamos.first()).data)
            # Serializo todo y meustro en lista
            return Response(prestamos_lista, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'not id'}, status=status.HTTP_400_BAD_REQUEST) 
