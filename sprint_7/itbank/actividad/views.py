from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='/')
def actividad(request):
    context = {
        "movimientos": [
            {
                "fecha": "12/12/12",
                "tipo": "Salida",
                "motivo": "Pago de tarjeta",
                "cantidad": 123456,
            }
        ],
    }
    return render(request, 'actividad/actividad.html', context)
