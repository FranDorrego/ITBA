
import { Contenido } from '../components/Login/Generales/Contenido';
import { Logo } from '../components/Login/Generales/Logo.js';
import { FormPassword } from '../components/Login/Password/FormPassword';
import { LinkCompuesto } from '../components/Login/Generales/LinkCompuesto';

function Password() {
  return (
    <Contenido>
      <Logo/>
      <FormPassword/>
      <LinkCompuesto textoParrafo="¿Ya tiene cuenta?" textoLink="Iniciar Sesión" link="/login"/>
    </Contenido>
  );
}

export default Password;
