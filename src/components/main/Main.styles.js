import styled from 'styled-components';

const StyledMain = styled.div`
  display: grid;

  @media screen and (width >= 768px) {
    max-width: 750px;
    margin-inline: auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export { StyledMain };
