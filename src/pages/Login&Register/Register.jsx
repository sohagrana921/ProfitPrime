import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User created successfully.",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/login");
    });
  };

  return (
    <div className="md:h-100vh mt-32">
      <div className="py-10 lg:w-1/2 md:w-3/4 mx-auto md:border-2 rounded-2xl md:shadow-2xl">
        <h1 className="text-2xl font-bold text-center uppercase">
          Register an Account
        </h1>
        <h1 className="text-sm mt-2 text-center">
          Sign up now to start your free trial
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]+$/,
              })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">password must be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                password must have a Capital letter & a Special Charecter
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-green-700 text-white hover:bg-green-900 uppercase border-none w-full"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
        <p className="text-center mb-4">
          <small>
            Already have an account ?
            <Link to="/login">
              <span className="text-blue-600"> Login</span>
            </Link>
          </small>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
