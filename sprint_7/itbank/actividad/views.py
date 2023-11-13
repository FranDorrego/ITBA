from django.shortcuts import render


# Create your views here.
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
