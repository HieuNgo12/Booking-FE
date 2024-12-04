import { useNavigate } from "react-router-dom";

const ProfilePage = ({ dataUser }) => {
  const navigate = useNavigate();
  console.log(dataUser);
  return (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Basic Information</h2>
          <div
            href="#"
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
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm font-bold text-gray-700">Full Name</p>
            <p className="text-gray-900">
              {" "}
              {dataUser?.firstName || dataUser?.lastName
                ? `${dataUser.firstName} ${dataUser.lastName}`
                : "Not Provided"}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Date Of Birth</p>
            <p className="text-gray-900">
              {" "}
              {dataUser?.DOB ? `${dataUser.DOB.slice(0, 10)}` : "Not Provided"}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Gender</p>
            <p className="text-gray-900">
              {" "}
              {dataUser ? (dataUser?.gender ? "MAN" : "WOMAN") : "Not Provided"}
            </p>
          </div>
          <div>
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

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div
            className="text-[#07689F] text-sm hover:underline cursor-pointer"
            onClick={() => navigate("/account/profile/edit-contact")}
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
              <p className="text-green-500 font-[Subtitle]"> * Email is verified!</p>
            ) : (
              <p>Email is not verified!</p>
            )}
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Mobile Number</p>
            <p className="text-gray-900">
              {" "}
              {dataUser?.phone ? dataUser?.phone : "Not Provided"}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700">ID Card</p>
            <p className="text-gray-900">Not Provided</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
