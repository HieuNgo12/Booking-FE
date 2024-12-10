const RankPage = () => {
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Rank</h2>
          <div className="text-[#07689F] text-sm hover:underline cursor-pointer">
            View Details
          </div>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Check your current rank and explore the benefits of being a loyal
          user.
        </p>

        {/* Current Rank */}
        <div className="mb-4">
          <p className="text-sm font-bold text-gray-700">Current Rank</p>
          <p className="text-blue-500 text-lg font-semibold">Gold Member</p>
          <p className="text-gray-600">
            Enjoy exclusive 10% discounts on all bookings!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <p className="text-sm font-bold text-gray-700">
            Progress to Next Rank
          </p>
          <div className="bg-gray-200 rounded-full h-4 w-full">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            70% completed to reach Platinum Rank.
          </p>
        </div>

        {/* Loyalty Points */}
        <div>
          <p className="text-sm font-bold text-gray-700">Loyalty Points</p>
          <p className="text-gray-900">1200 Points</p>
          <p className="text-gray-600">
            Earn 300 more points to unlock the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankPage;
