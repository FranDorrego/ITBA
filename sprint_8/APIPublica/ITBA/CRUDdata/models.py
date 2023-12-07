from django.db import models
from django.contrib.auth.models import User

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