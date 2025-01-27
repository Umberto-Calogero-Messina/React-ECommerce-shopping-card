import styled from 'styled-components';

const StyledButtonActive = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-inline: 24px;
  width: 160px;
  height: 44px;
  border: 1px solid rgb(173, 138, 133);
  border-radius: 22px;
  color: rgb(255, 255, 255);
  background-color: rgb(199, 59, 15);
`;

const StyleButtonImgActive = styled.img`
  width: 20px;
  height: 20px;

  padding: 4px;
  cursor: pointer;
`;

const StyleButtonNumer = styled.span`
  color: rgb(255, 255, 255);

  line-height: 1.15;
`;
export { StyleButtonImgActive, StyledButtonActive, StyleButtonNumer };
