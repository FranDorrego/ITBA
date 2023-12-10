import { Contenido } from '../components/Login/Generales/Contenido';

import { Logo } from '../components/Login/Generales/Logo.js';

import { FormLogin } from '../components/Login/Login/FormLogin';

import { LinkCompuesto } from '../components/Login/Generales/LinkCompuesto';
import Head from 'next/head';

import React, { useEffect } from 'react';

function Login() {
  
  useEffect(() => {
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }, []); 

  return (
        <Contenido>
          <Head>
            <title>ITBANK - Login</title>
            <meta name="description" content="Login para acceder a nuestro Home Banking"/>
          </Head>
          <Logo/>
          <FormLogin/>
          {
            //<LinkCompuesto textoParrafo="¿No tiene cuenta?" textoLink="Crear cuenta" link="/register"/>
          }
        </Contenido>
  );
}

export default Login;
