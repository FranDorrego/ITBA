# Generated by Django 4.2.7 on 2023-12-08 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CRUDdata', '0002_movimientos_tipomovimientos'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmpleadoDireccion',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'empleado_direccion',
                'managed': False,
            },
        ),
    ]