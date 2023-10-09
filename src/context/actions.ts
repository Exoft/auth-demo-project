import { Action, User } from "../types/context.types";

const mockedMarcusData = {
  user: {
    id: Math.floor(Math.random() * 100000),
    name: "Marcus",
  },
  token: (Math.random() + 1).toString(36).substring(1),
};

export const loginUser = async (
  // loginPayload will be sent to the API for the credentials verification
  dispatch: React.Dispatch<Action> /*, loginPayload: { email: string; password: string }*/
) => {
  // Simulate API call
  try {
    //const response = await api.loginUser({email, password});
    dispatch({ type: "REQUEST_LOGIN" });
    dispatch({ type: "LOGIN_SUCCESS", payload: mockedMarcusData });
    localStorage.setItem("auth_token", JSON.stringify(mockedMarcusData.token));
    return mockedMarcusData;
  } catch (error: unknown) {
    //Handle login error case when API call fails:
    dispatch({ type: "LOGIN_ERROR", error: (error as TypeError).message });
  }
};

export const logout = async (dispatch: React.Dispatch<Action>) => {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("auth_token");
};

export const verifyAuthToken = async (
  dispatch?: React.Dispatch<Action>
): Promise<[string | undefined, User | undefined]> => {
  const token = localStorage.getItem("auth_token");

  if (!token) return [undefined, undefined];

  dispatch && dispatch({ type: "LOGIN_SUCCESS", payload: mockedMarcusData });

  return [token, mockedMarcusData.user];
};
