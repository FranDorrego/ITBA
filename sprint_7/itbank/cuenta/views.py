from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from transferencias.models import Cliente, Cuenta
import random

# Create your views here.
@login_required(login_url='/')
def cuenta(request):
    user = request.user.id
    cliente = Cliente.objects.get(user_id = user)
   
    try:
        cuenta = Cuenta.objects.filter(customer_id=cliente.customer_id).first()
    # REALIZAMOS ESTO PQ TUVIMOS UN ERROR EN EL SPRINT ANTERIOR Y LOS clientes y cuentas 
    # NO ESTAN RELACIONADOS UNO A UNO, PARA QUE NO ROMPA LO CREAMOS DE FORMA ALEATORIA Y LO ASOCIAMOS
    except Cuenta.DoesNotExist:
        cuenta = Cuenta.objects.create(customer_id=cliente.customer_id, 
                                       balance=random.randrange(-10000000, 10000001),
                                       tipo_cuenta_id=random.randint(1, 5),
                                       iban='IBAN_ALEATORIO')
    cuenta = Cuenta.objects.filter(customer_id = cliente.customer_id).first()
    diccionario = {
        'cliente': cliente,
        'cuenta': cuenta,
    }
        
    context = {
        "cuenta": [
            {
                "alias": "Juan Villaruel",
                "CBU": "0000065134214875642",
                "cuentaNumero": "CA$ 61058478692",
            }
        ]
    }

    return render(request, "cuenta/cuenta.html", diccionario)
