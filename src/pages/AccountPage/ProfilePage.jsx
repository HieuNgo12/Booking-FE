import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";

const ProfilePage = ({ dataUser }) => {
  const navigate = useNavigate();
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Basic Information</h2>
          <div
            className="text-[#07689F] text-sm hover:underline cursor-pointer"
            onClick={() => navigate("/account/profile/edit-info")}
          >
            Edit
          </div>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Make Sure This Information Matches Your Travel ID, Like Your Passport
          Or License.
        </p>
        <div className="flex w-full gap-6">
          <div className="w-1/4 flex items-center justify-center">
            <Avatar size={150} src={dataUser?.avatar} />
          </div>
          <div className="w-3/4 grid grid-cols-2">
            <div className="mb-3">
              <p className="text-sm font-bold text-gray-700">Full Name</p>
              <p className="text-gray-900">
                {" "}
                {dataUser?.firstName || dataUser?.lastName
                  ? `${dataUser.firstName} ${dataUser.lastName}`
                  : "Not Provided"}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-sm font-bold text-gray-700">Date Of Birth</p>
              <p className="text-gray-900">
                {" "}
                {dataUser?.DOB
                  ? `${dataUser.DOB.slice(0, 10)}`
                  : "Not Provided"}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-sm font-bold text-gray-700">Gender</p>
              <p className="text-gray-900">
                {" "}
                {dataUser
                  ? dataUser?.gender
                    ? "MAN"
                    : "WOMAN"
                  : "Not Provided"}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-sm font-bold text-gray-700">Nationality</p>
              <p className="text-gray-900">
                {" "}
                {dataUser?.nationality ? dataUser?.nationality : "Not Provided"}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-sm font-bold text-gray-700">Address</p>
              <p className="text-gray-900">
                {" "}
                {dataUser?.address
                  ? `${dataUser?.address.street} street,  ${dataUser?.address.ward} Ward, ${dataUser?.address.district} District, ${dataUser?.address.city} City, ${dataUser?.address.country}`
                  : "Not Provided"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div
            className="text-[#07689F] text-sm hover:underline cursor-pointer"
            onClick={() => navigate("/account/authentication")}
          >
            Edit
          </div>
        </div>
        <p className="text-gray-600 mb-4 font-[Subtitle]">
          Receive Account Activity Alerts And Trip Updates By Sharing This
          Information.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm font-bold text-gray-700">Email</p>
            <p className="text-gray-900">
              {" "}
              {dataUser?.email ? dataUser?.email : "Not Provided"}
            </p>
            {dataUser?.verificationStatus.emailVerified ? (
              <p className="text-green-500 font-[Subtitle]">
                {" "}
                * Email is verified!
              </p>
            ) : (
              <p className="text-red-500 font-[Subtitle]">
                Email is not verified!
              </p>
            )}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Mobile Number</p>
            <p className="text-gray-900">
              {" "}
              {dataUser?.phone ? `+${dataUser?.phone}` : "Not Provided"}
            </p>
            {dataUser?.verificationStatus.phoneVerified ? (
              <p className="text-green-500 font-[Subtitle]">
                {" "}
                * Phone is verified!
              </p>
            ) : (
              <p className="text-red-500 font-[Subtitle]">
                * Phone is not verified!
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700">ID Card</p>
            <p className="text-gray-900">
              {" "}
              {dataUser?.idCard ? dataUser?.idCard?.number : "Not Provided"}
            </p>
            {dataUser?.verificationStatus.idCardVerified ? (
              <p className="text-green-500 font-[Subtitle]">
                {" "}
                * ID card is verified!
              </p>
            ) : (
              <p className="text-red-500 font-[Subtitle]">
                * ID card is not verified!
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Rank</h2>
          <div
            className="text-[#07689F] text-sm hover:underline cursor-pointer"
            onClick={() => navigate("/account/profile/view-rank")}
          >
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
      </div>
    </div>
  );
};

export default ProfilePage;
