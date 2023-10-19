class Cuenta:
    def __init__(self, nroCuenta : int, monto : float | int):
        """
            Los datos tienen que ser el tipo de dato espesificado
            
            raise: ValueError -> Comenta cual es el error
        """

        # Validaciones
        if not isinstance(nroCuenta, int) or nroCuenta < 0:
            raise ValueError("El nroCuenta de Cuenta tiene que ser un INT y no puede ser negativo")
        if not isinstance(monto, int | float) or monto < 0:
            raise ValueError("El nombre de Cuenta tiene que ser un INT y no puede ser negativo")

        # Atributos
        self.nroCuenta = nroCuenta
        self.monto = monto


class Caja_Ahorro_Pesos(Cuenta):
    def __init__(self, nroCuenta: int, monto: float | int):
        super().__init__(nroCuenta, monto)
        
class Caja_Ahorro_Dolares(Cuenta):
    def __init__(self, nroCuenta: int, monto: float | int):
        super().__init__(nroCuenta, monto)

class Cuenta_Corriente_Pesos(Cuenta):
    def __init__(self, nroCuenta: int, monto: float | int):
        super().__init__(nroCuenta, monto)

class Cuenta_Corriente_Dolares(Cuenta):
    def __init__(self, nroCuenta: int, monto: float | int):
        super().__init__(nroCuenta, monto)

class Cuenta_Inversion(Cuenta):
    def __init__(self, nroCuenta: int, monto: float | int):
        super().__init__(nroCuenta, monto)

class Chequeras(Cuenta):
    def __init__(self, nroCuenta: int, monto: float | int):
        super().__init__(nroCuenta, monto)


