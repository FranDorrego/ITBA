import re

class Transaccion():
    """ Es la clase que contiene todos los tipos de movimientos que puede tener un cliente """

    TIPO_OPERACIONES = [
        "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
        "RETIRO_EFECTIVO_POR_CAJA",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_<tipo de tarjeta>",
        "COMPRA_TARJETA_CREDITO_<tipo de tarjeta>",
        "ALTA_TARJETA_CREDITO_<Tipo de tarjeta>",
        "ALTA_TARJETA_DEBITO",
        "ALTA_CHEQUERA",
        "ALTA_CUENTA_CTE_<Tipo de moneda>",
        "ALTA_CAJA_DE_AHORRO_<Tipo de moneda>",
        "ALTA_CUENTA_DE_INVERSION",
        "COMPRA_DOLAR",
        "VENTA_DOLAR",
        "TRANSFERENCIA_ENVIADA_<Tipo moneda>",
        "TRANSFERENCIA_RECIBIDA_<Tipo moneda>"
    ]
    
    FORMATO_FECHA = r'\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}'

    def __init__(self, tipo_cliente , estado : ["ACEPTADA","RECHAZADA"], tipo: TIPO_OPERACIONES , permitidoActualParaTransccion : int | float, monto: int | float, fecha: str, numero: int):
        f"""
            tipo_cliente: Tiene que ser un obejto cleinte o alguno de sus hijos
            estado:  "ACEPTADA" | "RECHAZADA"
            tipo: {Transaccion.TIPO_OPERACIONES}
            fecha: DD/MM/AAAA HH:MM:SS

            raise: ValueError -> Aclara el porque
        """
        # Validaciones
        if not isinstance(estado, str) or not estado in ["ACEPTADA","RECHAZADA"]:
            raise ValueError("El estado de Transaccion que ser ACEPTADA | RECHAZADA")
        if not isinstance(tipo, str) or tipo == "" or not tipo in Transaccion.TIPO_OPERACIONES:
            raise ValueError("El tipo de Transaccion que estar listada en Transacion.TIPO_OPERACIONES y ser un STR")
        if not isinstance(permitidoActualParaTransccion, int | float) or permitidoActualParaTransccion < 0:
            raise ValueError("El permitidoActualParaTransccion de Transaccion que ser un INT | FLOAT y ser un mayor a 0")
        if not isinstance(monto, int | float) or monto < 0:
            raise ValueError("El monto de Transaccion que ser un INT | FLOAT y ser un mayor a 0")
        if not isinstance(fecha, str) or not re.match(Transaccion.FORMATO_FECHA, fecha):
            raise ValueError("La fecha de Transaccion que ser un STR y ser tener el forato de dd/mm/yyyy hh:mm:ss")
        if not isinstance(numero, int) or numero < 0:
            raise ValueError("El numero de Transaccion que ser un INT y ser mayor a 0")
        
        # Atributos
        self.estado = estado
        self.tipo = tipo
        self.permitidoActualParaTransccion = permitidoActualParaTransccion
        self.monto = monto
        self.fecha = fecha
        self.numero = numero
        self.tipo_cliente = tipo_cliente
        self.__motivo()


    def __motivo(self):
        """
            Agrega el atributo motivo, el cual explica porque una operacion es rechasada o aprobada.
            Se tiene en cuenta los atributos del padre para esto.

            raise: none
            return: none
        """

        self.motivo = None

        print(f"{self.tipo_cliente.__class__.__name__}")

        
        
