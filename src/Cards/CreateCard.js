import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreateForm from "./CardsForms/CreateForm";
import { useMediaQuery, useTheme } from "@mui/material";
import Joi from "joi";
import { useState } from "react";
export default function CreateCard({
  handleClose,
  publishCards,
  handleInput,
  addCard,
  setAddCard,
  open,
}) {
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
  const validationCheck = (ev) => {
    const { name, value } = ev.target;
    const object = { ...addCard, [name]: value };
    setAddCard(object);
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
  return (
    <Modal
      theme={theme}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        style={{
          width: isSmallScreen ? "90%" : "50%",
          height: isSmallScreen ? "80%" : "auto",
          padding: isSmallScreen ? "20px" : "50px",
          margin: isSmallScreen ? "10px" : "50px",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="large">
          <CssBaseline />
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
            <CreateForm
              publishCards={publishCards}
              handleInput={handleInput}
              addCard={addCard}
              error={error}
              isFormValid={isFormValid}
              validationCheck={validationCheck}
            />
          </Box>
        </Container>
      </Box>
    </Modal>
  );
}
