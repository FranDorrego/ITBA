from cliente.Black import Black
from cliente.Gold import Gold
from cliente.Classic import Classic
from cliente.Cliente import Cliente
from transaccion.Transaccion import Transaccion
import json
import os

def leer_json(nombre_archivo) -> json:
    """ Lee el archivo que le pasas y lo deja como un Json  -> raise: ValueError(Descibre el error) """

    # Preguntamos si existe
    if not os.path.exists(nombre_archivo):
        raise ValueError(" El archivo no existe ")
    
    nombre_archivo = os.path.abspath(nombre_archivo)

    with open(nombre_archivo, "r") as json_file:

        try:
            datos = json.load(json_file)
        except Exception as e:
            raise ValueError(f" Ocurrio un error al leer el Json, asegurate que esta en el formato correcto. {e} ")

    return datos

def intanciar_clases(datos : json) -> Cliente:
    """ Recibe un Json y luego los intancia en la case correspondiente """

    # Creamos el cliente dependiendo que tipo sea
    if datos.get("tipo") == "CLASSIC":
        cliente = Classic(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"])
    elif datos.get("tipo") == "GOLD":
        cliente = Gold(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"])
    elif datos.get("tipo") == "BLACK":
        cliente = Black(datos["numero"], datos["nombre"], datos["apellido"], datos["dni"])
    else:
        raise ValueError("No se encontro el tipo de cliente correcto, solo puede ser BLACK, GOLD o CLASSIC")

    # Instanciamos sus transacciones
    for transaccion in datos.get("transacciones"):

        instancia = Transaccion(
                        transaccion.get("estado"), 
                        transaccion.get("tipo"), 
                        transaccion.get("permitidoActualParaTransccion"),
                        transaccion.get("monto"),
                        transaccion.get("fecha"),
                        transaccion.get("numero"),
                        transaccion.get("cuentaNumero")
                        )
        
        # Creamos motivo, HTML y Agregamos al cliente
        instancia.motivo(cliente)
        instancia.generar_columna_html()
        cliente.transacciones.append(instancia)

    return cliente

def generar_html(cliente):
    """ Crea un archivo con los datos del cliente que le pases """

    # Tomamos el formato clasico de un HTML y le agregamos los datos
    contenido = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte</title>
    </head>
    <body>
        <h1>Reporte del cliente</h1>
        <p>Este reporte pertenece al cliente numero: {cliente.numeroCliente} y dni: {cliente.dni}</p>
        <h2>Transacciones</h2>
        <table border=1>
            <tr>
                <th>Numero</th>
                <th>Estado</th>
                <th>Tipo</th>
                <th>Permitido Actual Para Transccion</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Cuenta Numero</th>
                <th>Motivo</th>
            </tr>
            {Transaccion.HTML_COLUMNAS}
        </table>
    </body>
    </html>
    """

    with open(ARCHIVO_A_DEVOLVER, "w") as arch:
        arch.write(contenido)
        
    print(f"Se genero el archivho {ARCHIVO_A_DEVOLVER}")

def main():
    # Leemos los datos
    datos = leer_json(ARCHIVO_A_LEER)

    # Pasamos de Json a instancias de clases
    cliente = intanciar_clases(datos)

    # Generamos el HTML
    generar_html(cliente)

ARCHIVO_A_LEER = "sprint_5\prueba.json"
ARCHIVO_A_DEVOLVER = "reporte.html"
main()



        