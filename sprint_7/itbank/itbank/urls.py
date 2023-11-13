"""
URL configuration for itbank project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import login.views as login
import home.views as home
import actividad.views as actividad
import cuenta.views as cuenta
import tarjetas.views as tarjeta

urlpatterns = [

    # Login
    path('', login.login, name=""),
    path('password', login.password, name="password"),
    path('register', login.register, name="register"),

    # Home | Dashboard
    path('home', home.home, name="home"),

    # Actividad
    path('actividad', actividad.actividad, name="actividad"),

    # Cuentas
    path('cuentas', cuenta.cuenta, name="cuentas"),

    # Tarjetas
    path('credito', tarjeta.tarjeta, name="credito"),

    # Admin
    path('admin/', admin.site.urls),
]
