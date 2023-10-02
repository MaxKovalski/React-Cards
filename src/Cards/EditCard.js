import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useEffect } from "react";
export default function EditCard({ cardId, cards, setCards }) {
  const [open, setOpen] = React.useState(false);
  const [editedCard, setEditedCard] = React.useState([]);

  const handleOpen = () => {
    const cardToEdit = cards.find((card) => card.id === cardId);
    if (cardToEdit) {
      setEditedCard(cardToEdit);
      console.log(editedCard);
      console.log(cardToEdit);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setEditedCard((prevEditedCard) => ({
      ...prevEditedCard,
      [name]: value,
    }));
    console.log(editedCard);
  };
  const editPublish = (ev) => {
    ev.preventDefault();
    fetch(
      `https://api.shipap.co.il/business/cards/:${cardId}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editedCard),
      }
    ).then((data) => {
      console.log(data);
      console.log(editedCard);
    });
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
            <Box
              component="form"
              noValidate
              onSubmit={editPublish}
              sx={{ mt: 3 }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    autoComplete="title"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    autoFocus
                    value={editedCard?.title}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="subtitle"
                    label="Subtitle"
                    name="subtitle"
                    autoComplete="subtitle"
                    value={editedCard?.subtitle}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    value={editedCard?.description}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Phone"
                    id="phone"
                    autoComplete="phone"
                    value={editedCard?.phone}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email Address"
                    id="email"
                    autoComplete="email"
                    value={editedCard?.email}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="web"
                    label="Web"
                    id="web"
                    autoComplete="web"
                    value={editedCard?.web}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="imgUrl"
                    label="Image Url"
                    id="imgUrl"
                    autoComplete="imgUrl"
                    value={editedCard?.imgUrl}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="imgAlt"
                    label="Image Description"
                    id="imgAlt"
                    autoComplete="imgAlt"
                    value={editedCard?.imgAlt}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="country"
                    label="Country"
                    id="country"
                    autoComplete="country"
                    value={editedCard?.country}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="City"
                    id="city"
                    autoComplete="city"
                    value={editedCard?.city}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="street"
                    label="Street"
                    id="street"
                    autoComplete="street"
                    value={editedCard?.street}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="houseNumber"
                    label="House Number"
                    type="Number"
                    id="houseNumber"
                    autoComplete="houseNumber"
                    value={editedCard?.houseNumber}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="state"
                    label="State"
                    id="state"
                    autoComplete="state"
                    value={editedCard?.state}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="Number"
                    name="zip"
                    label="Zip"
                    id="zip"
                    autoComplete="zip"
                    value={editedCard?.zip}
                    onChange={handleInput}
                  />
                </Grid>
              </Grid>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Create
                </Button>
              </div>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
