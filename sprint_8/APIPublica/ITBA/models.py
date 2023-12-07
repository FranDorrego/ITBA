# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from ITBA.muestraData.models import *
from ITBA.CRUDdata.models import *

class EmpleadoDireccion(models.Model):
    employee = models.ForeignKey(Empleado, models.DO_NOTHING, blank=True, null=True)
    id_dirrecion = models.ForeignKey(
        Direccion, models.DO_NOTHING, db_column="id_dirrecion", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "empleado_direccion"


class TipoCliente(models.Model):
    tipo_cliente = models.TextField()  # This field type is a guess.
    limite_tarjetas_debito = models.IntegerField(blank=True, null=True)
    limite_caja_ahorro_pesos = models.IntegerField(blank=True, null=True)
    limite_caja_ahorro_dolares = models.IntegerField(blank=True, null=True)
    cargo_mensual_cuanta_dolares = models.IntegerField(blank=True, null=True)
    limite_cuenta_corriente_pesos = models.IntegerField(blank=True, null=True)
    limite_cuenta_corriente_dolares = models.IntegerField(blank=True, null=True)
    limite_retiro_efectivo = models.IntegerField(blank=True, null=True)
    retiro_sin_comisiones = models.IntegerField(blank=True, null=True)
    limite_tarjeta_credito = models.IntegerField(blank=True, null=True)
    limite_pago_tarjeta = models.IntegerField(blank=True, null=True)
    tipo_tarjeta = models.TextField(blank=True, null=True)
    limite_cuotas = models.IntegerField(blank=True, null=True)
    transferencia_saliente = models.IntegerField(blank=True, null=True)
    transferencia_entrante = models.IntegerField(blank=True, null=True)
    limite_cuenta_inversion = models.IntegerField(blank=True, null=True)
    limite_chequeras = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "tipo_cliente"






