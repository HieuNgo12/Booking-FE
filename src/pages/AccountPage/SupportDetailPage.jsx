import React, { useEffect, useState } from "react";
import { List, Tabs, Card, Image, Button } from "antd"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { apiGetAll, apiPost } from "../../API/APIService";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SupportDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const supportId = searchParams.get("supportId");
  console.log(supportId);
  const [dataSupport, setdDataSupport] = useState([]);

  const { infor } = useSelector((state) => state.inforUser);

  const callApi = async () => {
    try {
      const response = await apiGetAll(`support-by-supportId/${supportId}`);
      setdDataSupport(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataSupport);

  useEffect(() => {
    callApi();
  }, []);

  return dataSupport ? (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      {/* Tiêu đề */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Support Details</h2>
        <Button
          type="default"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back
        </Button>
      </div>
      <p className="text-gray-600 mb-4 font-[Subtitle]">
        Have questions or feedback for us? We're listening.
      </p>

      {/* Nội dung chi tiết */}
      <Card className="rounded-lg shadow-md p-4">
        {/* Nội dung hỗ trợ */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Message:</h4>
          <p className="text-gray-600">{dataSupport.message}</p>
        </div>

        {/* Hình ảnh hỗ trợ */}
        {dataSupport.listImg && dataSupport.listImg.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Images:</h4>
            <div className="flex gap-2">
              {dataSupport.listImg.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Support image ${index + 1}`}
                  width={100}
                  className="rounded shadow-sm"
                />
              ))}
            </div>
          </div>
        )}

        {/* Phản hồi từ admin */}
        {dataSupport.reply && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Admin Reply:</h4>
            <p className="text-gray-600">
              {dataSupport.reply.messageReply || "No reply yet"}
            </p>
            <p className="text-sm text-gray-500">
              Replied on:{" "}
              {new Date(dataSupport.reply.timeReply).toLocaleString()}
            </p>
          </div>
        )}

        {/* Trạng thái */}
        <div className="flex justify-between items-center mt-4">
          <span
            className={`text-sm font-bold ${
              dataSupport.status === "open" ? "text-green-600" : "text-gray-500"
            }`}
          >
            Status: {dataSupport.statusReply ? "Resolved" : "Pending"}
          </span>
          <span className="text-sm text-gray-500">
            Last updated: {new Date(dataSupport.updatedAt).toLocaleString()}
          </span>
        </div>
      </Card>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SupportDetailPage;
