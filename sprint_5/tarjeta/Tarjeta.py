import re

class Tarjeta:
    def __init__(self, empresa : ["VISA", "MASTERCAD", "AMERIAN"], numeroDeTarjeta : int, fechaVencimiento : str, nombre: str, codigoSeguridad: int):
        """ 
        Los datos tienen que ser el tipo de dato que se aclara.

        Empresa: "VISA", "MASTERCAD", "AMERIAN"

        raise: ValueError -> Aclara el porque
        """

        # Validaciones
        if not isinstance(empresa, str) or not empresa in ["VISA", "MASTERCAD", "AMERIAN"]:
            raise ValueError("El empresa de Tarjeta que estar listada en las opciones y ser un STR")
        if not isinstance(numeroDeTarjeta, int) or numeroDeTarjeta < 0:
            raise ValueError("El numeroDeTarjeta de Tarjeta tiene que ser un INT y no puede ser negativo")
        if not isinstance(fechaVencimiento, str) or not re.match(r'^\d{2}/\d{2}$', fechaVencimiento) :
            raise ValueError("El fechaVencimiento de Tarjeta tiene que ser un SRT y tiene que tener MM/AA")
        if not isinstance(nombre, str) or nombre == "" :
            raise ValueError("El nombre de Tarjeta tiene que ser un SRT y no puede estar vacio")
        if not isinstance(codigoSeguridad, int) or ( codigoSeguridad > 0 and codigoSeguridad < 999) :
            raise ValueError("El codigoSeguridad de Tarjeta tiene que ser un INT y en fotmato de 3 dijitos")

        # Atributos
        self.empresa = empresa
        self.numeroDeTarjeta = numeroDeTarjeta 
        self.fechaVencimiento = fechaVencimiento 
        self.nombre = nombre
        self.codigoSeguridad = codigoSeguridad

class Credito(Tarjeta):

    def __init__(self, empresa, numeroDeTarjeta, fechaVencimiento, nombre, codigoSeguridad):
        super().__init__(empresa, numeroDeTarjeta, fechaVencimiento, nombre, codigoSeguridad)

class Debito(Tarjeta):
    
    def __init__(self, empresa, numeroDeTarjeta, fechaVencimiento, nombre, codigoSeguridad):
        super().__init__(empresa, numeroDeTarjeta, fechaVencimiento, nombre, codigoSeguridad)