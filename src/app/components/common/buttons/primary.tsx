// PrimaryButton.tsx
import { COLORS } from "app/constants";
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ROW_CENTER } from "styles/globalStyles";

const PrimaryButtonWrapper = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: ${COLORS.primary};
  color: white;
  border: none;
  height: 50px;
  ${ROW_CENTER}
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
