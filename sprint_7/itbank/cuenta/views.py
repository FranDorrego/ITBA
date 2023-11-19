from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='/')
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
