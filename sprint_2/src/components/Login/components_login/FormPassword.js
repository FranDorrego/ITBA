import { Boton, validarDatos } from "./Boton"
import { Input } from "./Input"
import { Label } from "./Label"
import { Link } from "./Link"
import { Subtitulo } from "./Subtitulo"

export function FormPassword(){
    return (
            <form action="" className="formulario" id="form">
                <Subtitulo>Recupero de contraseña</Subtitulo>
                <Label>📧 Email</Label>
                <Input type="email" name="email" id="email" placeholder="Ej: alguien@example.com" required/> 
                <Label>👤 DNI</Label>
                <Input type="number" name="dni" id="dni" text="DNI" placeholder="Ej: 99999999"/>
                <Label>❓ Pregunta de seguridad</Label>
                <Input type="text" name="email" id="pregunta" placeholder="❓ Pregunta de seguridad  (aca iria la pregunta que ingreso la persona de la cuenta)" required/>
                <Label>🔒 Contraseña</Label>
                <Input type="password" name="password1" id="password1" placeholder="**********" required/>  
                <Label>🔒 Repita la contraseña</Label>
                <Input type="password" name="password2" id="password2" placeholder="**********" required/>  
                <Boton value="Enviar" id="boton_password" validarDatos={validarDatos}></Boton>
            </form>
    )
}
