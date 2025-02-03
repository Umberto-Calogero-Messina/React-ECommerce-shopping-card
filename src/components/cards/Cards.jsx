import Card from '../card/Card';
import { PRODUCTS } from '../../constants/products';

const Cards = ({ cart, setCart, filter }) => {
  const filteredProducts = filterProducts(PRODUCTS, filter);
  return (
    <>
      {filteredProducts.map((product) => {
        const isInCart = cart.find(
          (productInCart) => productInCart.id === product.id
        );
        return (
          <Card
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
            productInCart={isInCart}
          />
        );
      })}
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

export default Cards;
