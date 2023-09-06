import './styles.css';
import { Contenido } from './components_login/Contenido';
import { Logo } from './components_login/Logo.js';
import { FormRegister } from './components_login/FormRegister';
import { Link } from './components_login/Link';

function Register() {
  return (
    <Contenido>
      <Logo/>
      <FormRegister/>
      <Link textoParrafo="¿Ya tiene cuenta?" textoLink="Iniciar Sesión" />
    </Contenido>
  );
}
export default Register;
