import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./Router";
import { createContext } from "react";
import Loader from "./Components/Loader";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import { usersPermissions } from "./Components/Permissions";
export const GeneralContext = createContext();
function App() {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const [userPermission, setUserPermission] = useState(usersPermissions.none);
  const [themeLight, setThemeType] = useState(true);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#3F51B5",
      },
      secondary: {
        main: "#FF9800",
      },
      mode: "light",
    },
  });
  useEffect(() => {
    fetch(`https://api.shipap.co.il/clients/login`, {
      credentials: "include",
    })
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
      })
      .catch((err) => {
        console.log(err.message);
        setUserPermission(usersPermissions.none);
      })
      .finally(() => setLoader(false));
  }, []);

  const darkTheme = createTheme({
    palette: {
      // primary: {
      //   main: "#2b181a",
      // },
      // secondary: {
      //   main: "#FFC107",
      // },
      mode: "dark",
    },
  });
  const theme = createTheme({
    palette: themeLight ? lightTheme.palette : darkTheme.palette,
  });

  function handleThemeChange() {
    setThemeType(!themeLight);
  }

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
        setLoader,
        userPermission,
        setUserPermission,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar onThemeChange={handleThemeChange} theme={theme} />
        <Router theme={theme} />
        {loader && <Loader />}
        <Footer />
      </ThemeProvider>
    </GeneralContext.Provider>
  );
}

export default App;
