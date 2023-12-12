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
    
    def put(self, request, *args, **kwargs):
        return self.forbidden_response()

    def post(self, request, *args, **kwargs):
        return self.forbidden_response()

    def patch(self, request, *args, **kwargs):
        return self.forbidden_response()

    def forbidden_response(self):
        return Response({'detail': 'Acceso prohibido.'}, status=status.HTTP_403_FORBIDDEN)