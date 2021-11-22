import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Mapa from './pages/Mapa';
import Empresas from './pages/Empresas';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {


  return (

    <BrowserRouter>
      <body>
        <header>
          <h1>SGI</h1>
          <nav>
            <ul style={{ textAlign:'center'}}>
              <li>
                <Link to="/mapa" style={{ textDecoration:'none', color:'rgb(10, 10, 10)'}}>Mapa</Link>
              </li>
              <li>
                <Link to="/produtos" style={{ textDecoration:'none', color:'rgb(10, 10, 10)'}}>Produtos</Link>
              </li>
              <li>
                <Link to="/empresas" style={{ textDecoration:'none', color:'rgb(10, 10, 10)'}}>Empresas</Link>
              </li>
            </ul>
          </nav>
        </header>  
        <hr/>

        <Switch>
    
          <Route exact path="/mapa" component={Mapa}/>
      
          <Route path="/produtos" component={Produtos}/>
        
          <Route path="/empresas" component={Empresas}/>

          <Route path="/" component={Login}/>

          <Route path="*">
            <h4>Página não encontrada</h4>
          </Route>
        
        </Switch>         
        <hr/>
        <footer>
          Todos os direitos reservados &copy;DEVinHouse
        </footer>
      </body>
    </BrowserRouter>
 
  );
}

export default App;