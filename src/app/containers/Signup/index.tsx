import React from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { signupActions, signupReducer, sliceKey } from "./slice";
import { signupSaga } from "./saga";

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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
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

const HighlightedText = styled.span`
  color: blue;
  cursor: pointer;
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
        <LogoImage src={playstationLogoUrl} alt="PlayStation Logo" />
        <h2 style={{ marginBottom: "20px" }}>Signup</h2>
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
          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <ErrorMessageStyled>
              {formik.errors.confirmPassword}
            </ErrorMessageStyled>
          ) : null}
          <InputField
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMessageStyled>{formik.errors.firstName}</ErrorMessageStyled>
          ) : null}
          <InputField
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMessageStyled>{formik.errors.lastName}</ErrorMessageStyled>
          ) : null}
          <SubmitButton type="submit">Signup</SubmitButton>
        </form>
      </FormContainer>
    </Wrapper>
  );
}
