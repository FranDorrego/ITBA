from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cliente import views

router = DefaultRouter()
router.register('cliente', views.ClienteViews, basename='cliente')
router.register('saldos', views.SaldosViews, basename='saldos')

urlpatterns =[
    path('', include(router.urls)),
]
