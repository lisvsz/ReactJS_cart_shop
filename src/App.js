import './App.css';
import Header from './Components/header/Header';
import Filters from './Components/filters/Filters';
import ModalCart from './Components/modalCart/ModalCart';

import DisplayProducts from './Containers/displayProducts/DisplayProducts';
import Details from './Containers/details/Details';
import Shipped from './Containers/shipped/Shipped';
import Form from './Containers/form/Form';

function App() {
  return (
    <div className="App">
      < Header />
      <div className ="productsBox">
        < Filters />
        <DisplayProducts />
      </div>
      < Details />
      < Shipped />
      < Form />
      < ModalCart />
    </div>
  );
}

export default App;
