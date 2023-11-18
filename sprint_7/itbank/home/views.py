from django.shortcuts import render, redirect


# Create your views here.
def home(request):
    context = {
        "user": "carlos",
        "actualCuenta": 123456,
        "cantidadIngreso": 123,
        "cantidadEgreso": 456,
        "movimientos" : [
            {
                "fecha": '12/12/12',
                "tipo": 'Salida',
                "motivo": 'Pago de tarjeta',
                "cantidad": 123456
            }
        ],
        }
    if request.method == 'POST':
        usuario = request.POST['usuario']
        dni = request.POST['dni']
        password = request.POST['password']

        if len(usuario) < 4 or len(dni) < 4 or len(password) < 8:
            # Realiza las acciones correspondientes si los datos no son válidos
            
            return render(request, 'login/login.html', {'mensaje_error': 'Datos no válidos'})
        else:
            # Realiza las acciones correspondientes si los datos son válidos
            return render(request, 'home/home.html', context)
    else:
        return render(request, 'home/home.html', context)
        