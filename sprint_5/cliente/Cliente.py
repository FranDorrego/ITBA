from cuentas.Cuenta import *
from tarjeta.Tarjeta import *
from transaccion.Transaccion import *

class Cliente:
    """ Es la clase padre de todos los clientes, tiene todos los atributos con los tipos pero no inicializados ni instanciados """

    IMPUESTO_PAIS      = 0.25
    IMPUESTO_GANANCIAS = 0.35

    def __init__(self, numeroCliente : int, nombre: str, apellido: str, dni: str) -> None:
        """ 
        Los datos tienen que ser el tipo de dato que aclara y no pueden estar vacios, ser None o ser negativos

        raise: ValueError -> Comenta cual es el error
        """

        # Validaciones
        if not isinstance(numeroCliente, int) or numeroCliente < 0:
            raise ValueError("El numero de Cliente tiene que ser un INT y no puede ser negativo")
        if not isinstance(nombre, str) or nombre == "":
            raise ValueError("El nombre de Cliente tiene que ser un STR y no puede estar vacio")
        if not isinstance(apellido, str) or apellido == "":
            raise ValueError("El apellido de Cliente tiene que ser un STR y no puede estar vacio")
        if not isinstance(dni, str) or dni == "":
            raise ValueError("El dni de Cliente tiene que ser un STR y no puede estar vacio")

        # Datos
        self.numeroCliente = numeroCliente
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.tipo = None

        # Objetos
        self.tarjetas_debito : list(Debito)
        self.tarjetas_credito : list(Credito)
        self.cajas_ahorro_pesos : list(Caja_Ahorro_Pesos)
        self.cajas_ahorro_dolares : list(Caja_Ahorro_Dolares)
        self.cuentas_corrientes_pesos : list(Cuenta_Corriente_Pesos)
        self.cuentas_corrientes_dolares : list(Cuenta_Corriente_Dolares)
        self.cuenta_inversion : Cuenta_Inversion
        self.Chequeras : list(Chequeras)
        self.transacciones : list(Transaccion)

        # Limites
        self.limite_tarjetas_debito = 0
        self.limite_caja_ahorro_pesos = 0
        self.limite_caja_ahorro_dolares = 0
        self.cargo_mensual_cuanta_dolares = 0
        self.limite_cuenta_corriente_pesos = 0
        self.limite_cuenta_corriente_dolares = 0
        self.limite_retiro_efectivo = 0
        self.retiro_sin_comiciones = 0
        self.limite_tarjeta_credito = 0
        self.limite_pago_tarjeta = 0
        self.tipo_tarjeta = None
        self.limite_cuotas = 0
        self.comiciones= { "transferencia_saliente" : 0 , "transferencia_entrante" : 0 }
        self.limite_cuenta_inversion = 0
        self.limite_chequeras = 0

    def __str__(self) -> str:
        return f"Soy un cliente {self.tipo}"
    

    ## -------------- HAY QUE REVISAR ESTOS METODOS, TYPE, VALIDAR, PRUEBAS ------------------------ ##
    def calcular_monto_total(self, precioDolar, montoAAdquirir):
        total = precioDolar * montoAAdquirir * (1 + Cliente.IMPUESTO_GANANCIAS) * (1 + Cliente.IMPUESTO_PAIS)
        return total
    
    def descontar_comicion(self, monto, comicion):
        return monto * comicion
    
    def calcular_monto_plazo_fijo(self, monto, porcentaje):
        return monto * porcentaje