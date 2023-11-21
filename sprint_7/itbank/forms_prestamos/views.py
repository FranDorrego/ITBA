from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from transferencias.models import Cliente, Cuenta,Prestamo, Movimientos, TipoMovimientos
import time
from .forms import FormularioSolicitaPrestamo

# Create your views here.
@login_required(login_url='/')
def forms_prestamos(request):

    user = request.user.id
    cliente = Cliente.objects.get(user_id = user)

    if cliente.tipo_cliente_id == 1:
        cantidad = 10000
    elif cliente.tipo_cliente_id == 2:
        cantidad = 20000
    elif cliente.tipo_cliente_id == 3:
        cantidad = 30000
        
    if request.method == 'POST':
        # Saco los datos del formulario
        formulario = FormularioSolicitaPrestamo(request.POST)
        if formulario.is_valid():
            fecha = formulario.cleaned_data['fecha']
            tipo = formulario.cleaned_data['tipo']
            
            # creo el prestamo
            Prestamo.objects.create(
                loan_type = tipo,
                loan_date = fecha.timestamp(),
                loan_total = cantidad,
                customer_id = cliente.customer_id
                )

            # creo el movimiento
            CuentaNumero = Cuenta.objects.get(customer_id = cliente.customer_id)
            Movimientos.objects.create(
                numero_cuenta = CuentaNumero,
                monto = cantidad,
                id_tipo_operacion = TipoMovimientos.objects.get(tipo='PRESTAMO'),
                hora = fecha.timestamp()
            )

            # le sumo el dinero a la cuenta
            CuentaNumero.balance += cantidad
            CuentaNumero.save()

            context = {
                'forms' : FormularioSolicitaPrestamo(),
                'cantidad_prestamo' : cantidad,
                'estado': 'Prestamo Aprobado!'
            }
        else:
            context = {
                'forms' : FormularioSolicitaPrestamo(),
                'cantidad_prestamo' : cantidad,
                'estado': 'Ocurrio un error, valida los datos ingresados'
            }
            l
    else:
        prestamos = Prestamo.objects.filter(customer_id=cliente.customer_id)
        total = sum(prestamo.loan_total for prestamo in prestamos)
        
        context = {
            'forms' : FormularioSolicitaPrestamo(),
            'cantidad_prestamo' : cantidad,
            'estado': ''
        }
    
    return render(request, 'forms_prestamos/forms_prestamos.html', context)