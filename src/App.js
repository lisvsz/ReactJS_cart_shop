import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import ModalCart from './Components/modalCart/ModalCart';

import DisplayProducts from './Containers/displayProducts/DisplayProducts';
import Details from './Containers/details/Details';
import Shipped from './Containers/shipped/Shipped';
import Form from './Containers/form/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />
        < DisplayProducts />
      </div>
    </BrowserRouter>
  );
}

export default App;
