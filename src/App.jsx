import { useState } from 'react';
import Header from './components/header/Header';

import Cards from './components/cards/Cards';
import Main from './components/main/Main';
import Shop from './components/shop/Shop';

const App = () => {
  const [filter, setFilter] = useState(0);
  const [cart, setCart] = useState([]);

  const removeFromCart = productToRemove => {
    const updatedCart = cart.filter(product => product.id !== productToRemove.id);
    setCart(updatedCart);
  };

  return (
    <>
      <Header setFilter={setFilter} />
      <Main>
        <Cards cart={cart} setCart={setCart} filter={filter} />
        <Shop cart={cart} removeFromCart={removeFromCart} />
      </Main>
    </>
  );
};

export default App;
