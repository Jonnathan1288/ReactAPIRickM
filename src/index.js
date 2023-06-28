import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//En este apartado de la importacion no importa el nombre ya que podemos poner cualquier en App pero  en el caso de que este exportado
//por defecto de la clase del componente..

//Ahora si exportamos la clase directa debemos poner en {} -> dentro de ella el nombre de la clase..
// import App from './App';
import App, { Prueba } from './App';

//Otra manera de hacer es por todo  renombrando el modulo..
// import * as module from './App';

import reportWebVitals from './reportWebVitals';
// import { Events } from './components/EventComponent';

import Characters from './components/Characters';

//Import de la rutas..
import { BrowserRouter as Router, Routes, Route, NavLink, } from 'react-router-dom';
import { Form1 } from './components/Form';
import {PersonajeComponent} from './components/PersonajeComponent';
import { Switch } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App titulo = 'RICK' state = 'Alive' gender = 'Male' chapters = 'All'/> */}
    {/* <App /> */}
    {/* <module.Prueba/>   */}
    <Router>
      <div>
        <div>
        {/* <NavLink to={'/form'}>Go</NavLink> */}
        </div>
      <Routes>


      
        <Route path='' Component={Characters} />
        <Route path='/index/:id' Component={PersonajeComponent} />
        <Route path='/form' exact Component={Form1} />
       
      </Routes>
      </div>

      {/* <Characters /> */}
    </Router>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
