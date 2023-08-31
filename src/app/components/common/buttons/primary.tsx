// PrimaryButton.tsx
import { COLORS } from "app/constants";
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const PrimaryButtonWrapper = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: ${COLORS.primary};
  color: white;
  border: none;
  padding: 11px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(${COLORS.primary}, 0.1);
  }
`;

const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => <PrimaryButtonWrapper {...props} />;

export default PrimaryButton;
