import styled from "styled-components";
import background from "assets/svg/fade_backgeround.svg";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
`;

export const CartContainer = styled.div`
  margin-right: 40px;
  direction: rtl;
  width: 100%;
`;

export const CartItem = styled.div`
  border: 1px solid #e0e0e0;
  padding: 12px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 4px;
`;
export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding-top: 144px;
  align-items: center;
`;
export const Form = styled.form`
  width: 500px;
  padding: 24px;
  height: 100%;
  background-color: #ffffff;
  direction: rtl;
  border-radius: 12px;
`;
export const FormSeperator = styled.div`
  width: 24px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
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
  direction: rtl;
  padding: 10px;
  background-color: #eee;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: border 0.3s;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
  }
  &:focus {
    border-bottom: 1px solid #0070d1;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 8px 18px;
  background-color: #007bff;
  color: #ffffff;
  align-self: flex-start;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CartSummary = styled.div`
  padding: 44px 85px;
  background-color: #f8f8f8;
  border-radius: 6px;
  width: 100%;
`;
export const CartSummaryTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #333;
`;
export const CartSummaryPrice = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-right: 30px;
  margin-bottom: 12px;
`;
export const CartItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #8b8b8b;
  margin-bottom: 12px;
`;
export const CartItemPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const CartItemQuantity = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const CartItemTotalPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const CartItemTotalPriceTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;
export const SummaryPriceDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000;
  margin: 18px 0;
`;
