import PrimaryButton from "app/components/common/buttons/primary";
import React, { useState } from "react";
import styled from "styled-components";
import { COLUMN_CENTER } from "styles/globalStyles";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  country: string;
  action: string;
  onClick: () => void;
}

const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  border-radius: 5px;
  transition: transform 0.2s ease;
  ${COLUMN_CENTER}
  &:hover {
    transform: scale(1.05);
  }
  position: relative; /* Added position relative for absolute positioning */
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  direction: rtl;
  margin: 10px 0;
`;
const ProductAvailablity = styled.div`
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  direction: rtl;
  color: green;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 0;
  align-self: flex-end;
`;

const ProductCountryFlag = styled.img`
  position: absolute;
  top: 23px;
  right: 27px;
  width: 46px;
`;

const ActionButton = styled.p`
  font-size: 18px;
  font-weight: 800;
  align-self: flex-start;
`;

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  country,
  action,
  onClick,
}) => {
  return (
    <ProductCardContainer onClick={onClick}>
      <ProductImage src={image} alt={title} />
      <ProductCountryFlag
        src={`https://flagsapi.com/${country}/flat/64.png`}
        alt={`${country} Flag`}
      />
      <ProductName>{title}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductAvailablity>موجود</ProductAvailablity>
      <ActionButton onClick={onClick}>از ۵۰۰،۰۰۰ تومان</ActionButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
