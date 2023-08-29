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
import SimpleInput from "app/components/common/inputs/simple";
import { COLUMN_CENTER, ROW_CENTER } from "styles/globalStyles";

const gradientColors = {
  start: "#2f5bd3",
  end: "#2a3489",
};

const backgroundImageUrl = "https://svgshare.com/i/x3y.svg";
const playstationLogoUrl = "https://svgshare.com/i/x3z.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Wrapper = styled.div`
  ${COLUMN_CENTER}
  min-height: 100vh;
  width: 100%;
  background: url(${backgroundImageUrl}) center/cover no-repeat;
`;

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  ${COLUMN_CENTER}
`;

const LogoImage = styled.img`
  margin-bottom: 20px;
  height: 40px;
  margin-right: 16px;
  margin-bottom: -3px;
`;

const InputField = styled(SimpleInput)`
  width: 100%;
  margin-bottom: 16px;
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
  color: #fff;
`;

const HighlightedText = styled.a`
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 24px;
  ${ROW_CENTER}
  font-weight: 600;
  color: #fff;

  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;
const Form = styled.form`
  width: 100%;
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
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Wrapper>
        <FormContainer>
          <Title>
            <LogoImage src={playstationLogoUrl} alt="PlayStation Logo" />
            ورود
          </Title>
          <Description>
            برای ورود به حساب کاربری خود ایمیل و رمز عبور خود را وارد کنید
          </Description>
          <Form onSubmit={formik.handleSubmit}>
            <InputField
              errormessage="Invalid email"
              touched={formik.touched.email}
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
              errormessage="Invalid password"
              touched={formik.touched.password}
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
          </Form>
          <RegisterLink>
            هنوز کاربر ما نیستید؟{" "}
            <HighlightedText onClick={handleRegisterClick}>
              ثبت نام کنید  
            </HighlightedText>
          </RegisterLink>
        </FormContainer>
      </Wrapper>
    </>
  );
}
