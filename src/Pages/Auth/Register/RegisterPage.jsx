import React from "react";
import { useForm } from "react-hook-form";
import useAuthHook from "../../../Hooks/useAuthHook";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleSignin from "../GoogleSignin";
import axios from "axios";

const RegisterPage = () => {
  const { registerUser, updateProfileUser } = useAuthHook();
  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data.photo[0]);
    const imageFile = data.photo[0];

    // store photo in form data

    //     if(imageFile){
    //  const formData = new FormData();
    //     formData.append("image", imageFile,"nabil");
    //     console.log(formData)
    //     }

    // const formData=new FormData()
    // formData.append('image',imageFile)
    // for (let [a,b] of formData.entries()) {
    //   console.log(a, b);
    // }

    //  console.log(formData)

    // console.log(formData);

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        const formData = new FormData();
        formData.append("image", imageFile);

        const host_uri = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOST_KEY
        }`;

        axios.post(host_uri, formData).then((res) => {
          console.log(res.data.data.url);

          const updatedInfo = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateProfileUser(updatedInfo)
            .then(() => {
              console.log("profile updated");
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-2xl font-semibold text-center mt-5">Register</h3>

      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.type?.name === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          {/* photo */}

          <label className="label">Photo</label>
          <input
            type="file"
            accept="image/*"
            className="file-input"
            {...register("photo", { required: true })}
            placeholder="Photo"
          />
          {errors.type?.name === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}

          {/* email */}
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

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
            })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be atleast 6 character long.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain uppercase, lowercase, number, special
              character, and be at least 6 characters long.
            </p>
          )}

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p className="text-center">
          Already have an account? Please{" "}
          <Link
            state={location?.state}
            to="/login"
            className="text-blue-500 hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
      <GoogleSignin></GoogleSignin>
    </div>
  );
};

export default RegisterPage;
