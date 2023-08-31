import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import { styled, css } from "styled-components";
import { COLUMN_ALIGN_START__JUSTIFY_CENTER } from "styles/globalStyles";
interface Action {
  component: React.ReactNode;
  onClick?: () => void;
}
export type InputProps = TextFieldProps & {
  toplabel?: string;
  touched: boolean | undefined;
  errormessage: string | undefined;
  className?: string;
  customsize?: "small" | "medium" | "large";
  rightaction?: Action;
  leftaction?: Action;
};
export const Wrapper = styled("div")`
  width: 100%;
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
`;
export const PlaceHolderStyle = {
  input: {
    "&::placeholder": {
      opacity: 1,
      color: "#fff",
    },
  },
};
export const Label = styled(InputLabel)<{ error?: boolean }>`
  color: white;
  align-self: flex-start;
  margin-bottom: 8px;
  ${({ error }) =>
    error &&
    css`
      color: red;
    `}
`;
export const StyledInput = styled(TextField)<
  TextFieldProps & { customsize?: "small" | "medium" | "large" }
>`
  width: 100%;
  height: 56px;
  ${({ customsize }) => {
    switch (customsize) {
      case "large":
        return css`
          input {
            padding: 0 16px;
            height: 56px;
            font-size: 16px;
          }
        `;
      case "medium":
        return css`
          input {
            padding: 0 14px;
            height: 48px;
            font-size: 14px;
          }
        `;
      case "small":
        return css`
          input {
            padding: 0 12px;
            height: 40px;
            font-size: 14px;
          }
        `;
      default:
        break;
    }
  }}
  .MuiOutlinedInput-root {
    textdirection: rtl;
    color: white;
    border-radius: 12px;
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border: 1px solid white;
    }
    &.Mui-error fieldset {
      border-color: red;
    }
  }
  .MuiFormHelperText-root.Mui-error {
    color: red;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  font-weight: 400;
  font-size: 15px;
`;
