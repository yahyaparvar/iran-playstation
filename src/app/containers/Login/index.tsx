import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { loginActions, loginReducer, sliceKey } from "./slice";
import { loginSaga } from "./saga";
import { selectLogin } from "./selectors";
import history from "router/history";
import { AppPages } from "app/types";

const gradientColors = {
  start: "#2f5bd3",
  end: "#2a3489",
};

const backgroundImageUrl =
  "https://t3.ftcdn.net/jpg/02/80/87/60/360_F_280876054_Mz306RfXfAcYtuSntlpDVqo1KF9CosS0.jpg";
const playstationLogoUrl = "https://svgshare.com/i/wxK.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
      to bottom right,
      ${gradientColors.start},
      ${gradientColors.end}
    ),
    url(${backgroundImageUrl}) center/cover no-repeat;
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const LogoImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessageStyled = styled.div`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${gradientColors.start};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RegisterLink = styled.div`
  display: block;
  margin-top: 10px;
  text-decoration: none;
`;

const HighlightedText = styled.a`
  color: blue;
  cursor: pointer;
`;
interface Props {}
export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: loginReducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const handleRegisterClick = () => {
    history.push(AppPages.Signup);
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loginActions.login(values));
    },
  });

  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <FormContainer>
        <LogoImage src={playstationLogoUrl} alt="PlayStation Logo" />
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>
          ) : null}
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
          ) : null}
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
        <RegisterLink>
          Not signed up yet?{" "}
          <HighlightedText onClick={handleRegisterClick}>
            Register now!
          </HighlightedText>
        </RegisterLink>
      </FormContainer>
    </Wrapper>
  );
}
