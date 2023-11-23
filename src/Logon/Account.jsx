import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { GeneralContext } from "../App";
import AccountForm from "./LogonForm/AccountForm";
import { useState } from "react";
import Joi from "joi";
import { useSnackbar } from "notistack";
export default function Account({ theme }) {
  const { user, setUser, setLoader } = useContext(GeneralContext);
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
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
  });
  const validationCheck = (ev) => {
    const { name, value } = ev.target;
    const object = { ...user, [name]: value };
    setUser(object);
    const validate = schema.validate(object, {
      abortEarly: false,
      allowUnknown: true,
    });
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById("accountForm");
    const data = new FormData(form);
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/clients/update?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          middleName: data.get("middleName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
          email: data.get("email"),
          imgUrl: data.get("imgUrl"),
          imgAlt: data.get("imgAlt"),
          state: data.get("state"),
          country: data.get("country"),
          street: data.get("street"),
          city: data.get("city"),
          houseNumber: data.get("houseNumber"),
          zip: data.get("zip"),
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          enqueueSnackbar("User Edited", { variant: "success" });
          return res.json();
        } else {
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
      })

      .catch((err) => {
        console.log(err.message);
      })
      .finally(setLoader(false));
  };
  const handelInput = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <AccountForm
          handelInput={handelInput}
          user={user}
          handleSubmit={handleSubmit}
          setUser={setUser}
          error={error}
          isFormValid={isFormValid}
          validationCheck={validationCheck}
        />
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
