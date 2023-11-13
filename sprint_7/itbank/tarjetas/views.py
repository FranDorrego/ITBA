from django.shortcuts import render

# Create your views here.
def tarjeta(request):
    context={
        'gasto_mes': 12345,
        'saldo_disponible': 123,
        'fecha_cierre': 456,
        'historial': [
            {
                'cantidad':123,
                'motivo': "Pago de Itba",
                'tipo': 'retiro',
                'fecha': '12/12/2023'
            }
        ]
    }

    return render(request, 'tarjetas/tarjetas.html', context)