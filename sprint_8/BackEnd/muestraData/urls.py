from django.urls import path, include
from rest_framework.routers import DefaultRouter
from muestraData import views

router = DefaultRouter()
router.register('cliente', views.ClienteViews, basename='cliente')
router.register('saldos', views.SaldosViews, basename='saldos')
router.register('prestamos', views.PrestamosViews, basename='prestamos')

urlpatterns = [
    path('', include(router.urls)),
    path('prestamo/<int:pk>/', views.prestamoDetailView.as_view(), name='prestamo-detail'),
    path('prestamos/sucursales/<int:id>/', views.PrestamosSucursalesViews.as_view()),
    path('tarjeta/cliente/<int:id>/', views.TarjetasClienteViews.as_view()),
    path('movimientos/<int:id>/', views.movimientoDetailViews.as_view()),
    path('movimientos/', views.movimientosViews.as_view()),
    path('tarjeta/', views.tarjetaViews.as_view()),
    path('cuenta/', views.cuentasViews.as_view()),
    path('status/', views.statusViews.as_view()),
]
