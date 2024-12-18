import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
          className="border p-2 mb-3 w-full"
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <input
          {...register('password', { required: 'Password is required' })}
          placeholder="Password"
          type="password"
          className="border p-2 mb-3 w-full"
        />
        <p className="text-red-500">{errors.password?.message}</p>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
