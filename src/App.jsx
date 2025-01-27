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
          const inCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id}>
              <img src={product.imgMobile} alt={product.name + ' image'} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>

              {!inCart ? (
                <button onClick={() => addToCart(cart, setCart, product)}>
                  Add To Cart
                </button>
              ) : (
                <StyledButtonActive>
                  <StyleButtonImgActive
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="Decrement Quantity"
                  />
                  <StyleButtonNumer>0</StyleButtonNumer>
                  <StyleButtonImgActive
                    src="./assets/images/icon-increment-quantity.svg"
                    alt="Increment Quantity"
                  />
                </StyledButtonActive>
              )}
            </div>
          );
        })}
        {cart.length === 0 && <h2>NO PRODUCTS</h2>}
        {cart.length > 0 &&
          cart.map((productInCart) => (
            <div key={productInCart.id}>
              <span>{}</span>
              <h2>{productInCart.name}</h2>
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
    return sortedProducts.sort((a, b) =>
      a.name.localeCompare(b.name.localeCompare)
    );
  }

  if (filter === 2) {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }
};

const addToCart = (cart, setCart, product) => {
  setCart([...cart, product]);
};

export default App;
