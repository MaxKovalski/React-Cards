import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function CreateForm({
  publishCards,
  handleInput,
  addCard,
  error,
  isFormValid,
  validationCheck,
}) {
  return (
    <Box component="form" onSubmit={publishCards} sx={{ mt: 3 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            autoComplete="title"
            name="title"
            required
            fullWidth
            id="title"
            label="Title"
            autoFocus
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.title}
            error={Boolean(error.title)}
            helperText={error.title}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="subtitle"
            label="Subtitle"
            name="subtitle"
            autoComplete="subtitle"
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.subtitle}
            error={Boolean(error.subtitle)}
            helperText={error.subtitle}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.description}
            error={Boolean(error.description)}
            helperText={error.description}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.phone}
            error={Boolean(error.phone)}
            helperText={error.phone}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.email}
            error={Boolean(error.email)}
            helperText={error.email}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            name="web"
            label="Web"
            id="web"
            autoComplete="web"
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.web}
            error={Boolean(error.web)}
            helperText={error.web}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.imgUrl}
            error={Boolean(error.imgUrl)}
            helperText={error.imgUrl}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.imgAlt}
            error={Boolean(error.imgAlt)}
            helperText={error.imgAlt}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.country}
            error={Boolean(error.country)}
            helperText={error.country}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.city}
            error={Boolean(error.city)}
            helperText={error.city}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.street}
            error={Boolean(error.street)}
            helperText={error.street}
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
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.houseNumber}
            error={Boolean(error.houseNumber)}
            helperText={error.houseNumber}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            name="state"
            label="State"
            id="state"
            autoComplete="state"
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.state}
            error={Boolean(error.state)}
            helperText={error.state}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            type="Number"
            name="zip"
            label="Zip"
            id="zip"
            autoComplete="zip"
            onChange={(event) => {
              handleInput(event);
              validationCheck(event);
            }}
            value={addCard.zip}
            error={Boolean(error.zip)}
            helperText={error.zip}
          />
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={!isFormValid}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create
        </Button>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}
