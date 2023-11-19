from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='/')
def facturas(request):
    context={
        "por_vencer": [
            {
                "fecha": "12/12/12",
                "tipo": "No pagado",
                "motivo": "Aguas Cordobesas",
                "cantidad": 123456,
            }
        ],
        "historial": [
            {
                "fecha": "12/11/12",
                "tipo": "Pagado",
                "motivo": "Pago de Telefono",
                "cantidad": 123456,
            },
            {
                "fecha": "12/10/12",
                "tipo": "Pagado",
                "motivo": "Pago de Epec",
                "cantidad": 123456,
            }
        ],
    }

    return render(request, 'facturas/facturas.html', context)