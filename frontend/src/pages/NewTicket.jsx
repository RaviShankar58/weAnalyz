const NewTicket = () => {
  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-md shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Create New Ticket</h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Ticket No.</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Category:</label>
                <select className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white">
                  <option value="">Select</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Type:</label>
                <select className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white">
                  <option value="">Select</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Date:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Department:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Subject:</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Priority:</label>
                <select className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white">
                  <option value="">Select</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Description:</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 h-24"></textarea>
          </div>

          {/* Checkboxes */}
          {/* <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="robot" className="h-4 w-4 text-[#55D6C2] rounded-none border-gray-300 focus:ring-[#55D6C2]" />
              <label htmlFor="robot" className="ml-2 text-sm text-gray-600">I'm not a robot</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="captcha" className="h-4 w-4 text-[#55D6C2] rounded-none border-gray-300 focus:ring-[#55D6C2]" />
              <label htmlFor="captcha" className="ml-2 text-sm text-gray-600">reCAPTCHA Privacy - Terms</label>
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button className="bg-[#55D6C2] text-white px-6 py-2 rounded-none hover:bg-teal-600 transition-colors text-sm font-medium">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;