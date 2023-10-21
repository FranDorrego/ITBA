from cliente.Cliente import Cliente

class Classic(Cliente):
    
    def __init__(self, numeroCliente, nombre, apellido, dni, transacciones) -> None:
        super().__init__(numeroCliente, nombre, apellido, dni, transacciones)

        # Limites
        self.limite_tarjetas_debito = 1
        self.limite_caja_ahorro_pesos = 1
        self.limite_caja_ahorro_dolares = 1
        self.cargo_mensual_cuanta_dolares = 0.1
        self.limite_retiro_efectivo = 10000
        self.retiro_sin_comisiones = 5
        self.comisiones= { "transferencia_saliente" : 1 , "transferencia_entrante" : 0.5 }

    