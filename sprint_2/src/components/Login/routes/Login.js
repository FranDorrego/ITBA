import '../styles.css';
import { Contenido } from '../components_login/Contenido';
import { Logo } from '../components_login/Logo.js';
import { FormLogin } from '../components_login/FormLogin';
import { LinkCompuesto } from '../components_login/LinkCompuesto';

function Login() {
  return (
    <Contenido>
      <Logo/>
      <FormLogin/>
      <LinkCompuesto textoParrafo="¿No tiene cuenta?" textoLink="Crear cuenta" link="/register"/>
    </Contenido>
  );
}
export default Login;
