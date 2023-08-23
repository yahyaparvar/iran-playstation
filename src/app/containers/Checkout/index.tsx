import { useSelector } from "react-redux";
import { CartProduct } from "../Home/types";
import { globalSelectors } from "store/selectors";
import { memo } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CartContainer = styled.div`
  width: 300px;
  margin-right: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CartSummary = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Checkout = memo(() => {
  const cart = useSelector(globalSelectors.cart);
  const cartSummary = useSelector(globalSelectors.cartSummary);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <CartContainer>
        <h2>Cart Items</h2>
        {cart.map((item: CartProduct) => (
          <CartItem key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </CartItem>
        ))}
      </CartContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label>Card Number</Label>
          <Input type="text" name="cardNumber" />
        </FormGroup>
        <CartSummary>
          <h3>Cart Summary</h3>
          {cart.map((item: CartProduct) => (
            <p key={item.id}>
              {item.name}: ${item.price}
            </p>
          ))}
          <p>Total: ${cartSummary.totalAmount}</p>
        </CartSummary>
        <Button type="submit">Checkout</Button>
      </Form>
    </Container>
  );
});
