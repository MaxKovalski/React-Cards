import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreateForm from "./CardsForms/CreateForm";
import { useMediaQuery, useTheme } from "@mui/material";
export default function CreateCard({
  handleClose,
  publishCards,
  handleInput,
  addCard,
  open,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        style={{
          width: isSmallScreen ? "90%" : "50%",
          height: isSmallScreen ? "80%" : "auto",
          padding: isSmallScreen ? "20px" : "50px",
          margin: isSmallScreen ? "10px" : "50px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="large">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AddCardIcon />
            </Avatar>
            <CreateForm
              publishCards={publishCards}
              handleInput={handleInput}
              addCard={addCard}
            />
          </Box>
        </Container>
      </Box>
    </Modal>
  );
}
