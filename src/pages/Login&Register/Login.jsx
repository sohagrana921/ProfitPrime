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
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      reset();
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="md:h-100vh mt-32">
      <div className="md:px-10 lg:w-1/2 md:w-3/4 mx-auto md:border-2 rounded-2xl md:shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <img
            src={logo}
            alt=""
            className="h-24 w-44 rounded-2xl mx-auto bg-green-900"
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

          <Link to="/resetPassword" className="text-start text-red-600">
            Forget Password? Reset
          </Link>

          <div className="form-control mt-6">
            <input
              className="btn w-11/12 bg-green-700 text-white hover:bg-green-900 uppercase border-none"
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
