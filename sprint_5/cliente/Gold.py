from cliente.Classic import Cliente

class Gold(Cliente):

    def __init__(self, numeroCliente, nombre, apellido, dni) -> None:
        super().__init__(numeroCliente, nombre, apellido, dni)

        # Limites
        self.limite_tarjetas_debito = 1
        self.limite_caja_ahorro_pesos = 2
        self.limite_caja_ahorro_dolares = 1
        self.cargo_mensual_cuanta_dolares = 0.1
        self.limite_cuenta_corriente_pesos = 1
        self.limite_retiro_efectivo = 20000
        self.retiro_sin_comisiones = True
        self.limite_tarjeta_credito = 1
        self.limite_pago_tarjeta = 150000
        self.tipo_tarjeta = ["VISA", "MASTERCAD"]
        self.limite_cuotas = 100000
        self.comisiones= { "transferencia_saliente" : 1 , "transferencia_entrante" : 0.5 }
        self.limite_cuenta_inversion = 1
        self.limite_chequeras = 1
