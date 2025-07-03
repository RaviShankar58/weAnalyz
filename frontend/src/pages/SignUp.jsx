import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center">
      <div className="bg-[#a4e9df] py-12 px-10 rounded-md w-full max-w-lg shadow-2xl">
        <h2 className="text-3xl font-bold italic text-center text-gray-800 mb-4">Helpdesk System</h2>
        <p className="text-2xl text-center mb-4">Sign up here</p>

        <input type="text" placeholder="Username" className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" />

        <button className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md font-semibold block w-1/2 mx-auto">Sign Up</button>

        <div className="flex justify-between text-sm mt-4">
          <Link to="/forgot-password" className="text-red-500">Forgot password</Link>
          <Link to="/" className="text-blue-700">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;