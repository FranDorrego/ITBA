class Transaccion:
    def __init__(self, estado, tipo, permitidoActualParaTransccion, monto, fecha, numero):
        self.estado = estado
        self.tipo = tipo
        self.permitidoActualParaTransccion = permitidoActualParaTransccion
        self.monto = monto
        self.fecha = fecha
        self.numero = numero
        
class Alta(Transaccion):
    def __init__(self, estado, tipo, fecha, numero):
        self.estado = estado
        self.tipo = tipo
        self.fecha = fecha
        self.numero = numero