/* --- STATE --- */
export interface LoginState {
  loginLoading: boolean;
  loginFailedMessage: string;
}

export type ContainerState = LoginState;
