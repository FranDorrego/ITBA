from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='/')
def prestamos(request):

    context = {
        "historial" : [
            {
                "fecha": "12/12/12",
                "tipo": "Ingreso",
                "motivo": "Prestamo",
                "cantidad": 123456,
            }
        ]
    }

    return render(request, 'prestamos\prestamos.html', context)