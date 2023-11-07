import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";

export default function EditForm({
  save,
  formData,
  validationCheck,
  inputChange,
  error,
  isFormValid,
}) {
  const fields = [
    { name: "firstName", label: "First Name", required: true },
    { name: "middleName", label: "Middle Name" },
    { name: "lastName", label: "Last Name", required: true },
    { name: "email", label: "Email Address", required: true },
    { name: "phone", label: "Phone" },
    { name: "imgUrl", label: "Image URL", required: true },
    { name: "imgAlt", label: "Image Description", required: true },
    { name: "country", label: "Country", required: true },
    { name: "city", label: "City", required: true },
    { name: "street", label: "Street", required: true },
    {
      name: "houseNumber",
      label: "House Number",
      type: "number",
      required: true,
    },
    { name: "state", label: "State" },
    { name: "zip", label: "Zip", type: "number" },
  ];

  return (
    <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={save}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {fields.map((field) => (
          <Grid item xs={6} key={field.name}>
            <TextField
              autoComplete={field.name}
              name={field.name}
              required={field.required}
              fullWidth
              id={field.name}
              label={field.label}
              value={formData?.[field.name]}
              onChange={(event) => {
                validationCheck(event);
                inputChange(event);
              }}
              error={Boolean(error[field.name])}
              helperText={error[field.name]}
              type={field.type || "text"}
            />
          </Grid>
        ))}
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
          type="checkbox"
          checked={formData?.business}
          onChange={inputChange}
        />
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={!isFormValid}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Edit
        </Button>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}
