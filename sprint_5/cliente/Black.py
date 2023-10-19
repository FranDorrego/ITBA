from cliente.Cliente import Cliente

class Black(Cliente):

    def __init__(self, numeroCliente, nombre, apellido, dni) -> None:
        super().__init__(numeroCliente, nombre, apellido, dni)

        # Limites
        self.limite_tarjetas_debito = 5
        self.limite_caja_ahorro_pesos = 5
        self.limite_caja_ahorro_dolares = 5
        self.cargo_mensual_cuanta_dolares = 0.1
        self.limite_cuenta_corriente_pesos = 3
        self.limite_cuenta_corriente_dolares = 3
        self.limite_retiro_efectivo = 100000
        self.retiro_sin_comisiones = True
        self.limite_tarjeta_credito = 1
        self.limite_pago_tarjeta = 500000
        self.tipo_tarjeta = ["VISA", "MASTERCAD", "AMERIAN"]
        self.limite_cuotas = 600000
        self.comisiones= { "transferencia_saliente" : 0 , "transferencia_entrante" : 0 }
        self.limite_cuenta_inversion = 1
        self.limite_chequeras = 2