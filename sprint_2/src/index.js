import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/routes/Login';
import Password from './components/Login/routes/Password';
import Register from './components/Login/routes/Register';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  { /* CONSULLTAR SI ESTO ESTA BIEN, ESTA HECHO PQ CUANDO ARRANCA LA APP SE VA AL "/", PERO QUIERO Q EL MAIN SEA EL LOGIN
    LA OTRA ES CAMBIAR DONDE SIEMPRE DIGA "/login" POR "/" Y SACAR EL DE ABAJO*/
    path:"/",
    element: <Login/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/password",
    element: <Password/>
  },
  {
    path:"/register",
    element: <Register/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
