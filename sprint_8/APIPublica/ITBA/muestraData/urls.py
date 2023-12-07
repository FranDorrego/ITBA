from django.urls import path, include
from rest_framework.routers import DefaultRouter
from muestraData import views

router = DefaultRouter()
router.register('cliente', views.ClienteViews, basename='cliente')
router.register('saldos', views.SaldosViews, basename='saldos')
router.register('prestamos', views.PrestamosViews, basename='prestamos')

urlpatterns =[
    path('', include(router.urls)),
    path('prestamos/sucursales/<int:id>', views.PrestamosSucursalesViews.as_view())
]
