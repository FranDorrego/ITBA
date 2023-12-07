from django.urls import path
from CRUDdata import views

urlpatterns =[
    path('generaprestamo/', views.generaPrestamo.as_view())
]
