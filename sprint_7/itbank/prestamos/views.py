from django.shortcuts import render


# Create your views here.
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