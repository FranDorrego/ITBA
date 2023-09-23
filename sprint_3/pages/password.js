
import { Contenido } from '../components/Login/Generales/Contenido';
import { Logo } from '../components/Login/Generales/Logo.js';
import { FormPassword } from '../components/Login/Password/FormPassword';
import { LinkCompuesto } from '../components/Login/Generales/LinkCompuesto';
import Head from 'next/head';

function Password() {
  return (
    <Contenido>
      <Head>
          <title>ITBANK - Recupero de contraseña</title>
          <meta name="description" content="Seccion para recuperar la contraseña"/>
      </Head>
      <Logo/>
      <FormPassword/>
      <LinkCompuesto textoParrafo="¿Ya tiene cuenta?" textoLink="Iniciar Sesión" link="/"/>
    </Contenido>
  );
}

export default Password;
