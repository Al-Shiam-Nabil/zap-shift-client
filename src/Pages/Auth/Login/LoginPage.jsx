import React from "react";
import { useForm } from "react-hook-form";
import useAuthHook from "../../../Hooks/useAuthHook";
import { Link } from "react-router";
import GoogleSignin from "../GoogleSignin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuthHook();
  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-2xl font-semibold text-center mt-5">Log in</h3>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
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
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p className="text-center">Don't have an account? Please <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
      </form>

      <GoogleSignin></GoogleSignin>
    </div>
  );
};

export default LoginPage;
