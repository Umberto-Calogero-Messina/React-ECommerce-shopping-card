import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Red Hat Text', serif;
`;
const StyledImg = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const StyledContent = styled.div`
  position: relative;
`;

const StyledName = styled.h2`
  color: #87635a;
  font-size: 14px;
  margin-bottom: 4px;
`;

const StyledTitle = styled.p`
  font-size: 16px;
  color: #260f08;
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #c73b0f;
  margin-bottom: 30px;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-inline: 24px;
  width: 160px;
  height: 44px;
  border: 1px solid rgb(173, 138, 133);
  border-radius: 22px;
  background-color: rgb(255, 255, 255);
  translate: -50% 50%;
  cursor: pointer;

  @media screen and (width >= 768px) {
    bottom: 15px;
  }
`;

const StyledButtonActive = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-inline: 24px;
  width: 160px;
  height: 44px;
  border: 1px solid rgb(173, 138, 133);
  border-radius: 22px;
  translate: -50% 50%;
  color: rgb(255, 255, 255);
  background-color: rgb(199, 59, 15);

  @media screen and (width >= 768px) {
    bottom: 15px;
  }
`;

const StyleButtonNumer = styled.span`
  color: rgb(255, 255, 255);
  font-family: inherit;
  line-height: 1.15;
`;

const StyleButtonImgActive = styled.img`
  width: 10px;
  height: 10px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`;
export {
  StyledCard,
  StyledImg,
  StyledContent,
  StyledName,
  StyledTitle,
  StyledPrice,
  StyledButton,
  StyledButtonActive,
  StyleButtonNumer,
  StyleButtonImgActive
};
