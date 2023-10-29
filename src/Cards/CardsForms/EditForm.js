import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
export default function EditForm({ save, formData, inputChange }) {
  return (
    <Box component="form" noValidate onSubmit={save} sx={{ mt: 3 }}>
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
            value={formData?.title}
            onChange={inputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="subtitle"
            label="Subtitle"
            name="subtitle"
            autoComplete="subtitle"
            value={formData?.subtitle}
            onChange={inputChange}
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
            value={formData?.description}
            onChange={inputChange}
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
            value={formData?.phone}
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
            name="web"
            label="Web"
            id="web"
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
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Confirm
        </Button>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}
