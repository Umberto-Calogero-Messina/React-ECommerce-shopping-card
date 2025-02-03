import { useState } from 'react';
import Header from './components/header/Header';

import Cards from './components/cards/Cards';
import Main from './components/main/Main';
import Shop from './components/shop/Shop';

const App = () => {
  const [filter, setFilter] = useState(0);
  const [cart, setCart] = useState([]);

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product.id !== productToRemove.id
    );
    setCart(updatedCart);
  };

  return (
    <>
      <Header setFilter={setFilter} />
      <Main>
        <Cards cart={cart} setCart={setCart} filter={filter} />
        <Shop cart={cart} removeFromCart={removeFromCart} />{' '}
        {/* Passa removeFromCart come prop */}
      </Main>

      {/* <main>
        {filteredProducts.map((product) => {
          const isInCart = cart.find(
            (productInCart) => productInCart.id === product.id
          );

          return (
            <div key={product.id}>
              <img src={product.imgMobile} alt={product.name + ' image'} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>

              {!isInCart ? (
                <button onClick={() => addToCart(product, cart, setCart)}>
                  Add To Cart
                </button>
              ) : (
                <StyledButtonActive>
                  <StyleButtonImgActive
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="Decrement Quantity"
                    onClick={() => decrementQuantity(product.id, cart, setCart)}
                  />
                  <StyleButtonNumer>{isInCart.quantity}</StyleButtonNumer>
                  <StyleButtonImgActive
                    src="/assets/images/icon-increment-quantity.svg"
                    alt="Increment Quantity"
                    onClick={() => incrementQuantity(product.id, cart, setCart)}
                  />
                </StyledButtonActive>
              )}
            </div>
          );
        })}

        {cart.filter((product) => product.quantity > 0).length === 0 && (
          <h2>NO PRODUCTS</h2>
        )}

        {cart.length > 0 &&
          cart
            .filter((productInCart) => productInCart.quantity > 0)
            .map((productInCart) => (
              <div key={productInCart.id}>
                <h2>
                  {productInCart.quantity} {productInCart.name}
                </h2>
              </div>
            ))}
      </main> */}
    </>
  );
};

export default App;
