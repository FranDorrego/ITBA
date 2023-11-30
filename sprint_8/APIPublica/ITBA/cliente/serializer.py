from rest_framework import serializers
from .models import Cliente, Cuenta, TipoCuenta, Prestamo

class TipoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCuenta
        fields = ['tipo_cuenta']  

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'
        read_oly_fields = '__all__'

class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ['balance', 'tipo_cuenta_id']
        read_oly_fields = '__all__'

class PrestamosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['loan_type', 'loan_total']
        read_oly_fields = '__all__'