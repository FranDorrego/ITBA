from django.db import models

class Empleado(models.Model):
    class Meta:
        permissions = [
            ('empleado','empleado')
        ]

class ClientePermiso(models.Model):
    class Meta:
        permissions = [
            ('cliente','cliente')
        ]
        