import { Action, AuthState } from "../types/context.types";
import { verifyAuthToken } from "./actions";

const [token, user] = await verifyAuthToken();

export const initialState: AuthState = {
  user: user,
  token: token,
  loading: false,
};

export const AuthReducer = (initialState: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload?.user,
        token: action.payload?.token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: undefined,
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
