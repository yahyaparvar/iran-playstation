import { memo } from "react";
import { useSelector } from "react-redux";
import { globalSelectors } from "store/selectors";
import { CartProduct } from "../Home/types";
import {
  Container,
  CartContainer,
  CartItem,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CartSummary,
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
        <h2>Your Cart</h2>
        {cart.map((item: CartProduct) => (
          <CartItem key={item._id}>
            <h3>
              {item.name} X{item.quantity}
            </h3>
            <p>Price: ${item.price}</p>
          </CartItem>
        ))}
      </CartContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input type="text" name="name" placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label>Email Address</Label>
          <Input type="email" name="email" placeholder="john@example.com" />
        </FormGroup>
        <FormGroup>
          <Label>Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
          />
        </FormGroup>
        <CartSummary>
          <h3>Order Summary</h3>
          {cart.map((item: CartProduct) => (
            <p key={item._id}>
              {item.name}: ${item.price} +{item.quantity}
            </p>
          ))}
          <p>Total: ${cartSummary.totalAmount}</p>
        </CartSummary>
        <Button type="submit" onClick={handleBuyClick}>
          Complete Purchase
        </Button>
      </Form>
    </Container>
  );
});
