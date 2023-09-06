import { Boton } from "./Boton"
import { Input } from "./Input"
import { Label } from "./Label"

export function FormLogin(){
    return (
            <form action="" className="formulario" id="form">
                <h2 className="subtitulo">¡Te damos la bienvenida!</h2>
                <Label>Usuario</Label>
                <Input className="input" type="text" name="usuario" id="usuario" text="Usuario" placeholder="👤 Usuario"/>
                <Label>DNI</Label>
                <Input className="input" type="number" name="dni" id="dni" text="DNI" placeholder="👤 DNI"/>
                <Label>Contraseña</Label>
                <Input className="input" type="password" name="password" id="password" placeholder="🔒 Contraseña" text="Contraseña" required/>  
                <Boton value="Iniciar Sesión"></Boton>
                <a href="/Login/password.html" className="link">Olvide mi contraseña</a>
            </form>
    )
}

