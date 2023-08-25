import { useSelector } from "react-redux";
import { CartProduct } from "../Home/types";
import { globalSelectors } from "store/selectors";
import { memo } from "react";
import {
  CartContainer,
  CartItem,
  Label,
  CartSummary,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
} from "./styles";
import { LocalStorageKeys, storage } from "store/storage";
import history from "router/history";
import { AppPages } from "app/types";

export const Checkout = memo(() => {
  const cart = useSelector(globalSelectors.cart);
  const cartSummary = useSelector(globalSelectors.cartSummary);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const handleBuyClick = () => {
    if (!storage.read(LocalStorageKeys.AUTH)) {
      history.push(AppPages.Login);
    }
  };
  return (
    <Container>
      <CartContainer>
        <h2>Cart Items</h2>
        {cart.map((item: CartProduct) => (
          <CartItem key={item.id}>
            <h3>
              {item.name} X{item.quantity}
            </h3>
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
              {item.name}: ${item.price} +{item.quantity}
            </p>
          ))}
          <p>Total: ${cartSummary.totalAmount}</p>
        </CartSummary>
        <Button type="submit" onClick={handleBuyClick}>
          Buy
        </Button>
      </Form>
    </Container>
  );
});
