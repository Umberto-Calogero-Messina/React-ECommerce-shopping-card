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
      const existingItem = prevCart.find(i => i.id === item.id);
      if (existingItem) {
        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  let content = 0;

  if (cart.length === 0) {
    content = (
      <>
        <StyledImg src='./assets/images/illustration-empty-cart.svg' />
        <StyledContent>Your added items will appear here</StyledContent>
      </>
    );
  } else {
    content = (
      <StyledProductList>
        {cart.map(item => (
          <StyledProductItem key={item.id}>
            <div>{item.name}</div>
            <div>x{item.quantity}</div>
            <div>@${item.price.toFixed(2)}</div>
            <div>${(item.quantity * item.price).toFixed(2)}</div>
            <StyledDeleteIcon
              src='./assets/images/icon-delete-product.svg'
              alt='delete product icon'
              onClick={() => {
                setCart(prevCart => prevCart.filter(i => i.id !== item.id));
              }}
            />
          </StyledProductItem>
        ))}
        <StyledTotal>
          <div>Total Order</div>
          <div>${totalPrice.toFixed(2)}</div>
        </StyledTotal>
        <StyledContent>This is a carbon-neutral delivery</StyledContent>
      </StyledProductList>
    );
  }

  return (
    <StyledShop>
      <StyledTitle>Your Cart ({totalItems})</StyledTitle>
      {content}
    </StyledShop>
  );
};

export default Shop;
