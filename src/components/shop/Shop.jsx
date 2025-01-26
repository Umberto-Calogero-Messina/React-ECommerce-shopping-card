import { useState } from 'react';
import {
  StyledShop,
  StyledContent,
  StyledImg,
  StyledTitle,
  StyledProductList,
  StyledProductItem,
  StyledTotal,
  StyledDeleteIcon
} from './Shop.styles';

const Shop = () => {
  const [cart, setCart] = useState([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const addToCart = item => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = id =>
    setCart(prevCart => prevCart.filter(item => item.id !== id));

  return (
    <StyledShop>
      <StyledTitle>Your Cart ({totalItems})</StyledTitle>
      {cart.length === 0 ? (
        <>
          <StyledImg src='./assets/images/illustration-empty-cart.svg' />
          <StyledContent>Your added items will appear here</StyledContent>
        </>
      ) : (
        <StyledProductList>
          {cart.map(item => (
            <StyledProductItem key={item.id}>
              <div>{item.name}</div>
              <div>x{item.quantity}</div>
              <div>${item.price.toFixed(2)}</div>
              <div>${(item.quantity * item.price).toFixed(2)}</div>
              <StyledDeleteIcon
                src='./assets/images/icon-delete-product.svg'
                alt='delete product icon'
                onClick={() => removeFromCart(item.id)}
              />
            </StyledProductItem>
          ))}
          <StyledTotal>
            <div>Total Order</div>
            <div>${totalPrice.toFixed(2)}</div>
          </StyledTotal>
        </StyledProductList>
      )}
    </StyledShop>
  );
};

export default Shop;
