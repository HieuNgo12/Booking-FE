import React, { useEffect } from "react";

const ChatPage = () => {
  useEffect(() => {
    // Thêm SDK của Zalo vào trang
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    // Xóa SDK khi component bị unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="zalo-chat-widget"
        data-oaid="666198103329089920" // Thay YOUR_ZALO_OA_ID bằng ID Zalo OA của bạn
        data-welcome-message="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
        data-autopopup="0"
        data-width="350"
        data-height="420"
      ></div>
    </div>
  );
};

export default ChatPage;
