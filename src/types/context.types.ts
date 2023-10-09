export type AuthState = {
  user?: User;
  token?: string;
  loading: boolean;
  errorMessage?: string;
};

export type User = {
  name: string;
  id: number;
};

export type Action = {
  type: string;
  payload?: { user: User; token: string };
  error?: string;
};
