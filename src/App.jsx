import { useState } from 'react';
import { PRODUCTS } from './constants/products';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';

import { StyleButtonImgActive, StyleButtonNumer, StyledButtonActive } from './components/card/Card.styles';

const App = () => {
  const [filter, setFilter] = useState(0);
  const [cart, setCart] = useState([]);

  const filteredProducts = filterProducts(PRODUCTS, filter);

  const incrementQuantity = productId => {
    setCart(prevCart =>
      prevCart.map(item => (item.id === productId ? { ...item, quantity: (item.quantity || 0) + 1 } : item))
    );
  };

  const decrementQuantity = productId => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) } : item
      )
    );
  };

  const addToCart = product => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <GlobalStyles />
      <h1>Desserts</h1>
      <Header setFilter={setFilter} />
      <main>
        {filteredProducts.map(product => {
          const cartItem = cart.find(item => item.id === product.id);
          const inCart = cartItem && cartItem.quantity > 0;

          return (
            <div key={product.id}>
              <img src={product.imgMobile} alt={product.name + ' image'} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>

              {!inCart ? (
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              ) : (
                <StyledButtonActive>
                  <StyleButtonImgActive
                    src='/assets/images/icon-decrement-quantity.svg'
                    alt='Decrement Quantity'
                    onClick={() => decrementQuantity(product.id)}
                  />
                  <StyleButtonNumer>{cartItem.quantity}</StyleButtonNumer>
                  <StyleButtonImgActive
                    src='/assets/images/icon-increment-quantity.svg'
                    alt='Increment Quantity'
                    onClick={() => incrementQuantity(product.id)}
                  />
                </StyledButtonActive>
              )}
            </div>
          );
        })}

        {cart.filter(product => product.quantity > 0).length === 0 && <h2>NO PRODUCTS</h2>}

        {cart.length > 0 &&
          cart
            .filter(productInCart => productInCart.quantity > 0)
            .map(productInCart => (
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

export default App;
