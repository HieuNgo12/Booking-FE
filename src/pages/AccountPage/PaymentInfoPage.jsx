const PaymentInfoPage = () => {
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Payment</h2>
          <a href="#" className="text-[#07689F] text-sm hover:underline">
            Edit
          </a>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Securely Add Or Remove Payment Methods To Make It Easier When You
          Book.
        </p>
        <div>
          <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
          <div className="flex space-x-4 mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-16 h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="w-16 h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="w-16 h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="w-16 h-10"
            />
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Name On The Card <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Name on the card"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Card number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Exp Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="MM/YY"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPage;
