from django import forms
from .models import *


TIPOS_PRESTAMO = [
    ('PRENDARIO', 'Prendario'),
    ('PERSONAL', 'Personal'),
    ('HIPOTECARIO', 'Hipotecario'),
]

class FormularioSolicitaPrestamo(forms.Form):
    fecha = forms.DateTimeField(widget=forms.SelectDateWidget)
    tipo = forms.ChoiceField(choices=TIPOS_PRESTAMO, widget=forms.RadioSelect)