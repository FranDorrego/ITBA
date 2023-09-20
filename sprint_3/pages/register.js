import { Contenido } from '../components/Login/Generales/Contenido';
import { Logo } from '../components/Login/Generales/Logo.js';
import { FormRegister } from '../components/Login/Register/FormRegister';
import { LinkCompuesto } from '../components/Login/Generales/LinkCompuesto';

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
