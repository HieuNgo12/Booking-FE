import React from "react";
import {
  PhoneOutlined,
  MessageOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const CustomerServicePage = () => {
  return (
    <div className="w-max-[1224px]">
      {/* Customer Service Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Customer Service</h1>
        <p className="text-gray-600 mb-6">
          How Can We Help? We're Available 24 Hours A Day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold mb-2 flex items-center">
              <span className="material-icons text-[#07689F] mr-2">
                <PhoneOutlined />
              </span>
              Call Us
            </h2>
            <p className="text-gray-600">
              For Anything Urgent, You Can Call Us 24/7 At A Local Or
              International Phone Number.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold mb-2 flex items-center">
              <span className="material-icons text-[#07689F] mr-2">
                <MessageOutlined />
              </span>
              Send Us A Message
            </h2>
            <p className="text-gray-600">
              Contact Our Agents About Your Booking, And We'll Reply As Soon As
              Possible.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold mb-2 flex items-center">
              <span className="material-icons text-[#07689F] mr-2">
                <HomeOutlined />
              </span>
              Contact The Property
            </h2>
            <p className="text-gray-600">
              For Details About Your Stay, They Usually Know Best.
            </p>
          </div>
        </div>
      </div>

      {/* Help Center Section */}
      <div className="mb-10 border p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Our Help Center</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Tailor-made Customer Service</h3>
          <p className="text-gray-600">
            Tell Us What's Happening And We'll Guide You Through What To Do
            Next.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Contact us anytime</h3>
          <p className="text-gray-600">
            Send Us A Message Or Pick Up The Phone – Our Agents Are Always
            Available.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            All the important things in one place
          </h3>
          <p className="text-gray-600">
            Call Or Message The Property, And See All The Essential Information
            About Your Stay.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="border rounded-lg divide-y">
          <details className="p-4">
            <summary className="font-semibold cursor-pointer">
              Can I Cancel My Booking?
            </summary>
            <p className="text-gray-600 mt-2">
              If you have a free cancellation booking, you won’t pay a
              cancellation fee.
            </p>
          </details>
          <details className="p-4">
            <summary className="font-semibold cursor-pointer">
              If I Need To Cancel My Booking, Will I Pay A Fee?
            </summary>
            <p className="text-gray-600 mt-2">
              Any cancellation fees are determined by the property.
            </p>
          </details>
          <details className="p-4">
            <summary className="font-semibold cursor-pointer">
              Who’s Going To Charge My Credit Card And When?
            </summary>
          </details>
          <details className="p-4">
            <summary className="font-semibold cursor-pointer">
              Can I Make Changes To My Booking (I.E. Change Dates)?
            </summary>
          </details>
          <details className="p-4">
            <summary className="font-semibold cursor-pointer">
              I Can’t Find My Confirmation Email. What Should I Do?
            </summary>
            <p className="text-gray-600 mt-2">
              You can request a new confirmation email on our website.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
