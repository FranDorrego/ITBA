from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cliente import views

router = DefaultRouter()
router.register('', views.ClienteViews, basename='cliente')

urlpatterns =[
    path('', include(router.urls)),
]
