from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView, Response
from .models import Cliente, Cuenta, Prestamo
from .serializer import ClienteSerializer, CuentaSerializer, PrestamosSerializer
from rest_framework import viewsets, permissions, status, authentication

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