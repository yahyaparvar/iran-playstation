import styled from "styled-components";
import { ROW, ROW_CENTER } from "styles/globalStyles";
import { CustomInput } from "../inputs/simple";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
  ${ROW_CENTER}
  position:fixed;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  height: 85px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const SearchInput = styled(CustomInput)`
  width: 300px;
  margin-right: 16px;
`;

export const SearchIconButton = styled(SearchIcon)`
  cursor: pointer;
`;

export const PopoverContent = styled.div`
  padding: 16px;
  min-width: 200px;
`;
export const LeftActions = styled.div`
  ${ROW}
`;
export const RightActions = styled.div`
  ${ROW}
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CartContainer = styled.div`
  position: relative;
  width: 60px;
  ${ROW_CENTER}
  cursor: pointer;
`;

export const CartIcon = styled(AddShoppingCartIcon)`
  color: #000000;
  font-size: 30px;
  width: 100% !important;
  height: 35px !important;
`;

export const ItemCount = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${ROW_CENTER}
  background-color: red;
  color: white;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 12px;
`;
