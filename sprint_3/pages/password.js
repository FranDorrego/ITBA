
import { Contenido } from '../components/Login/components_login/Generales/Contenido';
import { Logo } from '../components/Login/components_login/Generales/Logo.js';
import { FormPassword } from '../components/Login/components_login/Password/FormPassword';
import { LinkCompuesto } from '../components/Login/components_login/Generales/LinkCompuesto';

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
