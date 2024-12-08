import momoLogo from "./img/logo-momo.svg.svg";
import zaloLogo from "./img/zalo-pay-logo-inkythuatso.svg";
import vnpayLogo from "./img/vnpay-logo-inkythuatso.svg";
import techcomLogo from "./img/logo-techcombank-inkythuatso.svg";
import tpLogo from "./img/logo-tpbank-inkythuatso.svg";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Avatar,
  Typography,
} from "antd";

const PaymentInfoPage = () => {
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Payment</h2>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Securely Add Or Remove Payment Methods To Make It Easier When You
          Book.
        </p>
        <div className="mb-5">
          <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
          <div className="flex space-x-4 mb-6">
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Vietcombank_logo_fixed.svg"
                alt="Vietcombank"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src={techcomLogo}
                alt="Techcombank"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src={tpLogo}
                alt="TP"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="w-16 h-5 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="MasterCard"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
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
          <Button type="primary" className=" bg-[#07689F] w-[100%]">
            Submit
          </Button>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Online Wallet</h3>
          <div className="flex space-x-4 mb-6">
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src={vnpayLogo}
                alt="VNPay"
                className="w-16 h-15 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src={momoLogo}
                alt="Momo"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
            <div className="w-20 h-10 rounded cursor-pointer bg-[#D9D9D9] flex justify-center items-center">
              <img
                src={zaloLogo}
                alt="Zalo"
                className="w-16 h-8 rounded cursor-pointer"
              />
            </div>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Name on the card"
              />
            </div>
          </form>
          <Button type="primary" className=" bg-[#07689F] w-[100%]">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPage;
