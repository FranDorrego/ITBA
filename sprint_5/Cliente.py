from Tarjeta import Tarjeta
from Transaccion import Transaccion, Alta
from Cuenta import Cuenta
import datetime

IMPUESTO_PAIS      = 0.25
IMPUESTO_GANANCIAS = 0.35

class Cliente:
    def __init__(self, numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas):
            self.numeroCliente = numeroCliente
            self.nombre = nombre
            self.apellido = apellido
            self.dni = dni
            self.transacciones = transacciones
            self.cuentas = cuentas
            self.tarjetas = tarjetas
    
    # BUSCA LA CUENTA PARA LA QUE SE VA A HACER LA TRANSACCION
    def seleccionarCuenta(self, nroCuenta):
        for cuenta in self.cuentas:
            if nroCuenta == cuenta.nroCuenta:
                return cuenta
        
class Classic(Cliente):
    
    TIPO = "classic"
    COMISION_SALIENTE = 0.01
    COMISION_ENTRANTE = 0.005
    def __init__(self, numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas):
        super().__init__(numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas)
        self.tipo = self.TIPO
        self.comisionPorTransferenciaSaliente = self.COMISION_SALIENTE
        self.comisionPorTransferenciaEntrante = self.COMISION_ENTRANTE
    
    
    
    def calcular_monto_total(self, precioDolar, montoAAdquirir):
        total = precioDolar * montoAAdquirir * (1 + IMPUESTO_GANANCIAS) * (1 + IMPUESTO_PAIS)
        return total
        
    # def RETIRO_EFECTIVO_CAJERO_AUTOMATICO(self):
    #     pass
    
    # def RETIRO_EFECTIVO_POR_CAJA(self):
    #     pass
    
    # def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    
    # def COMPRA_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
        
    # def ALTA_TARJETA_CREDITO_AMEX(self):
    #     return Alta(estado="RECHAZADO", tipo="ALTA_TARJETA_CREDITO_AMEX", fecha = datetime.datetime.today(), numero=len(self.transacciones) + 1)
        
    # def ALTA_TARJETA_CREDITO_VISA(self):
    #     return Alta(estado="RECHAZADO", tipo="ALTA_TARJETA_CREDITO_AMEX", fecha = datetime.datetime.today(), numero=len(self.transacciones) + 1)
        
    # def ALTA_TARJETA_CREDITO_MASTER(self):
    #     return Alta(estado="RECHAZADO", tipo="ALTA_TARJETA_CREDITO_AMEX", fecha = datetime.datetime.today(), numero=len(self.transacciones) + 1)
    
    # def ALTA_TARJETA_DEBITO(self):
    #     if len(self.transacciones) == 1:
    #         return Alta(estado="RECHAZADO", tipo = "ALTA_TARJETA_DEBITO", fecha = datetime.datetime.today(), numero = len(self.transacciones) + 1)
    #     else:
    #         return Alta(estado="ACEPTADA", tipo="ALTA_TARJETA_DEBITO", fecha = datetime.datetime.today(), numero = len(self.transacciones) + 1)
        
    # def ALTA_CHEQUERA(self):
    #     return Alta(estado="RECHAZADO", tipo = "ALTA_CHEQUERA", fecha = datetime.datetime.today(), numero = len(self.transacciones) + 1)


    # def ALTA_CUENTA_CTE_PESOS(self):
    #     pass
    
    # def ALTA_CUENTA_CTE_DOLARES(self):
    #     pass
    
    # def ALTA_CAJA_DE_AHORRO_PESOS(self):
    #     pass
    
    # def ALTA_CAJA_DE_AHORRO_DOLARES(self):
    #     pass
    
    # def ALTA_CUENTA_DE_INVERSION(self):
    #     return Alta(estado="RECHAZADO", tipo = "ALTA_CUENTA_DE_INVERSION", fecha=datetime.datetime.today(), numero = len(self.transacciones) + 1)
    
    # def COMPRA_DOLAR(self):
    #     pass
    
    # def VENTA_DOLAR(self):
    #     pass
    
    # def TRANSFERENCIA_ENVIADA(self, tipoDeMoneda):
    #     pass
    
    # def TRANSFERENCIA_RECIBIDA(self, tipoDeMoneda):
    #     pass


class Gold(Cliente):
    TIPO = "gold"
    COMISION_SALIENTE = 0.005
    COMISION_ENTRANTE = 0.001
    
    def __init__(self, numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas):
        super().__init__(numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas)
        self.tipo = self.TIPO
        self.comisionPorTransferenciaSaliente = self.COMISION_SALIENTE
        self.comisionPorTransferenciaEntrante = self.COMISION_ENTRANTE

        
    # def RETIRO_EFECTIVO_CAJERO_AUTOMATICO(self):
    #     pass
    # def RETIRO_EFECTIVO_POR_CAJA(self):
    #     pass
    # def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    # def COMPRA_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    # def ALTA_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    # def ALTA_TARJETA_DEBITO(self):
    #     pass
    # def ALTA_CHEQUERA(self):
    #     pass
    # def ALTA_CUENTA_CTE(self, tipoDeMoneda):
    #     pass
    # def ALTA_CAJA_DE_AHORRO(self, tipoDeMoneda):
    #     pass
    # def ALTA_CUENTA_DE_INVERSION(self):
    #     pass
    # def COMPRA_DOLAR(self):
    #     pass
    # def VENTA_DOLAR(self):
    #     pass
    # def TRANSFERENCIA_ENVIADA(self, tipoDeMoneda):
    #     pass
    # def TRANSFERENCIA_RECIBIDA(self, tipoDeMoneda):
    #     pass        

class Black(Cliente):
    TIPO = "black"
    COMISION_SALIENTE = 0
    COMISION_ENTRANTE = 0
    def __init__(self, numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas):
        super().__init__(numeroCliente, nombre, apellido, dni, transacciones, cuentas, tarjetas)
        self.tipo = self.TIPO
        self.comisionPorTransferenciaSaliente = self.COMISION_SALIENTE
        self.comisionPorTransferenciaEntrante = self.COMISION_ENTRANTE


    # def RETIRO_EFECTIVO_CAJERO_AUTOMATICO(self):
    #     pass
    # def RETIRO_EFECTIVO_POR_CAJA(self):
    #     pass
    # def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    # def COMPRA_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    # def ALTA_TARJETA_CREDITO(self, tipoDeTarjeta):
    #     pass
    # def ALTA_TARJETA_DEBITO(self):
    #     pass
    # def ALTA_CHEQUERA(self):
    #     pass
    # def ALTA_CUENTA_CTE(self, tipoDeMoneda):
    #     pass
    # def ALTA_CAJA_DE_AHORRO(self, tipoDeMoneda):
    #     pass
    # def ALTA_CUENTA_DE_INVERSION(self):
    #     pass
    # def COMPRA_DOLAR(self):
    #     pass
    # def VENTA_DOLAR(self):
    #     pass
    # def TRANSFERENCIA_ENVIADA(self, tipoDeMoneda):
    #     pass
    # def TRANSFERENCIA_RECIBIDA(self, tipoDeMoneda):
    #     pass



c1 = Classic(1, "asd", "asd", 123123, [], [Cuenta(1, 2, 3)], [])
