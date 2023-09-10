import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
// import Switch from "@mui/material/Switch";
import { GeneralContext } from "../App";

// TODO remove, this demo shouldn't need to reset the theme.

export default function Account({ theme }) {
  const { user, setUser, setLoader } = useContext(GeneralContext);
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/clients/update?token=03b55611-4cd4-11ee-8ead-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          middleName: data.get("middleName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
          email: data.get("email"),
          imgUrl: data.get("imgUrl"),
          imgAlt: data.get("imgAlt"),
          state: data.get("state"),
          country: data.get("country"),
          street: data.get("street"),
          city: data.get("city"),
          houseNumber: data.get("houseNumber"),
          zip: data.get("zip"),
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(setLoader(false));
  };
  const handelInput = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Edit Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={user.firstName}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="middleName"
                    required
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    autoFocus
                    value={user.middleName}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={user.lastName}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    value={user.phone}
                    onChange={handelInput}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    name="country"
                    autoComplete="country"
                    value={user.country}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state"
                    value={user.state}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                    value={user.city}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="street"
                    label="Street Address"
                    name="street"
                    autoComplete="street"
                    value={user.street}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="houseNumber"
                    label="House Number"
                    name="houseNumber"
                    autoComplete="houseNumber"
                    type="Number"
                    value={user.houseNumber}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="zip"
                    label="Zip"
                    name="zip"
                    autoComplete="zip"
                    type="Number"
                    value={user.zip}
                    onChange={setUser}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="imgUrl"
                    label="Image Link"
                    name="imgUrl"
                    autoComplete="imgUrl"
                    value={user.imgUrl}
                    onChange={handelInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="imgAlt"
                    label="Image Description"
                    name="imgAlt"
                    autoComplete="imgAlt"
                    value={user.imgAlt}
                    onChange={handelInput}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
