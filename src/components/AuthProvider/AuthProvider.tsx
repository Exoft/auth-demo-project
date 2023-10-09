import React, { ReactNode } from "react";
import { initialState, AuthReducer } from "../../context/reducer";
import { AuthDispatchContext, AuthStateContext } from "../../context/context";

type AuthProvider = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProvider) => {
  const [user, dispatch] = React.useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
