import '../styles.css';
import { Contenido } from '../components_login/Contenido';
import { Logo } from '../components_login/Logo.js';
import { FormPassword } from '../components_login/FormPassword';
import { LinkCompuesto } from '../components_login/LinkCompuesto';

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
