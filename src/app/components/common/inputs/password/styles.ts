import {
  Card,
  CardActionArea,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { styled } from "styled-components";
import { COLUMN_CENTER } from "styles/globalStyles";

export const EyeIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const Divider = styled.div`
  width: 1px;
  background: var(--greyscale-100);
  height: 16px;
  margin-right: 11px;
`;
export const InputActionComponent = styled(CardActionArea)`
  color: var(--greyscale-500);
  padding: 4px;
  ${COLUMN_CENTER}
  min-width:30px;
  min-height: 30px;
  border-radius: 100%;
`;
export const Label = styled(InputLabel)`
  color: var(--greyscale-500);
  align-self: flex-start;
  margin-bottom: 8px;
`;
