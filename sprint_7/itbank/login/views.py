from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'login/login.html')

def password(request):
    return render(request, 'login/password.html')

def register(request):
    return render(request, 'login/register.html')