export type SignInFormData = {
  email: string;
  password: string;
};

export type HookType<R> = () => R;

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
};