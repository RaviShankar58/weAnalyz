import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center">
      <div className="bg-[#a4e9df] py-12 px-10 rounded-md w-full max-w-lg shadow-2xl">
        <p className="text-center text-gray-700 mb-6 text-[16px] font-bold">
          Don’t worry. Enter your email below and we will send you a link to change password.
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md text-[16px] font-bold" // ← You can adjust font-size/boldness here
        />

        <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold w-1/2 block mx-auto mb-3">
          Submit
        </button>

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md font-semibold block w-1/2 mx-auto"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
