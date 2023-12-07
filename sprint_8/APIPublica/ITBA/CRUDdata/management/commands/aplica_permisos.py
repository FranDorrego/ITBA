from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from ...models import *
from muestraData.models import *
from muestraData.permissions import *

class Command(BaseCommand):
    help = 'Aplica permisos a todos los empleados'

    def handle(self, *args, **options):

        # Toma todos los Empleados y le asigna un usuario
        empleados = Empleado.objects.all()

        for empleado in empleados:
            user = User.objects.filter(id = empleado.user_id).first()
            user.user_permissions.add('empleado')
