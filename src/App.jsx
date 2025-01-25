import { useState } from 'react';
import Card from './components/card/Card';
import { PRODUCTS } from './js/products';
import Shop from './components/shop/Shop';
import Main from './components/main/Main';
import Header from './components/header/Header';

const App = () => {
  const [sortType, setSortType] = useState('default');

  const getSortFunctions = () => {
    return {
      price: (a, b) => a.price - b.price,
      name: (a, b) => a.title.localeCompare(b.title),
      default: () => 0
    };
  };

  const getSortFunction = sortType => {
    const sortFunctions = getSortFunctions();
    return sortFunctions[sortType] || sortFunctions.default;
  };

  const sortedProducts = () => {
    const sortFunction = getSortFunction(sortType);
    return [...PRODUCTS].sort(sortFunction);
  };

  return (
    <div>
      <Header setSortType={setSortType} />
      <Main>
        {sortedProducts().map(item => (
          <Card key={item.id} item={item} />
        ))}
      </Main>
      <Shop />
    </div>
  );
};

export default App;
