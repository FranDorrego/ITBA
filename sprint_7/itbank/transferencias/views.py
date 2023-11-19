from django.shortcuts import render

# Create your views here.
def ver_all_transferencias(request):
    context={
        "transferencias": [
            {
                "fecha": "12/11/12",
                "tipo": "enviada",
                "motivo": "VARIOS",
                "cantidad": 123456,
            },
            {
                "fecha": "12/10/12",
                "tipo": "Ingreso",
                "motivo": "VARIOS",
                "cantidad": 123456,
            }
        ],
    }

    return render(request, "transferencias/transferencias.html", context)
