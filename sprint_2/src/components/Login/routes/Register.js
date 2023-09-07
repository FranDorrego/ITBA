import '../styles.css';
import { Contenido } from '../components_login/Contenido';
import { Logo } from '../components_login/Logo.js';
import { FormRegister } from '../components_login/FormRegister';
import { LinkCompuesto } from '../components_login/LinkCompuesto';

function Register() {
  return (
    <Contenido>
      <Logo/>
      <FormRegister/>
      <LinkCompuesto textoParrafo="¿Ya tiene cuenta?" textoLink="Iniciar Sesión" link="/login"/>
    </Contenido>
  );
}
export default Register;
