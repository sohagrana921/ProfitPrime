import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:h-100vh md:mt-14">
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
              <span className="label-text">Full Name</span>
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
          <div className="md:flex">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                {...register("company")}
                placeholder="Company Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:ml-3">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input
                type="text"
                {...register("country")}
                placeholder="Country"
                className="input input-bordered"
              />
            </div>
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
              placeholder="password"
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
              className="btn bg-orange-800 text-white hover:bg-orange-500 border-none w-full"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
