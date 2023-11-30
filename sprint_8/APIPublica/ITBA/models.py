# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField()
    customer_surname = models.TextField()  # This field type is a guess.
    customer_dni = models.TextField(
        db_column="customer_DNI"
    )  # Field name made lowercase.
    dob = models.TextField(blank=True, null=True)
    branch_id = models.IntegerField()
    tipo_cliente_id = models.IntegerField(blank=True, null=True)
    user_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "cliente"


class ClientesDireccion(models.Model):
    customer = models.ForeignKey(Cliente, models.DO_NOTHING, blank=True, null=True)
    id_dirrecion = models.ForeignKey(
        "Direccion", models.DO_NOTHING, db_column="id_dirrecion", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "clientes_direccion"


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField()
    balance = models.IntegerField()
    iban = models.TextField()
    tipo_cuenta_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "cuenta"


class Direccion(models.Model):
    calle = models.CharField()
    ciudad = models.CharField()
    codigo_postal = models.CharField()
    pais = models.CharField()

    class Meta:
        managed = False
        db_table = "direccion"


class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.TextField()
    employee_surname = models.TextField()
    employee_hire_date = models.TextField()
    employee_dni = models.TextField(
        db_column="employee_DNI"
    )  # Field name made lowercase.
    branch_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = "empleado"


class EmpleadoDireccion(models.Model):
    employee = models.ForeignKey(Empleado, models.DO_NOTHING, blank=True, null=True)
    id_dirrecion = models.ForeignKey(
        Direccion, models.DO_NOTHING, db_column="id_dirrecion", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "empleado_direccion"


class MarcaTarjeta(models.Model):
    marca_tarjeta = models.TextField()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = "marca_tarjeta"


class Movimientos(models.Model):
    numero_cuenta = models.ForeignKey(
        Cuenta, models.DO_NOTHING, db_column="numero_cuenta"
    )
    monto = models.IntegerField()
    id_tipo_operacion = models.ForeignKey(
        "TipoMovimientos", models.DO_NOTHING, db_column="id_tipo_operacion"
    )
    hora = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "movimientos"


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField()
    loan_date = models.TextField()
    loan_total = models.IntegerField()
    customer_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = "prestamo"


class Tarjeta(models.Model):
    numero = models.CharField(unique=True, blank=True, null=True)
    cvv = models.IntegerField()
    fecha_otorgamiento = models.DateTimeField()
    fecha_exipracion = models.DateTimeField()
    tipo_tarjeta = models.ForeignKey("TipoTarjeta", models.DO_NOTHING)
    marca_tarjeta = models.ForeignKey(MarcaTarjeta, models.DO_NOTHING)
    id_cliente = models.ForeignKey(
        Cliente, models.DO_NOTHING, db_column="id_cliente", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "tarjeta"


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


class TipoCuenta(models.Model):
    tipo_cuenta = models.CharField()

    class Meta:
        managed = False
        db_table = "tipo_cuenta"


class TipoMovimientos(models.Model):
    tipo = models.TextField()

    class Meta:
        managed = False
        db_table = "tipo_movimientos"


class TipoTarjeta(models.Model):
    tipo_tarjeta = models.TextField()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = "tipo_tarjeta"
