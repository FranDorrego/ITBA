import { Contenido } from '../components/Login/Generales/Contenido';

import { Logo } from '../components/Login/Generales/Logo.js';

import { FormLogin } from '../components/Login/Login/FormLogin';

import { LinkCompuesto } from '../components/Login/Generales/LinkCompuesto';

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
