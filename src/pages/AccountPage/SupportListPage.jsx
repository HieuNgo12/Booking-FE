import React, { useEffect, useState } from "react";
import { List, Button } from "antd"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { apiGetAll, apiPost } from "../../API/APIService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SupportListPage = () => {
  const [dataSupport, setdDataSupport] = useState([]);
  const navigate = useNavigate();
  const { infor } = useSelector((state) => state.inforUser);

  const callApi = async () => {
    try {
      const response = await apiGetAll(`support-by-userId/${infor?.id}`);
      setdDataSupport(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return dataSupport ? (
    <div className="p-6 w-2/3 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <h2 className="text-2xl font-bold mb-4"> Support List</h2>
          <Button
            type="primary"
            onClick={() => navigate("sent-email-to-easyset")}
            style={{ marginBottom: "20px", backgroundColor: "#07689F" }}
          >
            Email
          </Button>
        </div>
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
      <List
        itemLayout="horizontal"
        dataSource={dataSupport}
        pagination={{
          pageSize: 5,
        }}
        // style={{zIndex : 10}}
        renderItem={(item) => (
          <List.Item
            className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`support-detail?supportId=${item._id}`)}
          >
            <div className="flex items-center gap-4 m-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.message}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.createdAt.slice(0, 10)}
                </p>
                <p className="text-sm text-green-600">{item.status}</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-4 mr-3 font-bold">
              {item.statusReply ? "Resolved" : "Pending"}
            </div>
          </List.Item>
        )}
      />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default SupportListPage;
