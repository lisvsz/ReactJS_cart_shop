import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import ModalCart from './Components/modalCart/ModalCart';

import DisplayProducts from './Containers/displayProducts/DisplayProducts';
import Details from './Containers/details/Details';
import Form from './Containers/form/Form';

function App() {
  return (
      <div className="App">
        < Header />
        <Switch>
          <Route path="/" exact component={DisplayProducts} />
          <Route path="/product/:productId" component={Details} />
          <Route path="/ordering" component={{Form}} />
        </Switch>
      </div>
  );
}

export default App;
