import { Contenido } from '../components/Login/components_login/Generales/Contenido';
import { Logo } from '../components/Login/components_login/Generales/Logo.js';
import { FormRegister } from '../components/Login/components_login/Register/FormRegister';
import { LinkCompuesto } from '../components/Login/components_login/Generales/LinkCompuesto';

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
