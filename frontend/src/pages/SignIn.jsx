import { useState } from 'react';                                   
import { useNavigate, Link } from 'react-router-dom';                

const SignIn = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });  
  const navigate = useNavigate();                                             

  const handleChange = e => {
    setCredentials({ 
      ...credentials, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { username, password } = credentials;
    if (username === 'ravi' && password === '1111') {
      return navigate('/dashboard');
    }
    // here i can add for more navigation testing like dashboard and all

    alert('Invalid test credentials');
  };

  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center">
      <form 
        onSubmit={handleSubmit}                                           
        className="bg-[#a4e9df] py-12 px-10 rounded-md w-full max-w-lg shadow-2xl"
      >
        <h2 className="text-2xl font-bold italic text-center text-gray-800 mb-4">
          Helpdesk System
        </h2>

        <input
          type="text"
          name="username"                                                    
          placeholder="Username"
          value={credentials.username}                                    
          onChange={handleChange}                                            
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
        />

        <input
          type="password"
          name="password"                                                   
          placeholder="Password"
          value={credentials.password}                                       
          onChange={handleChange}                                            
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
        />

        <button
          type="submit"                                                    
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-md font-semibold"
        >
          Sign In
        </button>

        <div className="flex justify-between text-sm mt-4">
          <Link to="/forgot-password" className="text-red-500">
            Forgot password
          </Link>
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
