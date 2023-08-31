// SecondaryButton.tsx
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS } from "app/constants";
const SecondaryButtonWrapper = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: transparent;
  color: ${COLORS.secondary};
  border: 2px solid ${COLORS.secondary};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${COLORS.secondary};
    color: white;
  }
`;

const SecondaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => <SecondaryButtonWrapper {...props} />;

export default SecondaryButton;
