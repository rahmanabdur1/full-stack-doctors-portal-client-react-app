import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';
import useToken from '../../hooks/useHooks';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLogginError] = useState('');
  const [loginUserEmail, setLoginEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (data) => {
    setLogginError('');
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setLoginEmail(data.email);
      })
      .catch(error => {
        console.log(error.message);
        setLogginError(error.message);
      });
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || "Invalid email address";
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(value) || "Password must contain at least 8 characters including letters and numbers";
  };

  return (
    <div className='h-[600px] flex justify-center items-center'>
      <div className='shadow w-96 p-7'>
        <h2 className='text-center text-3xl'>Login</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control w-full max-w-xs pb-4">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true, validate: validateEmail })}
              placeholder="Type here"
              className={`input input-bordered w-full max-w-xs ${
                errors.email ? "input-error" : ""
              } ${errors.email && "focus:bg-orange-100"}`} // Added focus:bg-orange-100 class
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control w-full max-w-xs pb-4">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true, validate: validatePassword })}
              placeholder="Type here"
              className={`input input-bordered w-full max-w-xs ${
                errors.password ? "input-error" : ""
              } ${errors.password && "focus:bg-orange-100"}`} // Added focus:bg-orange-100 class
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <label className="label">
              <span className="label-text text-1xl">Forget Password ?</span>
            </label>
          </div>

          <input
            type="submit"
            value='Login'
            className="input input-bordered w-full btn btn-accent"
          />
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p className='pt-2 pl-2'>
          New to Doctors Portal
          <Link className="text-secondary " to="/signup">
            Create a new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
