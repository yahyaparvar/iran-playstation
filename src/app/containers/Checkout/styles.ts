import styled from "styled-components";
import { COLUMN_ALIGN_START__JUSTIFY_CENTER } from "styles/globalStyles";

export const Wrapper = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
  width:100%;
`;

export const Form = styled.form`
  width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  width: 300px;
  margin-right: 20px;
`;

export const CartItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;
