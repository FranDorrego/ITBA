import { Boton } from "../Generales/Boton"
import { Input } from "../Generales/Input"
import { Label } from "../Generales/Label"
import { Subtitulo } from "../Generales/Subtitulo"
import { LinkCompuesto } from "../Generales/LinkCompuesto"

export function FormLogin(){
    return (
            <form action="" className="formulario_login" id="form">
                <Subtitulo>¡Te damos la bienvenida!</Subtitulo>
                <Label>👤 Usuario</Label>
                <Input type="text" name="usuario" id="usuario" text="Usuario" placeholder="Ej: UserName123"/>
                <Label>👤 DNI</Label>
                <Input type="number" name="dni" id="dni" text="DNI" placeholder="Ej: 99999999"/>
                <Label>🔒 Contraseña</Label>
                <Input type="password" name="password" id="password" placeholder="**********" text="Contraseña" required/>  
                <Boton value="Iniciar Sesión" id="boton_inicio_sesion"></Boton>
                <LinkCompuesto textoLink="Olvide mi contraseña" link="/password"/>
            </form>
    )
}

