import React from "react";
import { Action, AuthState } from "../types/context.types";

export const AuthStateContext = React.createContext<AuthState>({ loading: false });
export const AuthDispatchContext = React.createContext<React.Dispatch<Action>>(() => null);

export const useAuthState = (): AuthState => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
};

export const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
};
