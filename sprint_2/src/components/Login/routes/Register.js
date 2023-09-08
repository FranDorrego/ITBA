import { Contenido } from '../components_login/Generales/Contenido';
import { Logo } from '../components_login/Generales/Logo.js';
import { FormRegister } from '../components_login/Register/FormRegister';
import { LinkCompuesto } from '../components_login/Generales/LinkCompuesto';

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
