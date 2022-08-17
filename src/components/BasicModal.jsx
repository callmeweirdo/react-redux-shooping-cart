import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../redux/features/modalSlice";
import { clearCart } from "../redux/features/cartSlice";

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

const BasicModal = () => {
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(openModal())}>Open modal</Button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Romove all items from you shooping cart ?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 2 }}>
            <Button
              variant="outlined"
              color="success"
              size="medium"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="medium"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
