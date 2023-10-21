from cliente.Black import *
from cliente.Gold import *
from cliente.Classic import *
from transaccion.Transaccion import Transaccion

# Transacciones
lista_transacciones=[
    {  
      "estado": "ACEPTADA",  
      "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",  
      "cuentaNumero": 190,  
      "permitidoActualParaTransccion": 9000,  
      "monto": 1000,  
      "fecha": "10/10/2022 16:00:55",  
      "numero": 1  
    }
]

# Declaramos 3 Clientes
cliente_classic = Classic(1,"Manuel", "Arturias", "12345678", lista_transacciones)
cliente_gold = Gold(1,"juana", "alverto", "147852",lista_transacciones )
cliente_black = Black(1,"Lute", "Lenovo", "369258", lista_transacciones)

# Imprimimos esos 3 Clientes
print(cliente_classic)
print(cliente_gold)
print(cliente_black)

# Realizamos operaciones con uno de ellos

""" 
  Aun falta por realizar 
"""

