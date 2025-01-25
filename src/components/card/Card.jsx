import { useState } from 'react';
import {
  StyleButtonImgActive,
  StyleButtonNumer,
  StyledButton,
  StyledButtonActive,
  StyledCard,
  StyledContent,
  StyledImg,
  StyledName,
  StyledPrice,
  StyledTitle
} from './Card.styles';

const Card = ({ item, addToCart }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsInCart(true);
    addToCart(item);
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity === 1) {
        setIsInCart(false);
        return 1;
      }
      return prevQuantity - 1;
    });
  };

  return (
    <StyledCard>
      <StyledContent>
        <StyledImg src={item.imgMobile} alt={item.alt} />

        {!isInCart ? (
          <StyledButton onClick={handleAddToCart}>
            <img src='./assets/images/icon-add-to-cart.svg' alt='' />
            Add to Cart
          </StyledButton>
        ) : (
          <StyledButtonActive>
            <StyleButtonImgActive
              src='./assets/images/icon-decrement-quantity.svg'
              alt=''
              onClick={handleDecrement}
            />

            <StyleButtonNumer>{quantity}</StyleButtonNumer>

            <StyleButtonImgActive
              src='./assets/images/icon-increment-quantity.svg'
              alt=''
              onClick={handleIncrement}
            />
          </StyledButtonActive>
        )}
      </StyledContent>

      <StyledName>{item.name}</StyledName>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledPrice>${item.price.toFixed(2)}</StyledPrice>
    </StyledCard>
  );
};

export default Card;
