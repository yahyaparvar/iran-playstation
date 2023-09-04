import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rtl?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  touched?: boolean;
  noValidation?: boolean;
  variant?: "primary" | "secondary"; // Add a variant prop
}

const BaseCustomInput: React.FC<CustomInputProps> = ({
  rtl,
  leftIcon,
  rightIcon,
  error,
  touched,
  variant = "primary", // Default to primary variant
  ...props
}) => {
  return (
    <InputContainer
      {...props}
      hasError={touched && !!error}
      variant={variant} // Pass the variant to the styled component
    >
      <LeftIconWrapper>{leftIcon}</LeftIconWrapper>
      <TextInput
        autoComplete="new-password"
        type="text"
        dir={rtl ? "rtl" : "rtl"}
        spellCheck="false"
        {...props}
        variant={variant} // Pass the variant to the styled component
      />
      <RightIconWrapper>{rightIcon}</RightIconWrapper>
      {touched && error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

const InputContainer = styled.div<{ hasError?: boolean; variant: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.hasError
        ? "red"
        : props.variant === "primary"
        ? "#fff"
        : "#0000000"};
  background-color: ${(props) =>
    props.variant === "primary" ? "transparent" : "#cecece"};
  border-radius: 8px;
  padding: 8px;
  transition: all 0.3s;
`;

const TextInput = styled.input<{ variant: string }>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.variant === "primary" ? "white" : "black")};
  outline: none;
  width: 100%;
  text-align: right;
  &::placeholder {
    color: ${(props) => (props.variant === "primary" ? "white" : "black")};
    font-size: 18px;
  }
  &:focus {
    ${InputContainer} {
      border: 1px solid green;
    }
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 11px;
  position: absolute;
  bottom: -30px;
  margin-top: 4px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 4px;
`;

const LeftIconWrapper = styled(Icon)`
  order: 0;
`;

const RightIconWrapper = styled(Icon)`
  order: 1;
`;

const CustomInputWrapper = styled.div<{ noValidation?: boolean }>`
  width: 100%;
  margin-bottom: ${(props) => (props.noValidation === true ? "0" : "16px")};
`;

export const CustomInput: React.FC<CustomInputProps> = ({ ...props }) => (
  <CustomInputWrapper noValidation={props.noValidation}>
    <BaseCustomInput {...props} />
  </CustomInputWrapper>
);
