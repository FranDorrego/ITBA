from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from transferencias.models import Cliente, Prestamo

# Create your views here.
@login_required(login_url='/')
def forms_prestamos(request):
    user = request.user.id
    cliente = Cliente.objects.get(user_id = user)
    prestamos = Prestamo.objects.filter(customer_id=cliente.customer_id)
    total = sum(prestamo.loan_total for prestamo in prestamos)
    
    diccionario = {
        'cliente': cliente,
        'prestamos': prestamos,
        'total': total
    }
    
    context = {
        'cantidad_prestamo' : '123.123'
    }
    return render(request, 'forms_prestamos/forms_prestamos.html', diccionario)