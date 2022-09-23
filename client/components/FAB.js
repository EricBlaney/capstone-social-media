import React, { useState } from "react";
import { Tooltip, Fab, Box, Modal, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PostCreateForm from "./PostCreateForm";

const FAB = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Tooltip
        onClick={(event) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={450}
          height={600}
          borderRadius="8px"
          backgroundColor={"background.default"}
          color={"text.primary"}
          textAlign="center"
        >
          <Typography variant="h5">Create New Post</Typography>
          <Box sx={{ marginTop: 10 }}>
            <PostCreateForm />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default FAB;
