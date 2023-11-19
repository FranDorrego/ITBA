from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required 
from django.contrib.auth import login as auth_login, logout as logout_user, authenticate

# Create your views here.
def login(request):
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


