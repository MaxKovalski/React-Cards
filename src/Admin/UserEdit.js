import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Avatar from "@mui/material/Avatar";
import Joi from "joi";
import EditForm from "./UserForm/EditFrom";
export default function UserEdit({ userParams, userEdit, edited }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(userParams);
  const [error, setError] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(true);
  const schema = Joi.object({
    firstName: Joi.string().min(2).required().messages({
      "string.empty": "First Name Required",
      "string.min": "First Name must be at least 2 length long",
    }),
    middleName: Joi.string().min(2).required().messages({
      "string.empty": "Middle Name Required",
      "string.min": "Middle Name must be at least 2 length long",
    }),
    lastName: Joi.string().min(2).required().messages({
      "string.empty": "Last Name Required",
      "string.min": "Last Name must be at least 2 length long",
    }),
    phone: Joi.string()
      .max(10)
      .regex(/^[0-9]{10}$/)
      .messages({
        "string.empty": "Phone Number is Required",
        "string.pattern.base":
          "Phone number must have 10 digits,its need to be only numbers",
        "string.max": "Phone number must not exceed 10 digits",
      }),
    email: Joi.string().email({ tlds: false }).required().messages({
      "string.empty": "Email Address is required",
      "string.email": "Email must be a valid email address",
    }),

    imgUrl: Joi.string().required().messages({
      "string.empty": "Image Link is Required",
    }),
    imgAlt: Joi.string().required().messages({
      "string.empty": "Image Description is Required",
    }),
    state: Joi.string().required().messages({
      "string.empty": "State is Required",
    }),
    country: Joi.string().required().messages({
      "string.empty": "County is Required",
    }),
    street: Joi.string().required().messages({
      "string.empty": "Street is Required",
    }),
    city: Joi.string().required().messages({
      "string.empty": "City is Required",
    }),
    houseNumber: Joi.number().required().messages({
      "string.empty": "House Number is Required",
    }),
    zip: Joi.number().required().messages({
      "string.empty": "Zip is Required",
    }),
  }).options({ stripUnknown: true });

  React.useEffect(() => {
    if (userEdit) {
      setFormData(userEdit);
    } else {
      setFormData();
    }
    console.log(userParams.business);
  }, [userEdit]);
  const validationCheck = (ev) => {
    const { name, value } = ev.target;
    const object = { ...formData, [name]: value };
    setFormData(object);
    const validate = schema.validate(object, { abortEarly: false });
    const tempErrors = { ...error };
    delete tempErrors[name];
    if (validate.error) {
      const item = validate.error.details.find((e) => e.context.key == name);
      if (item) {
        tempErrors[name] = item.message;
      }
    }
    setIsFormValid(!validate.error);
    setError(tempErrors);
    console.log(isFormValid);
  };
  const inputChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
            <EditForm
              save={save}
              formData={formData}
              validationCheck={validationCheck}
              inputChange={inputChange}
              error={error}
              isFormValid={isFormValid}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
