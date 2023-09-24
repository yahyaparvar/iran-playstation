import PrimaryButton from "app/components/common/buttons/primary";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/GppGood";
import {
  COLUMN_ALIGN_END__JUSTIFY_CENTER,
  COLUMN_ALIGN_START__JUSTIFY_CENTER,
  COLUMN_CENTER,
  COLUMN_JUSTIFY_START__ALIGN_CENTER,
  ROW_ALIGN_CENTER__SPACE_B,
} from "styles/globalStyles";

export const Wrapper = styled.div`
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER}
  min-height: 100vh;
  margin-top: 170px;
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  align-items: flex-start;
  padding: 20px;
`;
export const ProductImage = styled.img`
  width: 370px;
  height: auto;
`;
export const FeaturesContainer = styled.div`
  ${ROW_ALIGN_CENTER__SPACE_B}
  border-top: 1px solid #ccc;
  padding: 10px 0;
  margin-top: 30px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
export const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #7a7a7a;
  margin-bottom: 10px;
`;
export const FeatureIcon = styled(CheckIcon)`
  color: #4caf50;
  font-size: 29px !important;
  margin-left: 4px;
`;
export const PlaceHolder = styled.div`
  width: 10px;
`;

export const FeatureText = styled.div``;
export const ProductInfo = styled.div`
  margin-right: 60px;
  ${COLUMN_ALIGN_END__JUSTIFY_CENTER}
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  direction: rtl;
  margin-bottom: 20px;
`;
export const BuyButton = styled(PrimaryButton)`
  background-color: #ff2040;
  color: white;
  padding: 7px 20px;
  font-size: 16px;
  margin-top: 24px;
  font-weight: 600;
`;

export const LoadingContainer = styled.div`
  ${COLUMN_CENTER}
  width: 100%;
  height: 100vh;
`;
export const LoadingProgressIndicator = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-top-color: #ff2040;
  animation: spin 1s infinite linear;
  margin-bottom: 20px;
`;
export const TwoColumnLayout = styled.div`
  direction: rtl; // Set direction to right-to-left
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 50px; // Reduced vertical padding
  border-radius: 10px;
`;

// Style for each individual column
export const ContentBox = styled.div`
  flex: 1;
  padding: 10px; // Reduced vertical padding
  background-color: #fff;
  border-radius: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px; // Reduced vertical margin
  color: #333;
`;

export const ItemList = styled.ul`
  list-style-type: disc;
  margin-left: 20px; // Adjusted for rtl layout
`;

export const Item = styled.li`
  font-size: 16px;
  margin-bottom: 5px; // Reduced vertical margin
  color: #666;
`;
export const AnchorLink = styled.a`
  color: #ff2040;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
