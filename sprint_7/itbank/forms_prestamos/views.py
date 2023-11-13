from django.shortcuts import render

# Create your views here.
def forms_prestamos(request):
    context = {
        'cantidad_prestamo' : '123.123'
    }
    return render(request, 'forms_prestamos/forms_prestamos.html', context)