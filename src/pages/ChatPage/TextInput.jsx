import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

// Tạo các thành phần styled
const WrapForm = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "95%",
  margin: `${theme.spacing(0)} auto`,
}));

const WrapText = styled(TextField)({
  width: "100%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

export const TextInput = () => {
  return (
    <WrapForm noValidate autoComplete="off">
      <WrapText
        id="standard-text"
        label="メッセージを入力"
        variant="outlined"
      />
      <StyledButton variant="contained" color="primary">
        <SendIcon />
      </StyledButton>
    </WrapForm>
  );
};
