import { History } from "history";
import React, {
  FC,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import history from "../router/history";
import { AppPages } from "./types";
import { NotFoundPage } from "./containers/NotFound";
import { Home } from "./containers/Home";
import { Header } from "./components/common/header";
import styled from "styled-components";
import { ProductDetail } from "./containers/ProductDetail/Loadable";
import { globalActions } from "store/slice";
import { useDispatch } from "react-redux";
import { Checkout } from "./containers/Checkout/Loadable";
import { Signup } from "./containers/Signup/Loadable";
import { Login } from "./containers/Login/Loadable";
import { Footer } from "./components/common/footer";
import { LocalStorageKeys, storage } from "store/storage";
interface CustomRouterProps {
  history: History;
  children?: ReactElement;
}

const CustomRouter: FC<CustomRouterProps> = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(globalActions.getCart());
  }, []);

  return (
    <AppWrapper>
      <>
        <Header />
        <Placeholder />
      </>
      <CustomRouter history={history}>
        <Routes>
          <Route path={AppPages.RootPage} element={<Home />} />
          <Route path={AppPages.ProductDetail} element={<ProductDetail />} />
          <Route path={AppPages.Login} element={<Login />} />
          <Route path={AppPages.Signup} element={<Signup />} />
          <Route path={AppPages.Checkout} element={<Checkout />} />
          <Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
      <Footer />
    </AppWrapper>
  );
}
const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const Placeholder = styled.div`
  margin-top: 80px;
`;
export default App;
