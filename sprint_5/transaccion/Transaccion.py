import re

class Transaccion:
    """Es la clase que contiene todos los tipos de movimientos que puede tener un cliente"""

    # Variables de instacia
    TIPO_OPERACIONES = [
        "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
        "RETIRO_EFECTIVO_POR_CAJA",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_VISA",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_AMEX",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_MASTER",
        "COMPRA_TARJETA_CREDITO_VISA",
        "COMPRA_TARJETA_CREDITO_AMEX",
        "COMPRA_TARJETA_CREDITO_MASTER",
        "ALTA_TARJETA_CREDITO_VISA",
        "ALTA_TARJETA_CREDITO_AMEX",
        "ALTA_TARJETA_CREDITO_MASTER",
        "ALTA_TARJETA_DEBITO",
        "ALTA_CHEQUERA",
        "ALTA_CUENTA_CTE_PESOS",
        "ALTA_CUENTA_CTE_DOLARES",
        "ALTA_CAJA_DE_AHORRO_PESOS",
        "ALTA_CAJA_DE_AHORRO_DOLARES",
        "ALTA_CUENTA_DE_INVERSION",
        "COMPRA_DOLAR",
        "VENTA_DOLAR",
        "TRANSFERENCIA_ENVIADA_PESOS",
        "TRANSFERENCIA_ENVIADA_DOLARES",
        "TRANSFERENCIA_RECIBIDA_PESOS" "TRANSFERENCIA_RECIBIDA_DOLARES",
    ]
    FORMATO_FECHA = r"\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}"
    HTML_COLUMNAS = str()

    def __init__(
        self,
        estado: ["ACEPTADA", "RECHAZADA"],
        tipo: TIPO_OPERACIONES,
        permitidoActualParaTransccion: int | float,
        monto: int | float,
        fecha: str,
        numero: int,
        cuentaNumero: int,
    ):
        f"""
        tipo_cliente: Tiene que ser un obejto cleinte o alguno de sus hijos
        estado:  "ACEPTADA" | "RECHAZADA"
        tipo: {Transaccion.TIPO_OPERACIONES}
        fecha: DD/MM/AAAA HH:MM:SS

        raise: ValueError -> Aclara el porque
        """
        # Validaciones
        if not isinstance(estado, str) or not estado in ["ACEPTADA", "RECHAZADA"]:
            raise ValueError("El estado de Transaccion que ser ACEPTADA | RECHAZADA")

        if (
            not isinstance(tipo, str)
            or tipo == ""
            or not tipo in Transaccion.TIPO_OPERACIONES
        ):
            raise ValueError(
                "El tipo de Transaccion que estar listada en Transacion.TIPO_OPERACIONES y ser un STR"
            )

        if (
            not isinstance(permitidoActualParaTransccion, int | float)
            or permitidoActualParaTransccion < 0
        ):
            raise ValueError(
                "El permitidoActualParaTransccion de Transaccion que ser un INT | FLOAT y ser un mayor a 0"
            )

        if not isinstance(monto, int | float) or monto < 0:
            raise ValueError(
                "El monto de Transaccion que ser un INT | FLOAT y ser un mayor a 0"
            )

        if not isinstance(fecha, str) or not re.match(Transaccion.FORMATO_FECHA, fecha):
            raise ValueError(
                "La fecha de Transaccion que ser un STR y ser tener el forato de dd/mm/yyyy hh:mm:ss"
            )

        if not isinstance(numero, int) or numero < 0:
            raise ValueError("El numero de Transaccion que ser un INT y ser mayor a 0")

        # Atributos
        self.estado = estado
        self.tipo = tipo
        self.permitidoActualParaTransccion = permitidoActualParaTransccion
        self.monto = monto
        self.fecha = fecha
        self.numero = numero
        self.cuentaNumero = cuentaNumero

    def generar_columna_html(self):
        """ Genera las columnas y lo agrega a la variable de instancia para guardar el resultado """
        Transaccion.HTML_COLUMNAS += f"""
                                        <tr>
                                            <th>{self.numero}</th>
                                            <th>{self.estado}</th>
                                            <th>{self.tipo}</th>
                                            <th>{self.permitidoActualParaTransccion}</th>
                                            <th>{self.monto}</th>
                                            <th>{self.fecha}</th>
                                            <th>{self.cuentaNumero}</th>
                                            <th>{self.motivo}</th>
                                        </tr>
                                    """
        
    def generar_motivo(self, cliente):
        """
        Agrega el atributo motivo, el cual explica porque una operacion es rechasada o aprobada.
        Se tiene en cuenta los atributos del padre para esto.

        raise: none
        return: none
        """

        self.motivo = None

        # Sacamos el tipo de cliente
        tipo_cliente = cliente.__class__.__name__

        # Aprobado == Complio con todos los atributos
        if self.estado == "ACEPTADA":
            self.motivo = "Es correcta la transaccion" 
        
        # El monto permitido es menor al del movimiento
        elif self.permitidoActualParaTransccion < self.monto:
            self.motivo = "No tienes limite suficiente para operar con esta transaccion"
        
        # Compra en Cuotas de trajetas de credito
        elif "COMPRA_EN_CUOTAS_TARJETA_CREDITO" in self.motivo:
            self.motivo = "No tiene fondos suficientes"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No tiene tarjeta de credito"

        # Compra en trajetas de credito
        elif "COMPRA_TARJETA_CREDITO" in self.motivo:
            self.motivo = "No tiene fondos suficientes"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No tiene tarjeta de credito"

        # Si intenta comprar dolares
        elif self.monto == "COMPRA_DOLAR":
            self.motivo = "No tiene fondos suficientes"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No tiene caja de ahorro en dolares"
            
        # Si intenta vender dolares
        elif self.monto == "VENTA_DOLAR":
            self.motivo = "No tiene suficientes dolares"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No tiene caja de ahorro en dolares"

        # Si tener una tarjeta de credito
        elif "ALTA_TARJETA_CREDITO" in self.motivo:
            self.motivo = "Alcanzo su limite de tarjetas de credito"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No puede tener tarjetas de credito"

        # Si tener una tarjeta de debito
        elif "ALTA_TARJETA_DEBITO" in self.motivo:
            self.motivo = "Alcanzo su limite de tarjetas de debito"

        # Si tener una chequera
        elif "ALTA_CHEQUERA" == self.motivo:
            self.motivo = "Alcanzo su limite de chequeras"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No puede tener chequereas"
        
        # Si tener una cuenta corriente en dolares
        elif "ALTA_CUENTA_CTE_DOLARES" == self.motivo:
            self.motivo = "No puede tener Cuenta corriente en dolares"
            if tipo_cliente == "BLACK" :
                self.motivo = "Alcanzo su limite de cuentas corrientes en dolares"
        
        # Si tener una cuenta corriente en pesos
        elif "ALTA_CUENTA_CTE_PESOS" == self.motivo:
            self.motivo = "Alcanzo su limite de cuentas corrientes en pesos"
        
        # Si tener una cuenta inversion
        elif "ALTA_CUENTA_DE_INVERSION" == self.motivo:
            self.motivo = "Alcanzo su limite de cuentas de inversion"
            if tipo_cliente == "CLASSIC" :
                self.motivo = "No puede tener cuenta de inversion"
