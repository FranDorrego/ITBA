from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='/')
def home(request):
    context = {
        "user": "carlos",
        "actualCuenta": 123456,
        "cantidadIngreso": 123,
        "cantidadEgreso": 456,
        "movimientos" : [
            {
                "fecha": '12/12/12',
                "tipo": 'Salida',
                "motivo": 'Pago de tarjeta',
                "cantidad": 123456
            }
        ],
        }

    return render(request, 'home/home.html', context)
        