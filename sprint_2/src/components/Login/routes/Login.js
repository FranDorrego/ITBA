
import { Contenido } from '../components_login/Generales/Contenido';
import { Logo } from '../components_login/Generales/Logo.js';
import { FormLogin } from '../components_login/Login/FormLogin';
import { LinkCompuesto } from '../components_login/Generales/LinkCompuesto';


function Login() {
  return (
          <div>
            <Contenido>
              <Logo/>
              <FormLogin/>
              <LinkCompuesto textoParrafo="¿No tiene cuenta?" textoLink="Crear cuenta" link="/register"/>
            </Contenido>
        </div>

  );
}

export default Login;
