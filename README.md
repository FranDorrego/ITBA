# ITBANK
Es el proyecto de una Aplicación web de Home Banking renovado para ser simple y fácil de utilizar.

El grupo que esta creando ITBANK es **iKnowHow** Conformado por: 
  - Franco Nicolás Dorrego
  - Laureano Ibarra
  - Evelyn Gazal
  - Luciano Hermida
  - Mauro Joaquin Cena

# Forma de tester

Para testearlo simplemente ingresa al archivo **Login/login.htm**.
Este es el inicio de toda la APP, El usuario admitido es:

 - **USUARIO:** usuario@itbank.com  
 - **CLAVE:** Por el momento es libre de colocar cualquier clave.   
 - **DNI :** Por el momento es libre de colocar cualquier DNI.

## <h1>Diseño</h1>

El diseño ha sido concebido con una clara intención, **proyectar una imagen visual que combine modernidad, atractivo, coherencia y una sensación cautivadora.** 

El objetivo es impactar al usuario desde el primer momento y motivar un prolongado compromiso con la página o aplicación. Para lograr esto, se ha dado relevancia en crear un entorno estético que sea capaz de **sorprender al usuario y mantener su interés.**

Se ha puesto un énfasis significativo en asegurar que la **experiencia del usuario sea tan fluida** como sea posible, evitando cualquier barrera que pueda generar confusión o dificultad en su interacción con la plataforma. 

Para conseguirlo se han incorporado **herramientas de manera estratégica** con una **disposición lógica y comprensible** para que estén al alcance del **usuario en todo momento** permitiendo que realicen sus acciones de manera instintiva y sin esfuerzo.

Este enfoque holístico hacia la arquitectura de la información y la adaptación subraya el compromiso de crear un entorno donde los usuarios no solo **encuentren lo que buscan**, sino que también **disfruten del proceso.**


## <h1>Distribución de archivos</h1>

El proyecto tiene 3 carpetas principales **Login, Dashboard, assets-globales**. Login es todo el inicio de sesión y registro. Luego Dashboard contiene toda la parte interna del usuario, como paginas de transferencias, prestamos, resúmenes, entre otras paginas. Para ello se utilizo una plantilla en todos los HTML.

**assets-globales** contiene los archivos que mas se repiten en todo el proyecto como así también la tipografía. 

## Plantilla de HTML

Esta plantilla se repite en todas las paginas internas del Dashboard, esta contiene un formato de HTML separado de la siguiente forma:

**![](/docs/html.png)**

Menu derecho:  
-   Un div para logo y boton (Es la parte de arriba)
-   Luego son todos "a" que contienen botones.
-   Hay botones con una etiqueta especial “botoes-aux-izquierda” Están ocultos al principio ya que están del lado derecho en la versión desktop pero en versiones de tablet o celulares aparecen.

Parte media / General:
-   Hay un div que es el buscador con un input dentro.
-   Luego tenes el div contenedor del contenido de la pagina.

Menú Izquierdo:
-   Tenes un Span el cual contiene la foto del usuario y boton de notificaciones.
-   Tenes otro DIV el cual cambia según la pagina. Este es el centro de la pagina y por lo general es el que mas cambia.

Foder:
-   Este tiene 2 DIV, en cada uno hay un "a" con texto. No dirigen a nada.
-   Hay un 3er div el cual contiene las fotos de redes sociales. También dentro de un `<a>`.

## Plantilla de CSS

Esta plantilla es exclusiva de todos los elementos que se repiten. Esta en "assets-globales". Además de ello tiene fotos y tipografías utilizadas en la plantilla. Para ordenar todo utilizamos GRID y FLEX en la mayoría de los elementos. Se compone de la siguiente forma:

**Body**: Use GRID con 3 columnas a lo ancho y 2 filas a lo alto

![](/docs/css.png)

Dentro de ese GRID principal, cada elemento usa GRID nuevamente para organizarse. Internamente de cada elemento vuelve a dividirse según lo que tenga. Pero en este último caso, se maneja con flex.
![](/docs/grid.png)

La etiqueta "a" Fue sobre escrita en el CSS principal en estilos ya que se utilizaba muy seguido en todo el proyecto.

![](/docs/a-etiqueta.png)

El resto de componentes están orientados en FLEX están alineados ya sea con -center o con los márgenes del componente.

RESPONSIVE:
Solo se adaptó a desktop, tablet y celular. Para ello se ocultan algunos elementos y se trasladan a otro lado. (Se habla de este tema en HTML)

![](/docs/responsive.png)

Además de ello, algunos div se vuelven scrol:
![](/docs/scrol.png)


##  <h1>JavaScript</h1>

Para realizar el JS decidimos juntar todos los archivos en una misma carpeta llamada scripts y de esta manera tener todos agrupados en un mismo lugar, para que a la hora de buscarlos sea más cómodo y rápido. A su vez, los nombres de los archivos están asociados a su HTML correspondiente, por ejemplo, prestamos.js está relacionado con el prestamos.html, esto lo realizamos tanto para el Dashboard como para el Login. 

![](/docs//archivos.png)

El archivo llamado **CONSTATES.js** lo utilizamos para guardar variables y funciones globales como, por ejemplo, para actualizar el saldo, que si realizamos un préstamo en otra página que esto se vea reflejado y la misma funcionalidad para las transferencias.

Para la parte de **cambio-divisas.js**:

- Convertir, la cual toma el valor ingresado para la moneda de origen, cuando se presiona el botón para convertir realiza el cálculo correspondiente a las divisas seleccionadas y lo refleja en el input de monto convertido.
- Dos funciones que cambian la imagen, una para la moneda de origen y la otra el monto convertido. Acá cada vez que se selecciona otra opción de moneda realiza el cambio de imagen correspondiente.
<div>

1) Estado Base

![](/docs/arg_dolares.png) 

2) Busco la opción

![](/docs/menu.png) 

3) Selecciono y se cambia la bandera

![](/docs/arg_brasil.png)

</div>



Luego para el **prestamos.js** tiene 3 funciones:
 
 - Hay dos eventos asociados al pop-up, uno para abrirlo y otro para cerrarlo.
 - Una función de re-direccionamiento a la sección de formulario para el préstamo.

Después el formulario-prestamos.js:

 - Tiene una única función la cual se encarga de simular el préstamo
   solicitado para que el cliente vea con detalle cómo se realizara, el
   ingresa el monto que quiere y en cuantas cuotas, se calcula con los
   intereses como quedarían las cuotas, los intereses a pagar y el
   total. En la misma función se encarga de evaluar las excepciones
   posibles a la hora de realizar el formulario.

Por último **transferencias.js**:

 - 2 eventos que se encargan de cambiar el efecto visual de seleccionado
   para los botones de “nueva transferencia” y “transferir a mis
   cuentas”.

![](/docs/nuevo_select.png)

![](/docs/transfer_select.png)

 - También otro evento que se encarga de atrapar las excepciones y
   comunicar al usuario el problema hallado.

