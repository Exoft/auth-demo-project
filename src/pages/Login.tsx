import React from "react";
import { useForm } from "react-hook-form";
import { loginUser, useAuthDispatch, useAuthState } from "../context";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../types/app.types";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const navigate = useNavigate();
  const userDetails = useAuthState();

  React.useEffect(() => {
    if (userDetails.token) {
      navigate("/home");
    }
  }, []);

  const handleLogin = async ({ email, password }: LoginForm) => {
    try {
      const response = await loginUser(dispatch /*, { email, password }*/);
      if (!response?.user) return;
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="/vite.svg"
          className="w-5/6"
          alt="Vite logo"
        />
      </div>

      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="flex -mt-5 mb-2 items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{`${errors.email.message}`}</span>
          )}
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                viewBox="0 0 32 32"
                id="icon"
              >
                <path d="M21,2a8.9977,8.9977,0,0,0-8.6119,11.6118L2,24v6H8L18.3881,19.6118A9,9,0,1,0,21,2Zm0,16a7.0125,7.0125,0,0,1-2.0322-.3022L17.821,17.35l-.8472.8472-3.1811,3.1812L12.4141,20,11,21.4141l1.3787,1.3786-1.5859,1.586L9.4141,23,8,24.4141l1.3787,1.3786L7.1716,28H4V24.8284l9.8023-9.8023.8472-.8474-.3473-1.1467A7,7,0,1,1,21,18Z" />
                <circle cx="22" cy="10" r="2" />
                <rect
                  id="_Transparent_Rectangle_"
                  data-name="&lt;Transparent Rectangle&gt;"
                  className="cls-1"
                  width="32"
                  height="32"
                  style={{ fill: "none" }}
                />
              </svg>
            </div>
            <input
              type="password"
              id="input-group-2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password", { required: "Password is required.", minLength: 6 })}
              placeholder="Password"
            />
          </div>

          {errors.password && errors.password.type === "required" && (
            <span className="flex -mt-5 items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {`${errors.password.message}`}
            </span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="flex -mt-5 items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Password should be at-least 6 characters.
            </span>
          )}
          {errorMessage?.length && (
            <span className="flex -mt-5 items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {errorMessage}
            </span>
          )}
          <button
            type="submit"
            disabled={loading}
            className="inline-block mt-2 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
