from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from transferencias.models import Cliente, Cuenta, Prestamo
import random

# Create your views here.
@login_required(login_url='/')
def prestamos(request):
    user = request.user.id
    cliente = Cliente.objects.get(user_id = user)
    prestamos = Prestamo.objects.filter(customer_id=cliente.customer_id)
    
    diccionario = {
        'cliente':cliente,
        'prestamos':prestamos
    }
    

    return render(request, 'prestamos\prestamos.html', diccionario)