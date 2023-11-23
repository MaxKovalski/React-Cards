import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { GeneralContext } from "../App";
import SignUpForm from "./LogonForm/SignUpForm";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LogonForm/LoginForm";
import { useSnackbar } from "notistack";
export default function SignUp({ theme }) {
  const { setLoader } = useContext(GeneralContext);
  const [isBusiness, setIsBusiness] = useState(false);
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    imgUrl: "",
    imgAlt: "",
    state: "",
    country: "",
    street: "",
    city: "",
    houseNumber: "",
    zip: "",
  });
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
    password: Joi.string()
      .min(8)
      .max(32)
      .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_*]).{8,32}$/)
      .required()
      .messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters long",
        "string.max": "Password must not exceed 32 characters",
        "string.pattern.base":
          "Password must contain at least one uppercase letter and one special character",
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
    houseNumber: Joi.string().required().messages({
      "string.empty": "House Number is Required",
    }),
    zip: Joi.number().required().messages({
      "string.empty": "Zip is Required",
    }),
  });
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/clients/signup?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          middleName: data.get("middleName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
          email: data.get("email"),
          password: data.get("password"),
          imgUrl: data.get("imgUrl"),
          imgAlt: data.get("imgAlt"),
          state: data.get("state"),
          country: data.get("country"),
          street: data.get("street"),
          city: data.get("city"),
          houseNumber: data.get("houseNumber"),
          zip: data.get("zip"),
          business: isBusiness,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          enqueueSnackbar("SignUp successful", { variant: "success" });
          return res.json();
        } else {
          enqueueSnackbar("Error", { variant: "error" });
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
      })
      .then(() => {
        <LoginForm signUpEmail={formData.email} />;
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(setLoader(false));
  };
  return (
    <ThemeProvider theme={theme}>
      <SignUpForm
        Typography={Typography}
        handleSubmit={handleSubmit}
        isBusiness={isBusiness}
        setIsBusiness={setIsBusiness}
        validationCheck={validationCheck}
        error={error}
        isFormValid={isFormValid}
        formData={formData}
      />
    </ThemeProvider>
  );
}
