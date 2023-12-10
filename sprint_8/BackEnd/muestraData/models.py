from django.db import models

# Create your models here.

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
    user_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = "cliente"

class ClientesDireccion(models.Model):
    id = models.IntegerField(primary_key=True)
    customer = models.ForeignKey(Cliente, models.DO_NOTHING, blank=True, null=True)
    id_dirrecion = models.ForeignKey(
        "Direccion", models.DO_NOTHING, db_column="id_dirrecion", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "clientes_direccion"

class TipoCuenta(models.Model):
    tipo_cuenta = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = "tipo_cuenta"

class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField()
    balance = models.IntegerField()
    iban = models.TextField()
    tipo_cuenta = models.ForeignKey(TipoCuenta, on_delete=models.CASCADE)

    class Meta:
        managed = False
        db_table = "cuenta"

class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField(max_length=100)
    loan_date = models.DateField(auto_now=True)
    loan_total = models.IntegerField()
    customer_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = "prestamo"

class Direccion(models.Model):
    id=models.AutoField(primary_key=True)
    calle = models.CharField(max_length=150)
    ciudad = models.CharField(max_length=150)
    codigo_postal = models.CharField(max_length=150)
    pais = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = "direccion"

class MarcaTarjeta(models.Model):
    marca_tarjeta = models.TextField(max_length=120)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = "marca_tarjeta"

class TipoTarjeta(models.Model):
    tipo_tarjeta = models.TextField(max_length=150)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = "tipo_tarjeta"

class Tarjeta(models.Model):
    numero = models.CharField(max_length=300, unique=True, blank=True, null=True)
    cvv = models.IntegerField()
    fecha_otorgamiento = models.DateTimeField()
    fecha_exipracion = models.DateTimeField()
    tipo_tarjeta = models.ForeignKey(TipoTarjeta, models.DO_NOTHING)
    marca_tarjeta = models.ForeignKey(MarcaTarjeta, models.DO_NOTHING)
    id_cliente = models.ForeignKey(
        Cliente, models.DO_NOTHING, db_column="id_cliente", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "tarjeta"