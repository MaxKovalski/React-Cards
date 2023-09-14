import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { GeneralContext } from "../App";
import SignUpForm from "./LogonForm/SignUpForm";
export default function SignUp({ theme }) {
  const { setLoader } = useContext(GeneralContext);
  const [isBusiness, setIsBusiness] = useState(false);
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
          return res.json();
        } else {
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
      })
      .then((data) => {
        console.log(data);
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
      />
    </ThemeProvider>
  );
}
