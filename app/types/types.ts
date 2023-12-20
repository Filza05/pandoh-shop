export type SignInFormData = {
  email: string;
  username: string;
  password: string;
};

export type HookType<R> = () => R;
