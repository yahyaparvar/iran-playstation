import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { COLUMN_ALIGN_END__JUSTIFY_CENTER } from "styles/globalStyles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rtl?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  touched?: boolean;
}

const BaseCustomInput: React.FC<CustomInputProps> = ({
  rtl,
  leftIcon,
  rightIcon,
  error,
  touched,
  ...props
}) => {
  return (
    <InputContainer {...props} hasError={touched && !!error}>
      <LeftIconWrapper>{leftIcon}</LeftIconWrapper>
      <TextInput
        autoComplete="new-password"
        type="text"
        dir={rtl ? "rtl" : "ltr"}
        {...props}
      />
      <RightIconWrapper>{rightIcon}</RightIconWrapper>
      {touched && error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

const InputContainer = styled.div<{ hasError?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 1px solid ${(props) => (props.hasError ? "red" : "white")};
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  transition: all 0.3s;
`;

const TextInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  width: 100%;
  font-size: 16px;
  text-align: right;
  &::placeholder {
    color: white;
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

const CustomInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const CustomInput: React.FC<CustomInputProps> = ({ ...props }) => (
  <CustomInputWrapper>
    <BaseCustomInput {...props} />
  </CustomInputWrapper>
);
