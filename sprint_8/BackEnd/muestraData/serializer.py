from rest_framework import serializers
from CRUDdata.models import *
from rest_framework.reverse import reverse

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
        read_only_fields = ['balance', 'tipo_cuenta']

class CuentaAllSerializer(serializers.ModelSerializer):
    tipo_cuenta = TipoCuentaSerializer(read_only=True)
    class Meta:
        model = Cuenta
        fields = '__all__'
        read_only_fields = ['balance', 'tipo_cuenta.get(tipo_cuenta)']

class PrestamosSerializer(serializers.ModelSerializer):
    detalle_url = serializers.HyperlinkedIdentityField(
        view_name='prestamo-detail', 
    )

    class Meta:
        model = Prestamo
        fields = ['loan_type', 'loan_total', 'detalle_url']
        read_oly_fields = '__all__'

class PrestamosAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = '__all__'
        read_oly_fields = '__all__'

class marca_tarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarcaTarjeta
        fields = '__all__'
        read_oly_fields = '__all__'

class TarjetaSerializer(serializers.ModelSerializer):
    marca_tarjeta = marca_tarjetaSerializer(read_only=True)
    class Meta:
        model = Tarjeta
        fields = '__all__'
        read_oly_fields = '__all__'



class TipoMovimientosSerialarzer(serializers.ModelSerializer):
    class Meta:
        model = TipoMovimientos
        fields = ['tipo']
        read_oly_fields = '__all__'


class MovimientoSerializer(serializers.ModelSerializer):
    motivo = TipoMovimientosSerialarzer(read_only=True)
    detalle_url = serializers.SerializerMethodField()
    tipo_cuenta = serializers.SerializerMethodField()

    class Meta:
        model = Movimientos
        fields = ['id', 'monto', 'hora', 'motivo', 'id_tipo_operacion', 'detalle_url', 'tipo_cuenta']

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        # Obtén el objeto TipoMovimiento y serialízalo
        tipo_movimiento = TipoMovimientos.objects.get(id=representation['id_tipo_operacion'])
        tipo_movimiento_serializer = TipoMovimientosSerialarzer(tipo_movimiento)

        # Agrega la representación serializada de TipoMovimiento a la respuesta
        representation['motivo'] = str(tipo_movimiento_serializer.data.get('tipo')).replace('_', ' ').capitalize()

        return representation

    def get_detalle_url(self, obj):
        # Usa la reverse para construir la URL del detalle basada en el nombre de la vista
        return reverse('movimiento-detail', kwargs={'pk': obj.id}, request=self.context.get('request'))

    def get_tipo_cuenta(self, obj):
        # Obtiene el número de cuenta desde la relación
        numero_cuenta = obj.numero_cuenta.tipo_cuenta_id 
        cuenta = TipoCuenta.objects.get(id = numero_cuenta )
        return TipoCuentaSerializer(cuenta).data.get('tipo_cuenta')