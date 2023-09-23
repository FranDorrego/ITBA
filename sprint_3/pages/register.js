import { Contenido } from '../components/Login/Generales/Contenido';
import { Logo } from '../components/Login/Generales/Logo.js';
import { FormRegister } from '../components/Login/Register/FormRegister';
import { LinkCompuesto } from '../components/Login/Generales/LinkCompuesto';

import Head from 'next/head';
function Register() {
  return (
    <Contenido>
      <Head>
          <title>ITBANK - Registrarse</title>
          <meta name="description" content="Seccion para registrar una nueva cuenta"/>
      </Head>
      <Logo/>
      <FormRegister/>
      <LinkCompuesto textoParrafo="¿Ya tiene cuenta?" textoLink="Iniciar Sesión" link="/"/>
    </Contenido>
  );
}
export default Register;
