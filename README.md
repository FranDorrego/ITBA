# ITBANK
Es el proyecto de una Aplicación web de Home Banking renovado para ser simple y fácil de utilizar.

# Forma de tester

Para testearlo simplemente ingresa a la carpeta **Login/login.htm**.
Este es el inicio de toda la APP, El usuario admitido es:

 **USUARIO:** usuario@itbank.com
 **CLAVE:** 12345678
 **DNI :** 12345678
 

## Distribución de archivos

El proyecto tiene 3 carpetas principales **Login, Dashboard, assets-globales**. Login es todo el inicio de sesión y registro. Luego Dashboard contiene toda la parte interna del usuario, como paginas de transferencias, prestamos, resúmenes, entre otras paginas. Para ello se utilizo una plantilla en todos los HTML.

## Plantilla de HTML

Esta plantilla se repite en todas las paginas internas del Dashboard, esta contiene un formato de HTML separado de la siguiente forma:

**![](https://lh4.googleusercontent.com/mX6l8yUIAuBKg0BK0YUCnUA4ZEXj2OtLLgCd7jxF7GgXHMbOyS-Q7gn2E6j-1TEzj8Airf0-RmebZnRVUlmo0ycSTZRgueYU-OWrETs3bIaOb29_62ITYXBFt3ybq-Qo5R9r6lqzbFKwCN4UbgcDCX8)**
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
![](https://lh3.googleusercontent.com/G__btLW9rbeuciuVy7Ye2QHWF46GAydDltpEm7c7Ns7nbZcUwxi0dXhB2HrbEo3NZGQErY3Un3crTKK2xryxqApELij_neMDOPXrPvxS0mDW5hm_AK_kGwNmLZL8TfmmlGj9QxRJOePj6-WgTyqH8Uw)

Dentro de ese GRID principal, cada elemento usa GRID nuevamente para organizarse. Internamente de cada elemento vuelve a dividirse según lo que tenga. Pero en este último caso, se maneja con flex.
![](https://lh3.googleusercontent.com/bSto7JhZgefuU7qUWqoiSURfiExekT8UK_aDZnS_KtAsmw1ogCiXp5KtCl0HGTzpuZMKzvG4eXRd_MUJdbyWpm8P5X_cLYOpl1347O46OgiZ_sHICNdLMuJl0ttYjtIZzAyd39aF6tNBPD7SfupNQLQ)

La etiqueta "a" Fue sobre escrita en el CSS principal en estilos ya que se utilizaba muy seguido en todo el proyecto.

![](https://lh3.googleusercontent.com/EuJ8S9HTupxnLQNhwgWAdrceiQjIdyDuK1Hcy8Q5LW4I9onMIsBRtbG39HL8SlluvF0UaQ5WPGwcMqdEQLDXu9hW2hNnF88TbyO8t9iU5PAxWTtmMq-vzAkHvEKVYU_eaaHAf1PbKl9M5BUbAsDkD9g)

El resto de componentes están orientados en FLEX están alineados ya sea con -center o con los márgenes del componente.

RESPONSIVE:
Solo se adaptó a desktop, tablet y celular. Para ello se ocultan algunos elementos y se trasladan a otro lado. (Se habla de este tema en HTML)

![](https://lh3.googleusercontent.com/-jm6mt8L1LSjaXXza-p9eBvC_FNIlOGWINNNcgLPISfeGKxclJV49v8FHbNPmtY2ib54-6J9lc_VHkQrTYf4Mu58rmlMB5kiqW6qcxlijesgJPem4bZqRUSgyEf5reSuCJyAQgv6gknnxvyvJxqPvkQ)

Además de ello, algunos div se vuelven scrol:
![](https://lh6.googleusercontent.com/GvIgtLWlAjdsWKpz6O9j7Va0FgSrXXG0tYdlXXyU_3wgK3VvLxJuFuwvmaXGWDCIjUc_JDAIUrY1-JlYWaIEIHDKMjCQVw0M0q4438U4pcvTlu_sKzX1kvXRPVCzHmTdmAlD5eHqJ8PDOq-brKeNAVE)

##  <h1>JavaScript</h1>

Para realizar el JS decidimos juntar todos los archivos en una misma carpeta llamada scripts y de esta manera tener todos agrupados en un mismo lugar, para que a la hora de buscarlos sea más cómodo y rápido. A su vez, los nombres de los archivos están asociados a su HTML correspondiente, por ejemplo, prestamos.js está relacionado con el prestamos.html, esto lo realizamos tanto para el Dashboard como para el Login. 

![](/docs//archivos.png)

El archivo llamado **CONSTATES.js** lo utilizamos para guardar variables y funciones globales como, por ejemplo, para actualizar el saldo, que si realizamos un préstamo en otra página que esto se vea reflejado y la misma funcionalidad para las transferencias.

Para la parte de **cambio-divisas.js**:

-convertir, la cual toma el valor ingresado para la moneda de origen, cuando se presiona el botón para convertir realiza el cálculo correspondiente a las divisas seleccionadas y lo refleja en el input de monto convertido.

-dos funciones que cambian la imagen, una para la moneda de origen y la otra el monto convertido. Acá cada vez que se selecciona otra opción de moneda realiza el cambio de imagen correspondiente.
<div>

1) Estado Base

![](/docs/arg_dolares.png) 

2) Busco la opción

![](/docs/menu.png) 

3) Selecciono y se cambia la bandera

![](/docs/arg_brasil.png)

</div>



Luego para el **prestamos.js** tiene 3 funciones:

-hay dos eventos asociados al pop-up, uno para abrirlo y otro para cerrarlo.

-una función de re-direccionamiento a la sección de formulario para el préstamo.

Después el formulario-prestamos.js:

-tiene una única función la cual se encarga de simular el préstamo solicitado para que el cliente vea con detalle cómo se realizara, el ingresa el monto que quiere y en cuantas cuotas, se calcula con los intereses como quedarían las cuotas, los intereses a pagar y el total. En la misma función se encarga de evaluar las excepciones posibles a la hora de realizar el formulario.

Por último **transferencias.js**:

-2 eventos que se encargan de cambiar el efecto visual de seleccionado para los botones de “nueva transferencia” y “transferir a mis cuentas”.

![](/docs/nuevo_select.png)

![](/docs/transfer_select.png)

-también otro evento que se encarga de atrapar las excepciones y comunicar al usuario el problema hallado.


## Diseño
