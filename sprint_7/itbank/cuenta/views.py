from django.shortcuts import render


# Create your views here.
def cuenta(request):
    context = {
        "cuenta": [
            {
                "alias": "Juan Villaruel",
                "CBU": "0000065134214875642",
                "cuentaNumero": "CA$ 61058478692",
            }
        ]
    }

    return render(request, "cuenta/cuenta.html", context)
