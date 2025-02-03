import styled from 'styled-components';

const StyledShopBox = styled.aside`
  background-color: white;
  padding-inline: 24px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  color: #c73b0f;
  font-weight: 700;
  text-align: left;
`;

const StyledTitleProduct = styled.h2`
  color: rgb(38, 15, 8);
  font-family: 'Red Hat Text', serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.15;
`;

const StyledImg = styled.img``;

const StyledRemoveItem = styled.img`
  cursor: pointer;
`;

const StyledContent = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #87635a;
`;

const StyledBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: -10px;
`;

const StyledCount = styled.span`
  color: rgb(199, 59, 15);
`;

const StyledPrice = styled.span`
  color: rgb(135, 99, 90);
`;

const StyledPriceCount = styled.span`
  color: rgb(135, 99, 90);
  font-weight: 600;
`;

export {
  StyledShopBox,
  StyledTitle,
  StyledTitleProduct,
  StyledImg,
  StyledRemoveItem,
  StyledContent,
  StyledBox,
  StyledCount,
  StyledPrice,
  StyledPriceCount,
};
