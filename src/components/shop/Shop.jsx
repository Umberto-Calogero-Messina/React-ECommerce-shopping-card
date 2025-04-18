import {
  StyledBox,
  StyledContent,
  StyledCount,
  StyledImg,
  StyledPrice,
  StyledPriceCount,
  StyledRemoveItem,
  StyledShopBox,
  StyledTitle,
  StyledTitleProduct,
  StyledTotalPrice
} from './Shop.styles';

const Shop = ({ cart, removeFromCart }) => {
  const filteredCart = cart.filter(product => product.quantity > 0);

  const totalProducts = cart.reduce((acc, product) => product.quantity + acc, 0);

  const isCartEmpty = filteredCart.length === 0;

  const totalOrder = cart.reduce((acc, product) => product.price * product.quantity + acc, 0);

  return (
    <StyledShopBox>
      <StyledTitle>Your Cart ({totalProducts})</StyledTitle>

      {isCartEmpty ? (
        <>
          <StyledImg src='./assets/images/illustration-empty-cart.svg' />
          <StyledContent>Your added items will appear here</StyledContent>
        </>
      ) : (
        <>
          {filteredCart.map(productInCart => (
            <div key={productInCart.id}>
              <StyledTitleProduct>{productInCart.name}</StyledTitleProduct>
              <StyledBox>
                <StyledCount>x{productInCart.quantity}</StyledCount>
                <StyledPrice>@{productInCart.price.toFixed(2)}</StyledPrice>
                <StyledPriceCount>${(productInCart.quantity * productInCart.price).toFixed(2)}</StyledPriceCount>
                <StyledRemoveItem
                  src='./assets/images/icon-remove-item.svg'
                  alt='Remove Item'
                  onClick={() => removeFromCart(productInCart)}
                />
              </StyledBox>
            </div>
          ))}

          <StyledTotalPrice>
            <span>Total Order</span>
            <span>${totalOrder.toFixed(2)}</span>
          </StyledTotalPrice>
        </>
      )}
    </StyledShopBox>
  );
};

export default Shop;
