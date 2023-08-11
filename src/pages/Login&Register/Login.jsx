import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import logo from '../../assets/profit-up.png'

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [showPassowrd, setShowPassword] = useState(false)

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='md:h-100vh mt-32'>
            <div className='md:px-10 lg:w-1/2 md:w-3/4 mx-auto md:border-2 rounded-2xl md:shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <img src={logo} alt="" className='h-24 w-44 rounded-2xl mx-auto bg-green-900' />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-11/12" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='flex items-center justify-between'>
                            <input type={showPassowrd ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="Password" className="input input-bordered w-11/12" />
                            <Link><FaEye className='text-xl -ml-20' onClick={() => setShowPassword(!showPassowrd)}></FaEye></Link>
                        </div>
                    </div>

                    <button className='text-start text-red-800'>Forget Password? Reset</button>

                    <div className="form-control mt-6">
                        <input className="btn w-11/12 bg-green-600 font-bold text-white hover:bg-green-900 border-none" type="submit" value="Login" />
                    </div>
                    <div className='mb-10 mt-2'>
                        <Link to={'/register'}><p className='text-orange-800'>New here?? Create an Account</p></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;