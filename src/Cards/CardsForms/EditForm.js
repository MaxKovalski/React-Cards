import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const fields = [
  { name: "title", label: "Title", type: "text" },
  { name: "subtitle", label: "Subtitle", type: "text" },
  { name: "description", label: "Description", type: "text" },
  { name: "phone", label: "Phone", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "web", label: "Web", type: "url" },
  { name: "imgUrl", label: "Image Url", type: "url" },
  { name: "imgAlt", label: "Image Description", type: "text" },
  { name: "country", label: "Country", type: "text" },
  { name: "city", label: "City", type: "text" },
  { name: "street", label: "Street", type: "text" },
  { name: "houseNumber", label: "House Number", type: "Number" },
  { name: "state", label: "State", type: "text" },
  { name: "zip", label: "Zip", type: "text" },
];

export default function EditForm({
  save,
  formData,
  validationCheck,
  inputChange,
  error,
  isFormValid,
}) {
  const handleChange = (event, name) => {
    validationCheck(event);
    inputChange(event);
  };

  return (
    <Box component="form" noValidate onSubmit={save} sx={{ mt: 3 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {fields.map((field) => (
          <Grid item xs={6} key={field.name}>
            <TextField
              required
              fullWidth
              name={field.name}
              label={field.label}
              type={field.type}
              id={field.name}
              autoComplete={field.name}
              value={formData?.[field.name]}
              onChange={(event) => handleChange(event, field.name)}
              error={Boolean(error[field.name])}
              helperText={error[field.name]}
            />
          </Grid>
        ))}
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={!isFormValid}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Confirm
        </Button>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}
