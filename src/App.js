import React from 'react';
import {Switch , Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './componentsss/Cart/Cart'
import Default from './componentsss/Default'
import Details from './componentsss/Details'
import Navbar from './componentsss/Navbar'
import ProductList from './componentsss/ProductList'
import Model from './componentsss/Model'


function App() {
  return (
    <React.Fragment>
    
      <Navbar></Navbar>
      
        <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/Details" component={Details}></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route component={Default}></Route>
        </Switch>


      <Model></Model>

      </React.Fragment>
  );
}


export default App

