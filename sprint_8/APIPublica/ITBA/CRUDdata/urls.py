from django.urls import path
from CRUDdata import views

urlpatterns =[
    path('administraprestamo/', views.administraPrestamo.as_view())
]