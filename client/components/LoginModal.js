import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Login } from "./AuthForm";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button
        sx={{ backgroundColor: "#3FA796", color: "#F5C7A9" }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          width={400}
          height={500}
          marginRight="auto"
          marginLeft="auto"
          borderRadius="8px"
          backgroundColor="#3FA796"
          color={"text.primary"}
          textAlign="center"
          border="1px solid #3FA796"
        >
          <Typography marginTop={2} color={"#F5C7A9"} variant="h4">
            Login
          </Typography>
          <Box sx={{ marginTop: 5 }}>
            <Login />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default LoginModal;
