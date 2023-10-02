import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import AddCardIcon from "@mui/icons-material/AddCard";
export default function CreateCard({
  handleClose,
  publishCards,
  handleInput,
  addCard,
  open,
}) {
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
      <Box sx={style}>
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
            <Box
              component="form"
              noValidate
              onSubmit={publishCards}
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
                    onChange={handleInput}
                    value={addCard.title}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="subtitle"
                    label="Subtitle"
                    name="subtitle"
                    autoComplete="subtitle"
                    onChange={handleInput}
                    value={addCard.subtitle}
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
                    onChange={handleInput}
                    value={addCard.description}
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
                    onChange={handleInput}
                    value={addCard.phone}
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
                    onChange={handleInput}
                    value={addCard.email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="web"
                    label="Web"
                    id="web"
                    autoComplete="web"
                    onChange={handleInput}
                    value={addCard.web}
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
                    onChange={handleInput}
                    value={addCard.imgUrl}
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
                    onChange={handleInput}
                    value={addCard.imgAlt}
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
                    onChange={handleInput}
                    value={addCard.country}
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
                    onChange={handleInput}
                    value={addCard.city}
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
                    onChange={handleInput}
                    value={addCard.street}
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
                    onChange={handleInput}
                    value={addCard.houseNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="state"
                    label="State"
                    id="state"
                    autoComplete="state"
                    onChange={handleInput}
                    value={addCard.state}
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
                    onChange={handleInput}
                    value={addCard.zip}
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
        </Container>
      </Box>
    </Modal>
  );
}
