from django.db import models
from django.contrib.auth.models import User
from muestraData.models import *


# Create your models here.
class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
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


class Movimientos(models.Model):
    numero_cuenta = models.ForeignKey( Cuenta, models.DO_NOTHING, db_column="numero_cuenta" )
    monto = models.IntegerField()
    id_tipo_operacion = models.ForeignKey( "TipoMovimientos", models.DO_NOTHING, db_column="id_tipo_operacion" )
    hora = models.DateTimeField(blank=True, null=True, auto_now=True)

    class Meta:
        managed = False
        db_table = "movimientos"

class TipoMovimientos(models.Model):
    id = models.IntegerField(primary_key=True)
    tipo = models.TextField()

    class Meta:
        managed = False
        db_table = "tipo_movimientos"