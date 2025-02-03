import Button from '../button/Button';
import Title from '../title/Title';
import { StyledHeader } from './Header.styles';

const Header = ({ setFilter }) => {
  return (
    <StyledHeader>
      <Title>DESSERTS</Title>
      <Button onClick={() => setFilter(0)}>Default</Button>
      <Button onClick={() => setFilter(1)}>Name</Button>
      <Button onClick={() => setFilter(2)}>Price</Button>
    </StyledHeader>
  );
};

export default Header;
