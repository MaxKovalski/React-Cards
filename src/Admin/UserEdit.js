import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function UserEdit({ userParams, userEdit, edited }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = React.useState(userParams);

  React.useEffect(() => {
    if (userEdit) {
      setFormData(userEdit);
    } else {
      setFormData();
    }
  }, [userEdit]);
  const inputChange = (ev) => {
    const { name, value } = ev.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setFormData(userParams);
    console.log(userParams.id);
    setOpen(true);
  };
  const save = (ev) => {
    ev.preventDefault();
    fetch(
      `https://api.shipap.co.il/admin/clients/${userParams.id}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        console.log(formData);
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
      <Box display="flex" alignItems="center">
        <ManageAccountsIcon onClick={handleOpen} />
      </Box>

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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={save}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    autoComplete="firstName"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="firstName"
                    autoFocus
                    value={formData?.firstName}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="middleName"
                    label="middleName"
                    name="middleName"
                    autoComplete="middleName"
                    value={formData?.middleName}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="lastName"
                    name="lastName"
                    autoComplete="lastName"
                    value={formData?.lastName}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="fullName"
                    label="fullName"
                    id="fullName"
                    autoComplete="fullName"
                    value={formData?.fullName}
                    onChange={inputChange}
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
                    value={formData?.email}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="phone"
                    id="phone"
                    autoComplete="web"
                    value={formData?.web}
                    onChange={inputChange}
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
                    value={formData?.imgUrl}
                    onChange={inputChange}
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
                    value={formData?.imgAlt}
                    onChange={inputChange}
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
                    value={formData?.country}
                    onChange={inputChange}
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
                    value={formData?.city}
                    onChange={inputChange}
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
                    value={formData?.street}
                    onChange={inputChange}
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
                    value={formData?.houseNumber}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="state"
                    label="State"
                    id="state"
                    autoComplete="state"
                    value={formData?.state}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="String"
                    name="zip"
                    label="Zip"
                    id="zip"
                    autoComplete="zip"
                    value={formData?.zip}
                    onChange={inputChange}
                  />
                </Grid>
                <FormControlLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                  name="business"
                  control={<Switch color="primary" />}
                  label="Business"
                  labelPlacement="start"
                  type="boolean"
                  // checked={isBusiness}
                  // onChange={() => setIsBusiness(!isBusiness)}
                />
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
