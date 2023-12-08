from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from ...models import *
from muestraData.models import *

class Command(BaseCommand):
    help = 'Crea usuarios para todos los empleados existentes'

    def handle(self, *args, **options):

        def recorre(obejtos, id_comienza = 0, base_name = 'empleado_'):
            for i, obejto in enumerate(obejtos):
                # Supongamos que usamos el nombre del empleado como nombre de usuario
                username = base_name + str(i)
                
                # Crear el usuario
                user = User.objects.create(username=username)
                user.set_password('password')
                obejto.user_id = i + 1 + id_comienza
                obejto.save()
                user.save()
                
                self.stdout.write(self.style.SUCCESS(f'Se creó el usuario para {obejto}: {username} : {user} : {user.password}'))

        # Toma todos los Empleados y le asigna un usuario
        empleados = Empleado.objects.all()
        recorre(empleados)

        # Toma todos los Clientes y le asigna un usuario
        clientes = Cliente.objects.all()
        recorre(clientes, 500, 'user_')