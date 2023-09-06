import './styles.css';
import { Contenido } from './components_login/Contenido';
import { Logo } from './components_login/Logo.js';
import { FormLogin } from './components_login/FormLogin';
import { Link } from './components_login/Link';

function Login() {
  return (
    <Contenido>
      <Logo/>
      <FormLogin/>
      <Link textoParrafo="¿No tiene cuenta?" textoLink="Crear cuenta" />
    </Contenido>
  );
}
export default Login;
