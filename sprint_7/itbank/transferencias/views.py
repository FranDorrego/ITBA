from django.shortcuts import render, HttpResponse
from .forms import formlarioTransferencia
from .models import *
from django.db import transaction
import random

# Create your views here.
def ver_all_transferencias(request):
    user = request.user.id
    cliente = Cliente.objects.get(user_id = user)
   
    try:
        cuenta = Cuenta.objects.filter(customer_id=cliente.customer_id).first()
    except Cuenta.DoesNotExist:
        cuenta = Cuenta.objects.create(customer_id=cliente.customer_id, 
                                       balance=random.randrange(-10000000, 10000001),
                                       tipo_cuenta_id=random.randint(1, 5),
                                       iban='IBAN_ALEATORIO')
        
    cuenta = Cuenta.objects.filter(customer_id = cliente.customer_id).first()
    movimientos = Movimientos.objects.filter(numero_cuenta=cuenta.account_id)
    movimientos = list(movimientos)

    context={
        "transferencias": movimientos,
    }

    
    return render(request, "transferencias/transferencias.html", context)


def realizar_transferencia(request):

    estado = ''
    
    if request.method == 'POST':
            user = request.user.id
            cliente = Cliente.objects.get(user_id = user)
            form = formlarioTransferencia(request.POST)
            form.is_valid()
            with transaction.atomic():
                # Obtener datos del formulario
                nombre_cliente = form.cleaned_data['nombre']
                cantidad = form.cleaned_data['cantidad']
                motivo = form.cleaned_data['motivo']

                # Obtener cuenta de origen (adaptar según tu lógica)
                try:
                    cuenta_origen = Cuenta.objects.get(customer_id=cliente.customer_id)  # Reemplaza 200 con el valor correcto
                except Cuenta.DoesNotExist:
                    context = { 'form': formlarioTransferencia(), 'estado' : "La cuenta origen no fue encontrada" }
                    return render(request, "transferencias/realizaTransferencia.html", context)

                # Obtener cuenta de destino (adaptar según tu lógica)
                try:
                    cuenta_destino = Cuenta.objects.get(customer_id=nombre_cliente.customer_id)  # Reemplaza 400 con el valor correcto
                except Cuenta.DoesNotExist:
                    context = { 'form': formlarioTransferencia(), 'estado' : "La cuenta destino no fue encontrada" }
                    return render(request, "transferencias/realizaTransferencia.html", context)

                # Actualizar saldos
                cuenta_origen.balance -= cantidad
                cuenta_origen.save()

                cuenta_destino.balance += cantidad
                cuenta_destino.save()

                # Crear registros en la tabla Movimientos
                tipo_movimiento_enviada = TipoMovimientos.objects.get(tipo='TRANSFERENCIA_ENVIADA')
                tipo_movimiento_recibida = TipoMovimientos.objects.get(tipo='TRANSFERENCIA_RECIBIDA')

                Movimientos.objects.create(numero_cuenta=cuenta_origen, monto=-cantidad, id_tipo_operacion=tipo_movimiento_enviada)
                Movimientos.objects.create(numero_cuenta=cuenta_destino, monto=cantidad, id_tipo_operacion=tipo_movimiento_recibida)

            # Aquí puedes redirigir a una página de éxito o realizar otras acciones después de la transacción
            context = { 'form': form, 'estado' : "¡Transferencia enviada con exito!" }
            return render(request, "transferencias/realizaTransferencia.html", context)

    context = {
        'form': formlarioTransferencia(),
        'estado' : estado
        }

    return render(request, "transferencias/realizaTransferencia.html", context)
    
