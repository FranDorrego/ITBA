class Cuenta:
    def __init__(self, nroCuenta, monto, tipo):
        self.nroCuenta = nroCuenta
        self.monto = monto
        self.tipo = tipo

    
class CajaDeAhorroPesos(Cuenta):
    def __init__(self):
        pass

class CajaDeAhorroDolares(Cuenta):
    def __init__(self):
        pass

class CuentaCorrientePesos(Cuenta):
    def __init__(self):
        pass

class CuentaCorrienteDolares(Cuenta):
    def __init__(self):
        pass


class CuentaInversion(Cuenta):
    def __init__(self):
        pass



