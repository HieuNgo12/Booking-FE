import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { ref, push, onValue } from "firebase/database";
import { database } from "../FireBase/fireBase.jsx"; // Import database từ cấu hình Firebase
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./Message.jsx";
import ChatBoxName from "./ChatBoxName.jsx";

const Container = styled("div")({
  // width: "100vw",
  // height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PaperStyled = styled(Paper)({
  width: "80vw",
  height: "80vh",
  maxWidth: "375px",
  maxHeight: "450px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
});

const MessagesBody = styled(Paper)({
  width: "calc( 100% - 20px )",
  margin: 10,
  overflowY: "scroll",
  height: "calc( 100% - 80px )",
});

export default function ChatPageBody({ chatBox, setChatBox }) {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let user = localStorage.getItem("currentUser");
    let parseUser = JSON.parse(user);
    setCurrentUser(parseUser?.name);
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const messagesRef = ref(database, currentUser);
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const loadedMessages = data ? Object.values(data) : [];
        setMessages(loadedMessages);
      });
    }
  }, [currentUser]);

  const handleSendMessage = (message) => {
    const messagesRef = ref(database, currentUser);
    push(messagesRef, {
      text: message.text,
      timestamp: new Date().toISOString(),
      sender: currentUser,
    });
  };

  return !currentUser ? (
    <ChatBoxName
      currentUser={setCurrentUser}
      chatBox={chatBox}
      setChatBox={setChatBox}
    />
  ) : (
    <Container>
      <PaperStyled elevation={2}>
        <MessagesBody>
          {messages.map((msg, index) =>
            msg.sender === currentUser ? (
              <MessageRight
                key={index}
                message={msg.text}
                timestamp={msg?.timestamp.slice(11, 16)}
              />
            ) : (
              <MessageLeft
                key={index}
                message={msg.text}
                sender={msg.sender}
                timestamp={msg?.timestamp.slice(11, 16)}
              />
            )
          )}
        </MessagesBody>
        <TextInput onSendMessage={handleSendMessage} />
      </PaperStyled>
    </Container>
  );
}
