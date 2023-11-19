from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='/')
def forms_prestamos(request):
    context = {
        'cantidad_prestamo' : '123.123'
    }
    return render(request, 'forms_prestamos/forms_prestamos.html', context)