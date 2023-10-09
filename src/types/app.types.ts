export type RouteData = {
  path: string;
  component: () => JSX.Element;
  isPrivate: boolean;
};

export type LoginForm = { email: string; password: string };
