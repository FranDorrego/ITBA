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
        self.transacciones = list()

        # Objetos
        self.tarjetas_debito : list(Debito)
        self.tarjetas_credito : list(Credito)
        self.cajas_ahorro_pesos : list(Caja_Ahorro_Pesos)
        self.cajas_ahorro_dolares : list(Caja_Ahorro_Dolares)
        self.cuentas_corrientes_pesos : list(Cuenta_Corriente_Pesos)
        self.cuentas_corrientes_dolares : list(Cuenta_Corriente_Dolares)
        self.cuenta_inversion : Cuenta_Inversion
        self.Chequeras : list(Chequeras)

        # Limites
        self.limite_tarjetas_debito = 0
        self.limite_caja_ahorro_pesos = 0
        self.limite_caja_ahorro_dolares = 0
        self.cargo_mensual_cuanta_dolares = 0
        self.limite_cuenta_corriente_pesos = 0
        self.limite_cuenta_corriente_dolares = 0
        self.limite_retiro_efectivo = 0
        self.retiro_sin_comisiones = 0
        self.limite_tarjeta_credito = 0
        self.limite_pago_tarjeta = 0
        self.tipo_tarjeta = None
        self.limite_cuotas = 0
        self.comisiones= { "transferencia_saliente" : 0 , "transferencia_entrante" : 0 }
        self.limite_cuenta_inversion = 0
        self.limite_chequeras = 0

    def __str__(self) -> str:
        return f"Soy un cliente {self.__class__.__name__}"
    
    def calcular_monto_total(self, precioDolar, montoAAdquirir):

        # validaciones
        if not isinstance(precioDolar, int | float) or not precioDolar > 0:
            raise ValueError("El precio del dolar no puede ser ni negativo ni 0 y tiene que ser un numero")
        if not isinstance(montoAAdquirir, int | float) or not montoAAdquirir > 0:
            raise ValueError("El monto a Adquirir no puede ser ni negativo ni 0 y tiene que ser un numero")
        
        # Calculos
        total = precioDolar * montoAAdquirir * (1 + Cliente.IMPUESTO_GANANCIAS) * (1 + Cliente.IMPUESTO_PAIS)
        return total
    
    def descontar_comision(self, monto, comision):

        # validaciones
        if not isinstance(monto, int | float) or monto <= 0:
            raise ValueError("El monto no puede ser ni negativo ni 0 y tiene que ser un numero")
        if not isinstance(comision, int | float) or not ( comision > 0 and comision < 1 ):
            raise ValueError("La comision tiene que estar entre 0 y 1. Tiene que ser un numero")
        
        return monto * (1 - comision)
    
    def calcular_monto_plazo_fijo(self, monto, porcentaje):

        # validaciones
        if not isinstance(monto, int | float) or monto <= 0:
            raise ValueError("El monto no puede ser ni negativo ni 0 y tiene que ser un numero")
        if not isinstance(porcentaje, int | float) or not ( porcentaje > 0 and porcentaje < 1 ):
            raise ValueError("La porcentaje tiene que estar entre 0 y 1. Tiene que ser un numero")
        
        return monto * (1 + porcentaje)
    