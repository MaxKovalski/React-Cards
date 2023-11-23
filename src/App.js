import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./Router";
import { createContext } from "react";
import Loader from "./Components/Loader";
import { usersPermissions } from "./Components/Permissions";
import Footer from "./Components/Footer";
import { useSnackbar, SnackbarProvider } from "notistack";

export const GeneralContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const [userPermission, setUserPermission] = useState(usersPermissions.none);
  const [themeLight, setThemeType] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

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
    enqueueSnackbar("Login successful", { variant: "success" });
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
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <NavBar onThemeChange={handleThemeChange} theme={theme} />
          <Router theme={theme} />
          {loader && <Loader />}
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </GeneralContext.Provider>
  );
}

export default App;
