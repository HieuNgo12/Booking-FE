import React from "react";
import Img1 from "./img/Around.png";
import Img2 from "./img/Cirkel.png";
import Img3 from "./img/Travel.png";
import Img4 from "./img/Wave.png";
import Img5 from "./img/Wave2.png";

const AboutUsBodyPage = () => {
  return (
    <div className="mt-5">
      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#07689F] mb-4">
          Welcome To EasySet24!
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          We Are A Dynamic Team Of Travel Professionals Dedicated To Simplifying
          Your Travel Experience By Curating Flight And Accommodation Services
          On A User-Friendly Platform. Committed To Quality And Assurance,
          EasySet24 Strives To Transform Your Journey Into A Fearless And
          Enjoyable Adventure. We Appreciate Your Trust In Us, And Since The
          Year 2023, We've Been Committed To Serving Your Travel Needs. Feel
          Free To Reach Out With Any Questions Or Requirements – We’re Here For
          You.
        </p>
      </div>

      {/* Founder Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          EasySet24 Founded By
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Founder Card */}
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">
              CEO: Jessica Miller
            </h3>
            <p className="text-gray-600">
              Jessica is known for unwavering integrity and transparent
              leadership. Over 15 years in executive roles.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">
              COO: Emily Davis
            </h3>
            <p className="text-gray-600">
              Emily is recognized for ethical business operations. Over 10 years
              of optimizing operational processes.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">
              CMO: John Smith
            </h3>
            <p className="text-gray-600">
              John values honesty in advertising and respects customer privacy.
              Proven track record in ethical marketing strategies.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">
              CFO: Olivia Wilson
            </h3>
            <p className="text-gray-600">
              Olivia is committed to financial transparency and compliance. Over
              a decade of financial leadership.
            </p>
          </div>
        </div>
      </div>

      {/* Vision, Goal, Mission Section */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#07689F] mb-4">Vision</h3>
          <p className="text-gray-600">
            Our Vision Is To Be A Leading And Trusted Name In The Travel
            Industry, Recognized For Our Commitment To Simplifying Travel And
            Enhancing The Overall Experience For Our Customers. Since 2023, And
            Into The Future, We Envision EasySet24 As The Preferred Choice For
            Travellers.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#07689F] mb-4">Our Goal</h3>
          <p className="text-gray-600">
            To Streamline And Simplify The Travel Experience For Our Customers
            By Providing Convenient Access To Curated Flight And Accommodation
            Services Through An Easy-To-Use Platform. Our Goal Is To Make Travel
            Hassle-Free And Enjoyable, Ensuring That Our Customers Can Embark On
            Their Journeys With Confidence And Ease.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#07689F] mb-4">Mission</h3>
          <p className="text-gray-600">
            EasySet24 Is On A Mission To Be The Go-To Platform For Travelers
            Seeking Quality And Assurance In Their Travel Arrangements. We Are
            Dedicated To Offering User-Friendly Services That Transform Each
            Journey Into A Fearless And Enjoyable Adventure. Our Mission Is To
            Provide Reliable And Convenient Travel Solutions While Building And
            Maintaining The Trust Of Our Customers.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#07689F] mb-4">
            What Made Us Successful?
          </h3>
          <p className="text-gray-600">
            Join Us And Be Part Of Our Dynamic Team, Where Your Skills And
            Talents Can Thrive! Read Our Employee Stories...
          </p>
          <p className="text-2xl font-bold text-gray-800 my-4">
            254+ Vacant Careers
          </p>
          <button className="px-4 py-2 bg-[#07689F] text-white rounded hover:bg-[#055A87]">
            Find More
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">We Work With</h2>
        <div className="flex justify-around items-center">
          <img src={Img1} alt="Partner 1" className="w-16 h-16" />
          <img src={Img2} alt="Partner 2" className="w-16 h-16" />
          <img src={Img3} alt="Partner 3" className="w-16 h-16" />
          <img src={Img4} alt="Partner 4" className="w-16 h-16" />
          <img src={Img5} alt="Partner 4" className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBodyPage;
