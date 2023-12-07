from rest_framework import serializers
from .models import *

class MovimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimientos
        fields = '__all__'
        read_oly_fields = '__all__'