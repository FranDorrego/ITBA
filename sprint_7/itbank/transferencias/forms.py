# -*- coding: utf-8 -*-

from django import forms
from .models import *

class ClienteChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
        return f"{obj.customer_name}  {obj.customer_surname}"  # Devuelve el valor deseado para mostrar en la lista desplegable


class formlarioTransferencia(forms.Form):

    nombre = ClienteChoiceField(queryset=Cliente.objects.all(), to_field_name="customer_name", empty_label=None)

    cantidad = forms.DecimalField(
        decimal_places=2, max_digits=10, 
        min_value=0,  # Valida que sea positivo
        widget=forms.NumberInput(attrs={'step': '0.01'}),  # Define el paso para admitir dos decimales
    )

    motivo = forms.CharField(max_length=50)
