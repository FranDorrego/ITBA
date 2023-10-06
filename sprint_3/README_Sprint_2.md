# ITBANK
Es el proyecto de una Aplicación web de Home Banking renovado para ser simple y fácil de utilizar.

El grupo que esta creando ITBANK es **iKnowHow** Conformado por: 
  - Franco Nicolás Dorrego
  - Laureano Ibarra
  - Evelyn Gazal
  - Luciano Hermida
  - Mauro Joaquin Cena

# Forma de tester

Para testearlo simplemente ingresa a la carpeta **Sprint_3** y ejecuta en la consola:

**npm install** 
**npm run build** 
**npm start** 

Este es el inicio de toda la APP, El usuario admitido es:

 - **USUARIO:** Cualquiera mayor a 6 letras.
 - **CLAVE:** Cualquiera mayor a 8 Numeros.
 - **DNI :** Cualquiera igual a 8 letras.
 - 
## <h1>Indicadores de Web Vitals</h1>

diseñamos la app web para que sea lo mas eficaz posible, siguiendo las buenas practicas de programación para cargar imágenes y scripts. Las estadísticas de rendimiento son optimas:

**![](./sprint_3/docs/rendimineto.png)**

## <h1>SEO</h1>

Para cada pagina utilizamos un Layout el cual le da el formato base. Este Layout contiene una etiqueta de titulo y descripción el cual cambia según la pagina a donde este. Por precaución de que no se le pase las etiquetas se definieron etiquetas por defecto, de esa forma siempre tiene titulo y detalles.

**![](./sprint_3/docs/SEO.png)**

Luego se cambiaron todas las etiquetas de img a Image igual que los Links para asegurar una carga optima. 

## <h1>Funcionalidades</h1>

##  Transferencias

En esta parte se usaron paginas estáticas ya cargadas en el servidor para mostrar la lista de cuentas disponibles para transferir. 

**![](./sprint_3/docs/transferencias_1.png)**

Luego para confirmar la transferencia que se esta por realizar se utilizo un baner el cual carga y muestra el estado de la transferencia.

**![](./sprint_3/docs/transferencias_2.png)**

##  Facturas

Para esta parte se coloco una lista de facturas pagas y no pagas, También se pueden agregar facturas con su boton. 

**![](./sprint_3/docs/facturas.png)**

Luego se utilizaron paginas dinámicas para mostrar el detalle de la factura, ya sea que este paga o no. Si no lo esta te da la opcion de pagarla.

**![](./sprint_3/docs/pagoFacturas.png)**

También se pueden crear las facturas a pagar por su botón de agregar facturas.

##  Tarjetas de Crédito

Para esta parte se creo una pagina dinámica el cual te muestra los consumos y te da la opcion de pago. Si ingresas al detalle podes ver el detalle y las cuotas ya pagas. 

**![](./sprint_3/docs/credito.png)**


##  Ayuda o Consultas

Se creo un formulario el cual toma tus datos y te da el lugar a consultar. Cuando se envía te da una confirmación al mail. 

**![](./sprint_3/docs/consulta.png)**

##  <h1>Generación de paginas</h1>

Para generar las paginas dinámicas organizamos la carpeta page en sub carpetas y utilizamos el ID de cada elemento en particular para identificarlo. Para las paginas dinamicas tenemos: 

- Detalle de actividad **/actividad/Num_Movimiento** generadas con getServerSideProps.
- Detalle de credito **/credito/Num_Compra** son generadas con getServerSideProps.
- Detalle de factura **/facturas/Numero_Factura** son generadas con getServerSideProps.
- Transferencias **/transferencias/cuenta** son generadas con getStaticPaths y getStaticProps.

**![](./sprint_3/docs/paginas.png)**

##  <h1>Llamadas a API o carga de datos</h1>

Para este tema en particular, se creo una única pagina la cual contiene todos los métodos que llaman a la API y devuelven su llamada después de tratar los posibles errores y formatear los datos correspondientes.

Para estas llamadas esta la pagina de **API_Datos_Personales.js** La cual conta de diversos métodos, pero todos en simples palabras usan useSWR para que la demora en tomar los datos sea la primera vez y que luego la navegación sea mas fluida para el usuario.

**![](./sprint_3/docs/API.png)**


##  Manejo de errores

Los errores se muestran con un baner mejorar la experiencia de usuario

**![](./sprint_3/docs/Error.png)**

## <h1>Documentación del sprint 1</h1>

**![Documentación](./sprint_1/README.md)**

## <h1>Documentación del sprint 2</h1>

**![Documentación](./sprint_2/README_Sprint_2.md)**
