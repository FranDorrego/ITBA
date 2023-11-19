from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required 
from django.contrib.auth import login as auth_login, logout as logout_user, authenticate
from django.apps import apps

# Create your views here.
def login(request):

    # Obtén todas las aplicaciones instaladas en tu proyecto
    installed_apps = apps.get_app_configs()

    # Itera sobre cada aplicación
    for app_config in installed_apps:
        # Obtén todos los modelos definidos en la aplicación
        models = app_config.get_models()

        # Itera sobre cada modelo en la aplicación
        for model in models:
            # Haz lo que necesites con el modelo
            print(f"Modelo: {model.__name__}, App: {app_config.name}")
    
    if request.method == 'GET':
        return render(request, 'login/login.html')
    else:
        user = authenticate(request, username=request.POST['username'], password = request.POST['password'])
        if user is None:
            return render(request, 'login/login.html',{
                'error': "Usuario o contraseña no valido/os"
            }) 
        else:
            auth_login(request, user)
            return redirect('home')            

def logout(request):
    logout_user(request)
    return redirect('')
    
def password(request):
    return render(request, 'login/password.html')

def register(request):
    return render(request, 'login/register.html')


