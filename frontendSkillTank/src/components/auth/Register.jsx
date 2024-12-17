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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">abilityEx</CardTitle>
        <CardDescription className="text-center">Create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-600">
        Already have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
      </CardFooter>
    </Card>
  </div>
  );
};

export default Register;
