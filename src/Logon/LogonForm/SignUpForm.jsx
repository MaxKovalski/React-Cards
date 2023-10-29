import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function SignUpForm({
  Typography,
  handleSubmit,
  isBusiness,
  setIsBusiness,
  validationCheck,
  error,
  isFormValid,
  formData,
}) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          marginBottom: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                onChange={validationCheck}
                value={formData.firstName}
                error={Boolean(error.firstName)}
                helperText={error.firstName}
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
                onChange={validationCheck}
                value={formData.middleName}
                error={Boolean(error.middleName)}
                helperText={error.middleName}
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
                onChange={validationCheck}
                value={formData.lastName}
                error={Boolean(error.lastName)}
                helperText={error.lastName}
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
                onChange={validationCheck}
                value={formData.phone}
                error={Boolean(error.phone)}
                helperText={error.phone}
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
                onChange={validationCheck}
                value={formData.country}
                error={Boolean(error.country)}
                helperText={error.country}
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
                onChange={validationCheck}
                value={formData.state}
                error={Boolean(error.state)}
                helperText={error.state}
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
                onChange={validationCheck}
                value={formData.city}
                error={Boolean(error.city)}
                helperText={error.city}
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
                onChange={validationCheck}
                value={formData.street}
                error={Boolean(error.street)}
                helperText={error.street}
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
                onChange={validationCheck}
                value={formData.houseNumber}
                error={Boolean(error.houseNumber)}
                helperText={error.houseNumber}
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
                onChange={validationCheck}
                value={formData.zip}
                error={Boolean(error.zip)}
                helperText={error.zip}
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
                onChange={validationCheck}
                value={formData.email}
                error={Boolean(error.email)}
                helperText={error.email}
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
                onChange={validationCheck}
                value={formData.imgUrl}
                error={Boolean(error.imgUrl)}
                helperText={error.imgUrl}
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
                onChange={validationCheck}
                value={formData.imgAlt}
                error={Boolean(error.imgAlt)}
                helperText={error.imgAlt}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(error.password)}
                helperText={error.password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={validationCheck}
                value={formData.password}
              />
            </Grid>
            <FormControlLabel
              name="business"
              control={<Switch color="primary" />}
              label="Business"
              labelPlacement="start"
              type="boolean"
              checked={isBusiness}
              onChange={() => setIsBusiness(!isBusiness)}
            />
          </Grid>
          <Button
            disabled={!isFormValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
