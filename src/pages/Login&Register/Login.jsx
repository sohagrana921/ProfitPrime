import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import logo from "../../assets/profit-up.png";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassowrd, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    if ((data.email, data.password)) {
      signIn(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          reset();
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "You have successfully Login.",
            confirmButtonText: "OK",
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire({
            icon: "error",
            text: "Please valid email and password",
            confirmButtonText: "OK",
          });
        });
    }
  };

  return (
    <div className="md:h-100vh my-32">
      <div className="md:px-10 md:py-10 lg:w-1/2 md:w-3/4 mx-auto md:border-2 rounded-2xl md:shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <img
            src={logo}
            alt=""
            className="h-24 w-44 rounded-2xl mx-auto bg-purple-950"
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered w-11/12"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                type={showPassowrd ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Password"
                className="input input-bordered w-11/12"
              />
              <Link>
                <FaEye
                  className="text-xl -ml-20"
                  onClick={() => setShowPassword(!showPassowrd)}
                ></FaEye>
              </Link>
            </div>
          </div>

          <Link to="/resetPassword" className="text-start text-red-800">
            Forget Password? Reset
          </Link>

          <div className="form-control mt-6">
            <input
              className="btn w-11/12 bg-red-800 text-white hover:bg-purple-950 uppercase border-none"
              type="submit"
              value="Login"
            />
          </div>
          <div className="">
            <small>
              New to ProfitPrime ?
              <Link to="/register">
                <span className="text-blue-600"> Create an account</span>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;