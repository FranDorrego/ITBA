from rest_framework import serializers
from .models import Cliente, Cuenta, TipoCuenta, Prestamo


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'
        read_oly_fields = '__all__'

class TipoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCuenta
        fields = ['tipo_cuenta']

class CuentaSerializer(serializers.ModelSerializer):
    tipo_cuenta = TipoCuentaSerializer(read_only=True)
    class Meta:
        model = Cuenta
        fields = ['balance', 'tipo_cuenta']
        read_only_fields = ['balance', 'tipo_cuenta.get(tipo_cuenta)']

class PrestamosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['loan_type', 'loan_total']
        read_oly_fields = '__all__'