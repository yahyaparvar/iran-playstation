import React, { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import {
  product_detailActions,
  product_detailReducer,
  sliceKey,
} from "./slice";
import { productDetailSaga } from "./saga";
import { useParams } from "react-router-dom";
import { productDetailSelectors } from "./selectors";
import { globalActions, useGlobalSlice } from "store/slice";
import FastForwardIcon from "@mui/icons-material/FastForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EcoIcon from "@mui/icons-material/ElectricCarOutlined";
import { Button, Select, MenuItem } from "@mui/material";
import styled from "styled-components";
import {
  AnchorLink,
  BuyButton,
  ContentBox,
  Feature,
  FeatureIcon,
  FeatureText,
  FeaturesContainer,
  Item,
  ItemList,
  LoadingContainer,
  LoadingProgressIndicator,
  PlaceHolder,
  ProductDescription,
  ProductDetailContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  SectionTitle,
  TwoColumnLayout,
  Wrapper,
} from "./styles";
import {
  COLUMN_ALIGN_END__JUSTIFY_CENTER,
  COLUMN_CENTER,
} from "styles/globalStyles";
import PrimaryButton from "app/components/common/buttons/primary";
import CustomDropdown from "./components/drowpdown";
import { CartProduct, Product } from "../Home/types";

interface Props {}

export const ProductDetail = memo((props: Props) => {
  useGlobalSlice();
  useInjectReducer({ key: sliceKey, reducer: product_detailReducer });
  useInjectSaga({ key: sliceKey, saga: productDetailSaga });
  const isLoading = useSelector(productDetailSelectors.isProductDetailLoading);
  const product = useSelector(productDetailSelectors.productDetail);
  const dispatch = useDispatch();
  const [selectedPrice, setPrice] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(product_detailActions.getProductDetail({ id }));
    }
  }, [dispatch, id]);

  const prices = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

  const handlePriceChange = (event: string) => {
    setPrice(parseInt(event));
  };
  const handleBuyButtonClick = (product: Product) => {
    dispatch(
      globalActions.addToCart({
        _id: product._id,
        name: product.name,
        quantity: 1,
        country: product.country,
        description: product.description,
        image: product.image,
        price: selectedPrice,
        priceRange: product.priceRange,
        slug: product.slug,
        benefits: product.benefits,
        howToUse: product.howToUse,
      })
    );
  };

  return (
    <>
      <Helmet>
        <title>ProductDetail</title>
        <meta name="description" content="Description of ProductDetail" />
      </Helmet>
      <Wrapper>
        {isLoading ? (
          <LoadingContainer>
            <LoadingProgressIndicator />
          </LoadingContainer>
        ) : (
          product && (
            <ProductDetailContainer>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <CustomDropdown
                  items={prices}
                  onSelect={(option) => {
                    handlePriceChange(option);
                  }}
                ></CustomDropdown>
                <BuyButton onClick={() => handleBuyButtonClick(product)}>
                  اضافه به سبد خرید
                </BuyButton>

                <FeaturesContainer>
                  <PlaceHolder />
                  <Feature>
                    <FeatureText>تحویل آنی، امن</FeatureText>
                    <FeatureIcon />
                  </Feature>
                  <Feature>
                    <FeatureText>ارسال به ایمیل و شماره تلفن</FeatureText>
                    <FeatureIcon />
                  </Feature>
                  <Feature>
                    <FeatureText>امکان پرداخت ریالی</FeatureText>
                    <FeatureIcon />
                  </Feature>
                </FeaturesContainer>
              </ProductInfo>
              <ProductImage src={product.image} alt={product.name} />
            </ProductDetailContainer>
          )
        )}
        <TwoColumnLayout>
          <ContentBox>
            <SectionTitle> نحوه استفاده | Redeem</SectionTitle>
            برای مطلع شدن از نحوه استفاده میتوانید به صفحه یا به{" "}
            <AnchorLink href={product?.howToUse[1]}>
              {" "}
              شرایط استفاده از گیفت کارد پلی استیشن
            </AnchorLink>{" "}
            و یا به
            <AnchorLink href={product?.howToUse[0]}>
              {" "}
              ویدیو یوتیوب{" "}
            </AnchorLink>{" "}
            مراجعه کنید
          </ContentBox>
          <ContentBox>
            <SectionTitle>مزایا:</SectionTitle>
            <ItemList>
              {product &&
                product.benefits.map((benefit, index) => (
                  <Item key={index}>{benefit}</Item>
                ))}
            </ItemList>
          </ContentBox>
        </TwoColumnLayout>
      </Wrapper>
    </>
  );
});
