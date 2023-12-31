# Generated by Django 4.2.7 on 2023-12-07 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('muestraData', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientesDireccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'clientes_direccion',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Direccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('calle', models.CharField(max_length=150)),
                ('ciudad', models.CharField(max_length=150)),
                ('codigo_postal', models.CharField(max_length=150)),
                ('pais', models.CharField(max_length=150)),
            ],
            options={
                'db_table': 'direccion',
                'managed': False,
            },
        ),
    ]
