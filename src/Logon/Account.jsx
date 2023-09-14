import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { GeneralContext } from "../App";
import AccountForm from "./LogonForm/AccountForm";
export default function Account({ theme }) {
  const { user, setUser, setLoader } = useContext(GeneralContext);
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
        />
      ) : (
        ""
      )}
    </ThemeProvider>
  );
}
