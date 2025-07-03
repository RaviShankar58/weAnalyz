const Profile = () => {
  return (
    <div className="min-h-screen bg-[#55D6C2] p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-md p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center">User Profile</h2>
        <div className="flex flex-row justify-between">
          <div className="bg-[#a4e9df] p-6 rounded-md w-[45%] text-center shadow">
            <div className="text-6xl mb-2">👤</div>
            <p>Username: JohnDoe</p>
            <p>Contact: +91-9876543210</p>
            <p>Email: john@example.com</p>
            <p>Department: IT</p>
          </div>

          <div className="bg-[#a4e9df] p-6 rounded-md w-[45%] shadow text-center">
            <p className="mb-2 font-semibold">Give Your Feedback</p>
            <textarea placeholder="Your feedback..." className="w-full h-20 border rounded p-2 mb-2"></textarea>
            <div className="text-lg mb-2">⭐⭐⭐⭐☆</div>
            <button className="bg-teal-500 text-white px-4 py-2 rounded">Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
