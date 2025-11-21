import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import useAuthHook from "../../../Hooks/useAuthHook";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleSignin from "../GoogleSignin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser, forgetPassword } = useAuthHook();
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.querySelector(".input-email").value);
    console.log(emailRef.current.querySelector(".input-email").value);

    forgetPassword(emailRef.current.querySelector(".input-email").value)
      .then(() => console.log("password send to your email."))
      .catch((error) => console.log(error));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-2xl font-semibold text-center mt-5">Log in</h3>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset ref={emailRef} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          <div>
            <button
              type="button"
              onClick={handleForgetPassword}
              className="link link-hover"
            >
              Forgot password?
            </button>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p className="text-center">
          Don't have an account? Please{" "}
          <Link
            state={location?.state}
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>

      <GoogleSignin></GoogleSignin>
    </div>
  );
};

export default LoginPage;
