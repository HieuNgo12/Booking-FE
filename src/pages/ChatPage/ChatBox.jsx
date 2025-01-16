import React, { useEffect, useState } from "react";
import { CommentOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import ChatPageBody from "../ChatPage/ChatPageBody";
import { Button } from "antd";
import "./styles.css";

function ChatBox() {
  const [chatBox, setChatBox] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Hàm xử lý cuộn trang
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return chatBox ? (
    <>
      {isVisible && (
        <div
          className=" bg-[#07689F] text-white p-3 rounded-full cursor-pointer shadow-lg mb-3 fixed bottom-[550px] right-5 z-50"
          onClick={scrollToTop}
        >
          <UpOutlined style={{ fontSize: "24px" }} />
        </div>
      )}

      <div className="fixed bottom-14 right-5 bg-[#07689F]">
        <div className="flex justify-between rounded border-2  items-center">
          <div className=" font-bold text-white w-full h-9 flex justify-center items-center rounded">
            <span>Chat with EasySet 24</span>
          </div>
          <div className="w-10 flex justify-center items-center text-white">
            <DownOutlined
              onClick={() => setChatBox(!chatBox)}
              className="cursor-pointer color-white text-lg"
            />
          </div>
        </div>
        <ChatPageBody setChatBox={setChatBox} chatBox={chatBox} />
      </div>
    </>
  ) : (
    <div className="fixed bottom-14 right-5">
      {isVisible && (
        <div
          className=" bg-[#07689F] text-white p-3 rounded-full cursor-pointer shadow-lg mb-3"
          onClick={scrollToTop}
        >
          <UpOutlined style={{ fontSize: "24px" }} />
        </div>
      )}
      <div className="bg-[#07689F] text-white p-3 rounded-full cursor-pointer shadow-lg">
        <CommentOutlined
          style={{ fontSize: "24px" }}
          onClick={() => setChatBox(!chatBox)}
        />
      </div>
    </div>
  );
}

export default ChatBox;
