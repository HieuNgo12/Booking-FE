import React, { useEffect, useState } from "react";
import { Modal, Table, Tag, Upload } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { apiGetAll, apiPostFormData } from "../../API/APIService";
import { PlusOutlined } from "@ant-design/icons";

const ReviewModalPage = ({ isOpenModal, selectedData, callApi }) => {
  const [comment, setComment] = useState(selectedData?.reviewId?.comment);
  const [rating, setRating] = useState(
    selectedData?.reviewId?.rating ? selectedData?.reviewId?.rating : "0"
  );
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const handleCancel = () => {
    isOpenModal(false);
  };

  const handleOk = async () => {
    try {
      if (!selectedData?.reviewId) {
        const formData = new FormData();
        console.log(selectedData?._id);
        formData.append("bookingId", selectedData?._id);
        formData.append("userId", selectedData?.userId?._id);
        formData.append("objectId", selectedData?.objectId?._id);
        formData.append("objectType", selectedData?.objectType);
        formData.append("comment", comment);
        formData.append("rating", rating);
        // fileList.forEach((file) => {
        //   formData.append("files", file.originFileObj);
        // });

        const response = await apiPostFormData("create-review", formData);

        toast.success(response.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => callApi() && isOpenModal(false),
        });
      }
    } catch (error) {
      console.error("Error : ", error);
      toast.error("Something went wrong, please try again.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <Modal
      title={<label className="text-xl font-bold text-[#07689F]">Review</label>}
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
      width={500}
      bodyStyle={{ maxHeight: "60vh", overflowY: "auto" }} // Kiểm soát chiều cao và cuộn dọc
      okButtonProps={{ style: { backgroundColor: "#07689F" } }}
    >
      <div className="flex flex-col gap-6">
        {/* Input: Rating */}
        <div>
          <label className="text-lg font-bold text-[#07689F]">Rating:</label>
          <div className="flex items-center justify-center">
            {["1", "2", "3", "4", "5"].map((star) => (
              <span
                key={star}
                className={`text-2xl cursor-pointer ${
                  rating >= star ? "text-yellow-500" : "text-gray-400"
                } ${
                  selectedData?.reviewId ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={() => !selectedData?.reviewId && setRating(star)} // Chặn khi disabled
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Input: Comment */}
        <div>
          <label className="text-lg font-bold text-[#07689F]">Comment:</label>
          <textarea
            className="w-full p-2 border rounded-md "
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={selectedData?.reviewId}
          />
        </div>

        {/* Input: Upload Review Images */}
        <div>
          <label className="text-lg font-bold text-[#07689F]">
            Upload Images:
          </label>

          {/* Picture Field */}

          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={({ fileList: newFileList }) => setFileList(newFileList)}
            beforeUpload={(file) => {
              setFileList([...fileList, file]);
              return false;
            }}
            disabled={selectedData?.reviewId}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>

          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModalPage;
