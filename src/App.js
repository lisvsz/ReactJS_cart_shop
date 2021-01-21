import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Containers/header/Header';
import ModalCart from './Components/modalCart/ModalCart';

import DisplayProducts from './Containers/displayProducts/DisplayProducts';
import Details from './Containers/details/Details';
import Form from './Containers/form/Form';
import Success from './Containers/success/Success';

function App() {

  const [show, setShow] = useState(false)
  
  const closeModalHandler = () => setShow(false);

  const drawerToggleClicked = () => setShow(!show);
  
  return (
      <div className="App">
        <Header clicked={drawerToggleClicked} />
        <ModalCart closed={closeModalHandler} open={show} />
        <Switch>
          <Route path="/" exact component={DisplayProducts} />
          <Route path="/product/:productId" component={Details} />
          <Route path="/ordering" component={Form} />
          <Route path='/success' component={Success} />
        </Switch>
      </div>
  );
}

export default App;
