import { SignInFormData } from "../types/types";
import useSignIn from "../hooks/useSignIn";

const formData: SignInFormData = {
  username: "",
  password: "",
  email: "",
};

export default function page() {
  const { handleSignInFormSubmit } = useSignIn();

  return (
    <section className="h-screen">
      <div className="flex flex-row w-full h-screen items-center justify-center">
        <img
          className="object-contain w-1/3"
          src="/images/sign-in.jpg"
          alt=""
        />
        <div className="w-full max-w-xs">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSignInFormSubmit(formData);
            }}
            className="bg-white shadow-lg shadow-slate-400 rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-700 text-xs italic hidden">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
              <a
                className="inline-block font-bold text-lg text-blue-500 hover:text-blue-800"
                href="/sign-up"
              >
                Sign up
              </a>
            </div>
            <div className="flex flex-col items-center">
              {/* Add the GoogleLogin component */}
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Pandoh Corp. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
