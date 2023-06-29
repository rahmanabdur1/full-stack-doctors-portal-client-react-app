import React from 'react';
import { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useHooks';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signupError, setsignupError] = useState('');
    const [createUserEmail, setCreateUserEmail,] = useState('');
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate()

    if (token) {
        navigate('/')
    }
    
    const handleSignUp = (data) => {
        setsignupError('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User Created Succesfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setsignupError(error.message)
            })
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)

            })
    }



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
                <h2 className='text-center text-3xl'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs pb-4">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Type name here"
                            className={`input input-bordered w-full max-w-xs ${errors.name ? "input-error" : ""
                                }`}
                        />
                        {errors.name && (
                            <span className="text-red-500">Name is required</span>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs pb-4">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true, validate: validateEmail })}
                            placeholder="Type here"
                            className={`input input-bordered w-full max-w-xs ${errors.email ? "input-error" : ""
                                }`}
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
                            className={`input input-bordered w-full max-w-xs ${errors.password ? "input-error" : ""
                                }`}
                        />
                        {errors.password && (
                            <span className="text-red-500">{errors.password.message}</span>
                        )}
                    </div>

                    <input
                        type="submit"
                        value='Signup'
                        className="input input-bordered w-full btn btn-accent"
                    />
                    <div>
                        {signupError && <p className='text-red-600'>{signupError}</p>}
                    </div>
                </form>
                <p className='pt-2'>
                    Already have an account?
                    <Link className="text-secondary" to="/login">
                        Please login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
