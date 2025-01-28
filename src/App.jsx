import { useState } from 'react';
import { PRODUCTS } from './constants/products';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';

import {
  StyleButtonImgActive,
  StyleButtonNumer,
  StyledButtonActive,
} from './components/card/Card.styles';

const App = () => {
  const [filter, setFilter] = useState(0);
  const [cart, setCart] = useState([]);

  const filteredProducts = filterProducts(PRODUCTS, filter);

  return (
    <>
      <GlobalStyles />
      <h1>Desserts</h1>
      <Header setFilter={setFilter} />
      <main>
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
      </main>
    </>
  );
};

const filterProducts = (products, filter) => {
  const sortedProducts = [...products];
  if (filter === 0) return sortedProducts;
  if (filter === 1) {
    return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filter === 2) {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }
};

const incrementQuantity = (productId, cart, setCart) => {
  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      item.quantity++;
    }
    return item;
  });

  setCart(updatedCart);
};

const decrementQuantity = (productId, cart, setCart) => {
  const productToUpdate = cart.find((product) => product.id === productId);

  if (productToUpdate.quantity > 1) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        item.quantity--;
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  }
};

const addToCart = (product, cart, setCart) => {
  setCart([...cart, { ...product, quantity: 1 }]);
};

export default App;
