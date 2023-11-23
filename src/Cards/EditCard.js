import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useEffect, useState } from "react";
import EditForm from "./CardsForms/EditForm";
import Joi from "joi";
export default function EditCard({ CardEdit, edited, cardData }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const schema = Joi.object({
    title: Joi.string().min(2).required().messages({
      "string.empty": "Title Required",
      "string.min": "Title must be at least 2 length long",
    }),
    subtitle: Joi.string().min(2).required().messages({
      "string.empty": "Subtitle Name Required",
      "string.min": "Subtitle must be at least 2 length long",
    }),
    description: Joi.string().min(2).required().messages({
      "string.empty": "Description Required",
      "string.min": "Description must be at least 2 length long",
    }),
    web: Joi.string().min(2).required().messages({
      "string.empty": "Website Required",
      "string.min": "Website must be at least 2 length long",
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
    zip: Joi.string().min(2).required().messages({
      "string.empty": "Zip Required",
      "string.min": "Zip must be at least 2 length long",
    }),
  }).options({ stripUnknown: true });
  useEffect(() => {
    if (CardEdit) {
      setFormData(CardEdit);
    } else {
      setFormData();
    }
  }, [CardEdit]);
  const inputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
  };
  const handleOpen = () => {
    setFormData(cardData);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const save = (ev) => {
    ev.preventDefault();
    fetch(
      `https://api.shipap.co.il/business/cards/${cardData.id}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
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
      <IconButton
        className="icon-btn"
        aria-label="edit card"
        onClick={handleOpen}
      >
        <CreateIcon />
      </IconButton>
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AddCardIcon />
            </Avatar>
            <EditForm
              save={save}
              formData={formData}
              inputChange={inputChange}
              validationCheck={validationCheck}
              error={error}
              isFormValid={isFormValid}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
