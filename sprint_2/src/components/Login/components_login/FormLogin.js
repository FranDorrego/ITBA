import { Boton, validarDatos } from "./Boton"
import { Input } from "./Input"
import { Label } from "./Label"
import { Link } from "./Link"
import { Subtitulo } from "./Subtitulo"

export function FormLogin(){
    return (
            <form action="" className="formulario" id="form">
                <Subtitulo>¡Te damos la bienvenida!</Subtitulo>
                <Label>👤 Usuario</Label>
                <Input className="input" type="text" name="usuario" id="usuario" text="Usuario" placeholder="Ej: UserName123"/>
                <Label>👤 DNI</Label>
                <Input className="input" type="number" name="dni" id="dni" text="DNI" placeholder="Ej: 99999999"/>
                <Label>🔒 Contraseña</Label>
                <Input className="input" type="password" name="password" id="password" placeholder="**********" text="Contraseña" required/>  
                <Boton value="Iniciar Sesión" id="boton_inicio_sesion" validarDatos={validarDatos}></Boton>
                <Link textoLink="Olvide mi contraseña"/>
            </form>
    )
}

