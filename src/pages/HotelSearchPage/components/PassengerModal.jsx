import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PassengerModal({
  open,
  setOpen,
  handleClose,
  handleOpen,
  ...props
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Passengers
          </Typography>
          <div className="flex">
            <div> + </div>
            <div>Children</div>
            <div> -</div>
          </div>
          <div className="flex">
            <div> + </div>
            <div>Adult</div>
            <div> -</div>
          </div>
          <div className="flex">
            <div> + </div>
            <div>Children</div>
            <div> -</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
