import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function CreateForm({ publishCards, handleInput, addCard }) {
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
  );
}
