import React, { useState, useContext } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, MenuItem, Container, Avatar } from "@mui/material";
import { Button, Tooltip } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Adb as AdbIcon } from "@mui/icons-material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { GeneralContext } from "../App";
import { usersPermissions, checkPermissions, pages } from "./Permissions";
import { useSnackbar } from "notistack";
export default function NavBar({ onThemeChange, theme }) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, setUser, setLoader, userPermission, setUserPermission } =
    useContext(GeneralContext);
  const path = useResolvedPath().pathname;
  const { enqueueSnackbar } = useSnackbar();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Logout = () => {
    setLoader(true);
    fetch(`https://api.shipap.co.il/clients/logout`, {
      credentials: "include",
    })
      .then(() => {
        enqueueSnackbar("Logout successful", { variant: "success" });
        setUser();
        setUserPermission();
        setUserPermission(usersPermissions.none);
        navigate("/");
        setAnchorElUser(null);
      })
      .finally(() => setLoader(false));
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MAXIM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages
                .filter(
                  (page) =>
                    !page.permissions ||
                    checkPermissions(page.permissions, userPermission)
                )
                .map((page) => (
                  <Link key={page.route} to={page.route}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <h4>{page.title}</h4>
                    </MenuItem>
                  </Link>
                ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter(
                (page) =>
                  !page.permissions ||
                  checkPermissions(page.permissions, userPermission)
              )
              .map((page) => (
                <Link key={page.route} to={page.route}>
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      backgroundColor:
                        page.route === path ? "cornflowerblue" : "",
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <h4>{page.title}</h4>
                  </Button>
                </Link>
              ))}
          </Box>
          {userPermission ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user.fullName}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link to="/account">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{user.fullName}</Typography>
                  </MenuItem>
                </Link>

                <MenuItem onClick={Logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box></Box>
          )}
          <IconButton sx={{ ml: 3 }} onClick={onThemeChange} color="inherit">
            {theme.palette.mode == "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
