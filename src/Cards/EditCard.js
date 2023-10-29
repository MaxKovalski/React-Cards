import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useEffect, useState } from "react";
import EditForm from "./CardsForms/EditForm";
export default function EditCard({ CardEdit, edited, cardData }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState();

  useEffect(() => {
    if (CardEdit) {
      setFormData(CardEdit);
    } else {
      setFormData();
    }
  }, [CardEdit]);
  const inputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOpen = () => {
    setFormData(cardData);
    setOpen(true);
    console.log(cardData);
  };
  const handleClose = () => setOpen(false);
  const save = (ev) => {
    ev.preventDefault();
    fetch(
      `https://api.shipap.co.il/business/cards/${cardData.id}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        edited(formData);
      })
      .finally(handleClose());
  };
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
    <div>
      <IconButton
        className="icon-btn"
        aria-label="edit card"
        onClick={handleOpen}
      >
        <CreateIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <EditForm
              save={save}
              formData={formData}
              inputChange={inputChange}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
