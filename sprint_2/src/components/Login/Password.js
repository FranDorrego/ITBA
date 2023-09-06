import './styles.css';
import { Contenido } from './components_login/Contenido';
import { Logo } from './components_login/Logo.js';
import { FormPassword } from './components_login/FormPassword';
import { Link } from './components_login/Link';

function Password() {
  return (
    <Contenido>
      <Logo/>
      <FormPassword/>
      <Link textoParrafo="¿Ya tiene cuenta?" textoLink="Iniciar Sesión" />
    </Contenido>
  );
}
export default Password;
