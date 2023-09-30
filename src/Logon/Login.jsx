import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GeneralContext } from "../App";
import Joi from "joi";
import LoginForm from "./LogonForm/LoginForm";
import { usersPermissions } from "../Components/Permissions";
export default function Login({ theme }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const { setUser, setLoader, setUserPermission } = useContext(GeneralContext);

  const schema = Joi.object({
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
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/clients/login?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
      })
      .then((data) => {
        setUser(data);
        setUserPermission(usersPermissions.user);
        if (data.business) {
          setUserPermission(usersPermissions.business);
        } else if (data.admin) {
          setUserPermission(usersPermissions.admin);
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setLoader(false));
  };
  return (
    <ThemeProvider theme={theme}>
      <LoginForm
        handleSubmit={handleSubmit}
        validationCheck={validationCheck}
        formData={formData}
        error={error}
        isFormValid={isFormValid}
      />
    </ThemeProvider>
  );
}
