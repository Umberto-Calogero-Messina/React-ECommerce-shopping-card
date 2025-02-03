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
  StyledTitle,
} from './Card.styles';

const Card = ({ product, cart, setCart }) => {
  const isInCart = cart.find(
    (productInCart) => productInCart.id === product.id
  );
  return (
    <StyledCard>
      <StyledContent>
        <StyledImg src={product.imgMobile} alt="" />

        {!isInCart ? (
          <StyledButton onClick={() => addToCart(product, cart, setCart)}>
            Add To Cart
          </StyledButton>
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
      </StyledContent>

      <StyledName>{product.name}</StyledName>
      <StyledTitle>{product.title}</StyledTitle>
      <StyledPrice>${product.price.toFixed(2)}</StyledPrice>
    </StyledCard>
  );
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
    removeFromCart(productToUpdate, cart, setCart);
  }
};

const removeFromCart = (product, cart, setCart) => {
  const updatedCart = cart.filter(
    (productInCart) => productInCart.id !== product.id
  );
  setCart(updatedCart);
};

const addToCart = (product, cart, setCart) => {
  setCart([...cart, { ...product, quantity: 1 }]);
};
export default Card;
