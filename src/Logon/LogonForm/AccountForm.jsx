import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function AccountForm({
  handelInput,
  user,
  handleSubmit,
  setUser,
  validationCheck,
  error,
  isFormValid,
}) {
  return (
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
          id="accountForm"
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
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.middleName}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.lastName}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.phone}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.country}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.state}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.city}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.street}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.houseNumber}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.zip}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.email}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.imgUrl}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
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
                value={user.imgAlt}
                onChange={(event) => {
                  validationCheck(event);
                  handelInput(event);
                }}
                error={Boolean(error.imgAlt)}
                helperText={error.imgAlt}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isFormValid}
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
  );
}
