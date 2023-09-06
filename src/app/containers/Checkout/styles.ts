import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

export const CartContainer = styled.div`
  width: 300px;
  margin-right: 40px;
  direction: rtl;
`;

export const CartItem = styled.div`
  border: 1px solid #e0e0e0;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const Form = styled.form`
  width: 420px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CartSummary = styled.div`
  margin-top: 24px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  background-color: #f8f8f8;
  border-radius: 6px;
`;
