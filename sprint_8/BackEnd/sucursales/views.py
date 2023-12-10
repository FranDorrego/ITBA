from django.shortcuts import render
from rest_framework.views import APIView, status, Response
from .models import Sucursal
from .serializer import SucursalSerializer
# Create your views here.

class SucursalesView(APIView):
    def get(self, requets,**kwargs):
        sucursales = Sucursal.objects.all()
        serializado = SucursalSerializer(sucursales, many= True)
        return Response(serializado.data, status=status.HTTP_200_OK)