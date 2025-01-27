import Button from '../button/Button';
import Title from '../title/Title';
import { StyledHeader } from './Header.styles';

const Header = ({ setSortType }) => {
  return (
    <StyledHeader>
      <Title>DESSERTS</Title>
      <Button onClick={() => setSortType(0)}>Default</Button>
      <Button onClick={() => setSortType(1)}>Name</Button>
      <Button onClick={() => setSortType(2)}>Price</Button>
    </StyledHeader>
  );
};

export default Header;
