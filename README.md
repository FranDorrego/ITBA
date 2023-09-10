# ITBANK
Es el proyecto de una Aplicación web de Home Banking renovado para ser simple y fácil de utilizar.

El grupo que esta creando ITBANK es **iKnowHow** Conformado por: 
  - Franco Nicolás Dorrego
  - Laureano Ibarra
  - Evelyn Gazal
  - Luciano Hermida
  - Mauro Joaquin Cena

# Forma de tester

Para testearlo simplemente ingresa a la carpeta **Sprint_2** y ejecuta **npm start**.
Este es el inicio de toda la APP, El usuario admitido es:

 - **USUARIO:** Cualquiera mayor a 6 letras.
 - **CLAVE:** Cualquiera mayor a 8 Numeros.
 - **DNI :** Cualquiera igual a 8 letras.

## <h1>API - ITBANK</h1>

Para este sprint se creo una API que toma el registro de actividades y las almacena, cuando el código las necesita solo hace una llamada a "https://itbank.pythonanywhere.com/" y recibe toda la información que recaudo a lo largo del tiempo. 

La información se da en formato JSON y se compone de dos partes: 

 1. "Datos" Son los datos de nombre y CBU, Se pueden SET con solo   
    ingresar a https://itbank.pythonanywhere.com/setCBU/{Nuevo CBU} || https://itbank.pythonanywhere.com/setNombre/{Nuevo Nombre}, Los datos quedan registrados y la próxima vez que se pidan van a ser los que se setearon por esas llamadas.
    
 2. "Historial" Es un JSON el cual contiene el Histórico de la cuenta, se guardan las transferencias, prestamos y gastos. Se puede agregar una transferencia/préstamo por estas llamadas.  
https://itbank.pythonanywhere.com/prestamo/{Monto de prestamo}/{Fecha en MS}
https://itbank.pythonanywhere.com/transfiere/{Monto de Transferencia}/{Fecha en MS}

Si por alguna razón se necesita eliminar el historial y restablecer todo al inicio, con tan solo llamar a https://itbank.pythonanywhere.com/reset se resetea todo el historial.

## Manejo de API en JS

Para el manejo de las llamas a la API se creo el archivo "Dashboard\components_dashboard\API_Datos_Personales.js". Este archivo tiene 3 Partes claves:

 - Historial() Es el encargado de pedir el historial de la cuenta, si no lo encuentra devuelve el JSON por defecto. Siempre para manejar el historial se lo llama, ya que convierte la fecha de Números a dd/mm/aaaa hh:mm 

 - TotalDineroCuenta() Devuelve un objeto que resume cuanto tiene la cuenta dentro en TOTAL, INGRESO, EGRESO. Solo recorre el objeto que devuelve historial, suma y resta dependiendo el caso. 

 -  PidePrestamo() y EnviaTransferencia() Son dos funciones las cuales toman por paramento un Monto, este tiene que ser un numero positivo siempre. La marca de tiempo se le coloca cuando se llama a la función. Estas devuelve un TRUE o FALSE si se concreto la operación. 

	    
## <h1>Distribución de archivos</h1>

La carpeta principal es **sprint_2\src\components** Dentro de ella se pueden ver 4 Carpetas, 404,  assets-globales, Dashboard, Login que almacenan toda la Aplicación en si.

**![](/docs/archivos.png)**

La carpeta principal y mas compleja es **Dashboard**

**![](/docs/modular.png)**

En esta imagen se puede ver como es la organización, comenzando por los componentes, cada componente esta separado en una carpeta en particular según su función o su complejidad. 

A su vez dentro de esta carpeta tenemos un sistema de archivos modularizado en donde cada archivo contiene un elemento en particular, solo en algunos casos en donde dividir era ambiguo o no era conveniente se dejo todo junto en un solo archivo. 

Gracias a este sistema la reutilización del código fue muy fácil y se puede ver en todas partes. Un ejemplo claro de esto, fue lo que antes era la "plantilla principal" de Footer, menú Izquierdo y derecho en cada HTML, Paso a componentes y luego solo se llama en en componente principal de cada pagina. 

Un dato no menor a nombrar es que dentro de cada componente hay una jerarquía, En donde el General Agrupa, ordena y es el encargado de pasar las etiquetas a sus hijos para que estos se lo pasen a sus nietos y asi sucesivamente.  

 - **General**  
    **![](/docs/general.png)**
 -  **Hijo**    
    **![](/docs/hijo.png)**
 - **Nieto**    
    **![](/docs/nieto.png)**

Y con esta simple estructura que se puede seguir expandiendo para arriba y abajo, se forma este render: 
	
**![](/docs/Render.png)**

Decimos que se expande para arriba ya que se tomo como General el componente que cambia, pero este a su vez esta dentro de otros componentes que forman toda la pagina. Como los manu laterales, footer y buscadores.

**![](/docs/Render-Global.png)**


## <h1>Router || SPA</h1>

Para poder navegar utilizamos Router para que solo cambie el centro (Contenedor principal) y los demás componentes no recargarían de nuevo.

Gran parte de la navegación lo manejan los Menú Laterales con Link 

**![](/docs/router.png)**

## <h1>CSS modules</h1>

Elegimos utilizar CSS Modules en vez de una librería ya que gran parte de nuestros estilos son específicos de nuestra pagina, por lo tanto vimos que era mas practico modularizar el CSS que ya teníamos antes de agregar una librería nueva y tener que customizar desde cero. 



## <h1>Documentación del sprint Anterior</h1>

**![Documentación](./sprint_1/README.md)**
