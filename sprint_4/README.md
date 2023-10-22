# ITBANK
Es el proyecto de una Aplicación web de Home Banking renovado para ser simple y fácil de utilizar.

El grupo que esta creando ITBANK es **iKnowHow** Conformado por: 
  - Franco Nicolás Dorrego
  - Laureano Ibarra
  - Evelyn Gazal

# Forma de Tester

Para testearlo simplemente ingresa con la **consola** a **Sprint_4** y ejecuta las pruebas:

- cd sprint_4

Para ejecutarlo, es el siguiente formato:

	-  python listado_cheques.py PATH_CSV DNI SALIDA TIPO ESTADO -f FECHA

- *PATH_CSV* : Es el directorio donde se busca la información. El mismo tiene que ser delimitados por "," y tener este formato:

		- nroCheque,codigoBanco,codigoSucursal,nroCuentaOrigen,nroCuentaDestino,valor,fechaOrigen,fechaPago,dni,estado,tipo 
 
 - *DNI*: Tiene que ser un numero entre 7 a 8 Dígitos.
 - *SALIDA*: Es por donde se muestran los datos, por PANTALLA o CSV. Si se selecciona CSV se crea un archivo en el directorio en donde esta el script con todos los datos. EJ: *./DNI_TIMESTAMP.CSV*
 -  *TIPO*:  Es el tipo de cheque, solo puede ser EMITIDO o DEPOSITADO
 -  *ESTADO*: Es un dato opcional, solo acepta PENDIENTE, APROBADO, RECHAZADO.
 - *FECHA*: Es un dato opcional, es un rango de fechas, se llama como -f o --fecha, Se coloca en formato AAAA-MM-DD:AAAA-MM-DD. 

Se toman los dos dias de rango a las 00.00.00hs. Es decir si pasas 2020-05-02:2020-05-03 se va a tomar como rango desde las 00.00hs del 05-02 al 00.00hs del 05-03

Los parámetros tienen que ser en mayúsculas.

## <h1>Diagrama de Flujo</h1>

Diseñamos un diagrama el cual explica como tratamos la información. La idea es tratar la información de una forma ordenada y metódica, anticiparnos a los posibles errores y ser lo mas eficiente posible, por esa razón utilizamos este diagrama para poder sintetizar en si la lógica por un lado y por el otro la parte técnica. 

**![](./sprint_4/docs/flujo.png)**


## <h1>Manejo de Fechas</h1>

Usamos un método el cual realiza toda la conversión de fechas este único formato:

		AAAA-MM-DD:hh:mm:ss

Podemos  tratar las fechas en estos formatos:
	
	- AAAA-MM-DD
	- AAAA-MM-DD:h
	- AAAA-MM-DD:h:m
	- AAAA-MM-DD:h:m:s
	- time_stamp

Si se trata de manejar una fecha que no este algún formato especificado, el método devuelve "Error" en su lugar y se trata en la función que lo llamo.

La idea es siempre trabajar en un solo formato de fecha en todo el código.

**![](./sprint_4/docs/fecha.png)**


## <h1>Formato Correcto de parámetros</h1>

Para asegurarnos de que los datos que envían los usuarios son correctos, antes de ejecutar cualquier filtro, los evaluamos. 

Condiciones para que funcionen:

 - Que el archivo CSV exista en la ruta que se dio.
 - Que el DNI este entre 7 a 8 dígitos.
 - Que el rango de fechas este en formato correcto
 
 
 **![](./sprint_4/docs/formato.png)**


## <h1>Filtrado de Datos</h1>

Para esta parte se asume que existe el archivo, por lo tanto se abre y se lee linea por linea.
Cuando se esta leyendo se tiene en cuenta si:

- El archivo esta vacío.
- Si la linea que estamos leyendo esta vacía.
- Si la linea que leemos es el titulo o no.
- Si esta en el formato correcto o no de CSV.
- Si esta dentro del rango de fechas especificado.
- Si estamos leyendo la información del DNI .
- Si hay que filtrar por tipo y estado.

Cuando finaliza se agrega el numero de cheque a un registro para evitar que se repitan y se agrega la linea al la lista a devolver. 

Seguimos estos pasos para optimizar al máximo los tiempos de ejecución, si ves en detalle cada punto te vas a ir dando cuenta que filtramos desde lo mas general a lo mas especifico, como pueden ser desde las fechas al tipo de cheque.


## <h1>Formato de CSV</h1>

Para verificar y acceder a los datos que queremos comparar, primero vemos si la fila de datos que estamos leyendo tiene el formato adecuado. 

**![](./sprint_4/docs/csv.png)**

Tratamos todos los posibles errores que puede llegar a haber a la hora de leer y castear datos externos en este método. 

La función es poder trabajar de forma segura con los datos luego de haberlos revisado, por eso este es el punto es a donde se filtra el formato.


## <h1>Documentación del sprint 1</h1>

**[Documentación](./sprint_1/README.md)**

## <h1>Documentación del sprint 2</h1>

**[Documentación](./sprint_2/README_Sprint_2.md)**

## <h1>Documentación del sprint 3</h1>

**[Documentación](./sprint_3/README_Sprint_3.md)**

## <h1>Documentación del sprint 4</h1>

**[Documentación](./sprint_4/README.md)**
