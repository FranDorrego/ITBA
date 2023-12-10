from django.urls import path
from CRUDdata import views

urlpatterns =[
    path('administraprestamo/', views.administraPrestamo.as_view()),
    path('newdirrecion/', views.NewDirrecion.as_view()),
    path('aceptaprestamos/', views.AceptaPrestamo.as_view()),
    path('realizatransferencia/', views.RealizaTransferencia.as_view()),
    path('cambiomoneda/', views.RealizaCambio.as_view()),
]
