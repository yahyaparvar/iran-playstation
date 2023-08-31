import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { useDispatch } from "react-redux";
import { signupActions, signupReducer, sliceKey } from "./slice";
import { signupSaga } from "./saga";
import { CustomInput } from "app/components/common/inputs/simple";
import { COLUMN_CENTER, ROW_CENTER } from "styles/globalStyles";

const gradientColors = {
  start: "#2f5bd3",
  end: "#2a3489",
};

const backgroundImageUrl = "https://svgshare.com/i/x3y.svg";
const playstationLogoUrl = "https://svgshare.com/i/x3z.svg";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل نا معتبر").required("ایمیل الزامیست"),
  password: Yup.string().required("لطفا رمز عبور را وارد کنید"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور الزامیست"),
  firstName: Yup.string().required("نام شما اجباریست"),
  lastName: Yup.string().required("نام خانوادگی شما اجباریست"),
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

const InputRow = styled.div`
  ${ROW_CENTER}
  width: 100%;
  gap: 10px;
`;

const InputField = styled(CustomInput)`
  width: 100%;
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

export function Signup() {
  useInjectReducer({ key: sliceKey, reducer: signupReducer });
  useInjectSaga({ key: sliceKey, saga: signupSaga });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signupActions.signUp(values));
    },
  });

  return (
    <Wrapper>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Description of Signup" />
      </Helmet>
      <FormContainer>
        <Title>
          <LogoImage src={playstationLogoUrl} alt="PlayStation Logo" />
          ثبت نام
        </Title>
        <Description>
          برای ورود به حساب کاربری خود ایمیل و رمز عبور خود را وارد کنید
        </Description>
        <Form onSubmit={formik.handleSubmit}>
          <InputRow>
            <InputField
              type="text"
              touched={formik.touched.lastName}
              error={formik.errors.lastName}
              name="lastName"
              placeholder="نام خانوادگی"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <InputField
              touched={formik.touched.firstName}
              error={formik.errors.firstName}
              type="text"
              name="firstName"
              placeholder="نام"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </InputRow>

          <InputField
            touched={formik.touched.email}
            error={formik.errors.email}
            type="text"
            name="email"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <InputField
            touched={formik.touched.password}
            error={formik.errors.password}
            type="password"
            name="password"
            placeholder="رمز عبور"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          <InputField
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="تکرار رمز عبور"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />

          <SubmitButton type="submit">ثبت نام</SubmitButton>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}
