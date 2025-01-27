import styled from 'styled-components';

const StyledShop = styled.div`
  text-align: center;
  margin-inline: 10px;
  padding: 24px;
  font-family: 'Red Hat Text', serif;
  border-radius: 12px;
  background-color: white;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  color: #c73b0f;
  font-weight: 700;
  text-align: left;
`;

const StyledImg = styled.img``;

const StyledContent = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #87635a;
`;

// Estilo para la lista de productos en el carrito
export const StyledProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

// Estilo para cada ítem de la lista de productos
export const StyledProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Estilo para el total
export const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

// Estilo para el ícono de eliminar producto (StyledDeleteIcon)
export const StyledDeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export { StyledShop, StyledTitle, StyledImg, StyledContent };
