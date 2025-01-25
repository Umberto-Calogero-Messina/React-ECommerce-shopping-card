import Button from '../button/Button';
import Title from '../title/Title';
import { StyledHeader } from './Header.styles';

const Header = ({ setSortType }) => {
  return (
    <StyledHeader>
      <Title>DESSERTS</Title>
      <Button onClick={() => setSortType('default')}>Default</Button>
      <Button onClick={() => setSortType('name')}>Name</Button>
      <Button onClick={() => setSortType('price')}>Price</Button>
    </StyledHeader>
  );
};

export default Header;
