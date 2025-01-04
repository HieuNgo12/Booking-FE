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
import { toast } from "react-toastify";
import { services } from "../../Services/services";
export default function PromocodeModal({
  open,
  setOpen,
  handleClose,
  handleOpen,
  formik,
  ...props
}) {
  const applyPromoCode = async () => {
    const body = {
      code: formik.values.promoCode,
    }
    const data = await services.applyPromoCode(body);
    console.log(data);
    if(data.data.data.code){
      toast.success("Apply Promo Code Successfully for This Booking", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // onClose: () => setModal(false),
      });
    } else {
      toast.error("Code not available", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // onClose: () => setModal(false),
      });
    }
   
    localStorage.setItem(
      "promoCode",
      JSON.stringify({
        promoCode: formik.values.promoCode,
      })
    );
  };
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
          <div className="">
            <div>Promo Code</div>
            <div className="flex">
              <div>
                <input
                  id="promoCode"
                  name="promoCode"
                  type="promoCode"
                  placeholder="EasySetPromo"
                  className="classic-input pl-4"
                  onChange={formik.handleChange}
                  value={formik.values.promoCode}
                  style={
                    formik.errors.promoCode ? { borderColor: "red" } : null
                  }
                />
              </div>
              <button
                className="blue-button"
                onClick={() => {
                  applyPromoCode();
                }}
              >
                Apply Code
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
