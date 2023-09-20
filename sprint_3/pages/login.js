
import { Contenido } from '../components/Login/components_login/Generales/Contenido';
import { Logo } from '../components/Login/components_login/Generales/Logo.js';
import { FormLogin } from '../components/Login/components_login/Login/FormLogin';
import { LinkCompuesto } from '../components/Login/components_login/Generales/LinkCompuesto';


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
