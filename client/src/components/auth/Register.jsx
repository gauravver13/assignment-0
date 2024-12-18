import React, { useState } from "react";
import { registerUser } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button"
// import { Input } from '@mui/base/Input';



const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast.success("Registration successful!");
      navigate("/login")
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };


//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/register", {
//         name,
//         email,
//         password,
//       });

//       alert("Registration Successful!");
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="name" placeholder="Name" onChange={handleChange} />
    //     <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    //     <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    //     <button type="submit">Register</button>
    //     {/* <Button variant="outline" type="submit">Register</Button> */}

    //   </form>
    // </div>


    // HERE"S TO FIX
  //   <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  //   <Card className="w-full max-w-md">
  //     <CardHeader className="space-y-1">
  //       <CardTitle className="text-2xl font-bold text-center">abilityEx</CardTitle>
  //       <CardDescription className="text-center">Create your account</CardDescription>
  //     </CardHeader>
  //     <CardContent>
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //         <div>
  //           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
  //             Name
  //           </label>
  //           <Input
  //             id="name"
  //             name="name"
  //             type="text"
  //             required
  //             className="mt-1"
  //             placeholder="John Doe"
  //             value={formData.name}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
  //             Email
  //           </label>
  //           <Input
  //             id="email"
  //             name="email"
  //             type="email"
  //             required
  //             className="mt-1"
  //             placeholder="you@example.com"
  //             value={formData.email}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
  //             Password
  //           </label>
  //           <Input
  //             id="password"
  //             name="password"
  //             type="password"
  //             required
  //             className="mt-1"
  //             placeholder="••••••••"
  //             value={formData.password}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <Button type="submit" className="w-full">
  //           Register
  //         </Button>
  //       </form>
  //     </CardContent>
  //     <CardFooter className="text-center text-sm text-gray-600">
  //       Already have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
  //     </CardFooter>
  //   </Card>
  // </div>

// change is here::::::::::




<div className="min-h-screen flex flex-col bg-gray-100">
{/* Header */}
<header className="bg-blue-600 text-white py-4 text-center">
  <h1 className="text-3xl font-bold">AbilityEx</h1>
</header>

{/* Main Content */}
<main className="flex justify-center items-center flex-grow">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

    {/* Register Form */}
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <a href="/login" className="text-blue-600 hover:underline text-sm">Sign In</a>
        </div>
      </div>
    </form>
  </div>
</main>
</div>
  );
};

export default Register;
