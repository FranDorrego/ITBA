from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import models

class Empleado(models.Model):
    class Meta:
        permissions = [
            ('empleado','empleado')
        ]

