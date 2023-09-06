import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  TextField,
  IconButton,
  Typography,
  Popover,
  Fade,
} from "@mui/material";

import { AppPages } from "app/types";
import { globalSelectors } from "store/selectors";
import history from "router/history";
import { playstationLogoUrl } from "app/constants";
import { useGlobalSlice } from "store/slice";
import makeBlockie from "ethereum-blockies-base64";
import {
  HeaderWrapper,
  LeftActions,
  ProfileImg,
  CartContainer,
  CartIcon,
  ItemCount,
  PopoverContent,
  RightActions,
  PageText,
  SearchInput,
  SearchIconButton,
  Logo,
} from "./styles";

export const Header = () => {
  useGlobalSlice();
  const cartSummary = useSelector(globalSelectors.cartSummary);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleProfileClick = (event: any) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };
  const handleLogoClick = () => {
    history.push(AppPages.RootPage);
  };
  const openProfile = Boolean(profileAnchorEl);
  const profileId = openProfile ? "profile-popover" : undefined;

  const handleCartClick = () => {
    history.push(AppPages.Checkout);
  };

  const handleSearch = () => {};

  return (
    <HeaderWrapper>
      <LeftActions>
        <IconButton
          disableRipple={true}
          aria-describedby={profileId}
          onClick={handleProfileClick}
        >
          <ProfileImg src={makeBlockie(playstationLogoUrl)} />
        </IconButton>

        {/* Cart Container */}
        <CartContainer onClick={handleCartClick}>
          <CartIcon />
          {cartSummary?.totalItems > 0 && (
            <ItemCount>{cartSummary?.totalItems}</ItemCount>
          )}
        </CartContainer>

        <Popover
          id={profileId}
          open={openProfile}
          anchorEl={profileAnchorEl}
          onClose={handleProfileClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <PopoverContent>
            <Typography>Profile Content</Typography>
          </PopoverContent>
        </Popover>
        <PageText onClick={() => history.push(AppPages.RootPage)}>
          درباره ما
        </PageText>
        <PageText onClick={() => history.push(AppPages.RootPage)}>
          راهنمای خرید
        </PageText>
        <PageText onClick={() => history.push(AppPages.RootPage)}>
          تخفیف ها و پیشنهادات
        </PageText>
        <PageText onClick={() => history.push(AppPages.RootPage)}>
          اخبار و حواشی
        </PageText>
        <PageText onClick={() => history.push(AppPages.RootPage)}>
          دسته بندی
        </PageText>
        <PageText onClick={() => history.push(AppPages.RootPage)}>
          صفحه اصلی
        </PageText>
      </LeftActions>
      <RightActions>
        <SearchInput
          variant="secondary"
          placeholder="جستجو"
          noValidation={true}
          leftIcon={<SearchIconButton onClick={handleSearch} />}
        />
        <Logo
          onClick={handleLogoClick}
          src={"https://svgshare.com/i/x90.svg"}
        ></Logo>
      </RightActions>
    </HeaderWrapper>
  );
};
