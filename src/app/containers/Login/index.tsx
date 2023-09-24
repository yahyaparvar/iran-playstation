import React, { useEffect } from "react";
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
import { CustomInput } from "app/components/common/inputs/simple";
import { COLUMN_CENTER, ROW_CENTER } from "styles/globalStyles";
import { Email } from "@mui/icons-material"; // Import the EmailIcon
import { Lock } from "@mui/icons-material"; // Import the LockIcon
import PrimaryButton from "app/components/common/buttons/primary";
import { backgroundImageUrl, playstationLogoUrl } from "app/constants";
const gradientColors = {
  start: "#2f5bd3",
  end: "#2a3489",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل نا معتبر").required("ایمیل از واجباته"),
  password: Yup.string().required("رمز عبور از واجباته"),
});

const Wrapper = styled.div`
  ${COLUMN_CENTER}
  min-height: 100vh;
  width: 100%;
  background-color: #00439C !important;
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

const InputField = styled(CustomInput)`
  width: 100%;
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  margin-bottom: 7px;
`;

const RegisterLink = styled.div`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #fff;
`;

const HighlightedText = styled.a`
  cursor: pointer;
  color: #e14a9d;
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
const EmailIcon = styled(Email)`
  color: #fff !important;
`;
const LockIcon = styled(Lock)`
  color: #fff !important;
`;
interface Props {}
export function Login(props: Props) {
  useEffect(() => {
    // Manipulate the input elements here using JavaScript
  }, []);
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
          <Form autoComplete="new-password" onSubmit={formik.handleSubmit}>
            <InputField
              autoComplete="new-password"
              rightIcon={<EmailIcon />}
              type="text"
              name="email"
              touched={formik.touched.email}
              error={formik.errors.email}
              placeholder="ایمیل"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <InputField
              rightIcon={<LockIcon />}
              touched={formik.touched.password}
              error={formik.errors.password}
              autoComplete="new-password"
              type="password"
              name="password"
              placeholder="رمز عبور"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <SubmitButton type="submit">ورود</SubmitButton>
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
