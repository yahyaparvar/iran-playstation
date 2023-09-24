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
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartItemTotalPrice,
  CartItemTotalPriceTitle,
  Label,
  Button,
  CartSummary,
  CartSummaryTitle,
  CartSummaryPrice,
  CartItemContainer,
  SummaryPriceDivider,
  FormContainer,
  FormRow,
  FormSeperator,
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
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Input type="text" name="firstName" placeholder="نام" />
            <FormSeperator />
            <Input type="text" name="lastName" placeholder="نام خانوادگی" />
          </FormRow>
          <FormGroup>
            <Input type="email" name="email" placeholder="ایمیل" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="phoneNumber" placeholder="شماره تلفن" />
          </FormGroup>
          <Button type="submit" onClick={handleBuyClick}>
            رفتن به درگاه
          </Button>
        </Form>
      </FormContainer>
      <CartContainer>
        <CartSummary>
          <CartSummaryTitle>اطلاعات خرید:</CartSummaryTitle>
          {cart.map((product: CartProduct) => (
            <CartItemContainer key={product._id}>
              <CartItemName>
                {product.quantity}x عدد {product.name} {product.price} دلاری
              </CartItemName>
              <CartItemTotalPrice>
                ${product.price * product.quantity}
              </CartItemTotalPrice>
            </CartItemContainer>
          ))}
          <CartItemContainer>
            <CartItemName>مالیات</CartItemName>
            <CartItemTotalPrice>${cartSummary.totalItems}</CartItemTotalPrice>
          </CartItemContainer>
          <SummaryPriceDivider></SummaryPriceDivider>
          <CartItemContainer>
            <CartItemName>قیمت کل:</CartItemName>
            <CartItemTotalPrice>${cartSummary.totalAmount}</CartItemTotalPrice>
          </CartItemContainer>
          <CartItemContainer>
            <CartItemName>قیمت به تومان:</CartItemName>
            <CartItemTotalPrice>
              {cartSummary.toman?.toLocaleString()} تومان
            </CartItemTotalPrice>
          </CartItemContainer>
        </CartSummary>
      </CartContainer>
    </Container>
  );
});
