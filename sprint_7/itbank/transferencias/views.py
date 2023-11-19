from django.shortcuts import render
from .forms import formlarioTransferencia
from .models import *
from django.db import transaction

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

def realizar_transferencia(request):


    if request.method == 'POST':
        form = formlarioTransferencia(request.POST)
        if form.is_valid():
            with transaction.atomic():
                # Obtener datos del formulario
                nombre_cliente = form.cleaned_data['nombre']
                cantidad = form.cleaned_data['cantidad']
                motivo = form.cleaned_data['motivo']

                # Realizar actualizaciones en la base de datos
                # Aquí debes adaptar estas consultas según tus modelos y lógica específica
                cuenta_origen = Cuenta.objects.get(account_id=200)
                cuenta_destino = Cuenta.objects.get(account_id=400)

                # Actualizar saldos
                cuenta_origen.balance -= cantidad
                cuenta_origen.save()

                cuenta_destino.balance += cantidad
                cuenta_destino.save()

                # Crear registros en la tabla Movimientos
                tipo_movimiento_enviada = TipoMovimientos.objects.get(tipo='TRANSFERENCIA_ENVIADA')
                tipo_movimiento_recibida = TipoMovimientos.objects.get(tipo='TRANSFERENCIA_RECIBIDA')

                Movimientos.objects.create(numero_cuenta=cuenta_origen, monto=-cantidad, id_tipo_operacion=tipo_movimiento_enviada.id)
                Movimientos.objects.create(numero_cuenta=cuenta_destino, monto=cantidad, id_tipo_operacion=tipo_movimiento_recibida.id)

            # Aquí puedes redirigir a una página de éxito o realizar otras acciones después de
            #  la transacción
            return render(request, 'exito.html')
    else:
        form = formlarioTransferencia()

    context = { 'form' : form }

    return render(request, "transferencias/realizaTransferencia.html", context)
    
