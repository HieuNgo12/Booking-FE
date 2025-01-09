import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./Message.jsx";

const Container = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const PaperStyled = styled(Paper)({
  width: '80vw',
  height: '80vh',
  maxWidth: '500px',
  maxHeight: '700px',
  display: 'flex',07/15
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
});

const MessagesBody = styled(Paper)({
  width: 'calc( 100% - 20px )',
  margin: 10,
  overflowY: 'scroll',
  height: 'calc( 100% - 80px )',
});

export default function ChatPageBody() {
  return (
    <Container>
      <PaperStyled elevation={2}>
        <MessagesBody>
          <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="テスト"
            avatarDisp={false}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={false}
          />
        </MessagesBody>
        <TextInput />
      </PaperStyled>
    </Container>
  );
}
