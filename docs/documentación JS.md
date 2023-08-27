## JavaScript

Para realizar el JS decidimos juntar todos los archivos en una misma carpeta llamada scripts y de esta manera tener todos agrupados en un mismo lugar, para que a la hora de buscarlos sea más cómodo y rápido. A su vez, los nombres de los archivos están asociados a su HTML correspondiente, por ejemplo, prestamos.js está relacionado con el prestamos.html, esto lo realizamos tanto para el Dashboard como para el Login. 

![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.001.png)![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.002.png)

El archivo llamado CONSTATES.js lo utilizamos para guardar variables y funciones globales como, por ejemplo, para actualizar el saldo, que si realizamos un préstamo en otra página que esto se vea reflejado y la misma funcionalidad para las transferencias.

Para la parte de **cambio-divisas.js**:

-convertir, la cual toma el valor ingresado para la moneda de origen, cuando se presiona el botón para convertir realiza el cálculo correspondiente a las divisas seleccionadas y lo refleja en el input de monto convertido.

-dos funciones que cambian la imagen, una para la moneda de origen y la otra el monto convertido. Acá cada vez que se selecciona otra opción de moneda realiza el cambio de imagen correspondiente.

![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.003.png)![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.004.png)![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.005.png)




Luego para el **prestamos.js** tiene 3 funciones:

-hay dos eventos asociados al pop-up, uno para abrirlo y otro para cerrarlo.

-una función de re-direccionamiento a la sección de formulario para el préstamo.

Después el formulario-prestamos.js:

-tiene una única función la cual se encarga de simular el préstamo solicitado para que el cliente vea con detalle cómo se realizara, el ingresa el monto que quiere y en cuantas cuotas, se calcula con los intereses como quedarían las cuotas, los intereses a pagar y el total. En la misma función se encarga de evaluar las excepciones posibles a la hora de realizar el formulario.

Por último **transferencias.js**:

-2 eventos que se encargan de cambiar el efecto visual de seleccionado para los botones de “nueva transferencia” y “transferir a mis cuentas”.

![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.006.png)

![](Aspose.Words.55b1e1a9-e81e-40c7-9718-7f355dcab846.007.png)

-también otro evento que se encarga de atrapar las excepciones y comunicar al usuario el problema hallado.

