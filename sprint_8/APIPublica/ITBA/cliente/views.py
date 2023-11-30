from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from .models import Cliente
from .serializer import ClienteSerializer
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