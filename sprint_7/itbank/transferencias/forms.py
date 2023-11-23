from django import forms
from .models import *

class ClienteChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
        return f"{obj.customer_name}"  # Devuelve el valor deseado para mostrar en la lista desplegable


class formlarioTransferencia(forms.Form):
    nombre = ClienteChoiceField(
        queryset=Cliente.objects.all(),
        to_field_name="customer_id",
        empty_label=None,
        widget=forms.Select(attrs={'class': 'formulario'}),
    )

    cantidad = forms.DecimalField(
        decimal_places=2,
        max_digits=10,
        min_value=0,
        widget=forms.NumberInput(attrs={'step': '0.01', 'class': 'formulario'}),
    )
