/* --- STATE --- */
export interface SignupState {
  loading: boolean;
  errorMessage: any;
}
export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
export type ContainerState = SignupState;
