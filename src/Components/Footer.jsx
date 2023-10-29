import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import PaymentIcon from "@mui/icons-material/Payment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { usersPermissions, checkPermissions } from "./Permissions";
import { GeneralContext } from "../App";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const FooterIcons = [
  {
    route: "/fav-cards",
    title: "Favorites",
    icon: <FavoriteIcon />,
    permissions: [
      usersPermissions.user,
      usersPermissions.business,
      usersPermissions.admin,
    ],
  },
  {
    route: "/my-cards",
    title: "My Cards",
    icon: <PaymentIcon />,
    permissions: [usersPermissions.business, usersPermissions.admin],
  },
  {
    route: "/admin",
    title: "User's management",
    icon: <ManageAccountsIcon />,
    permissions: [usersPermissions.admin],
  },
  { route: "/about", title: "About", icon: <InfoIcon /> },
];

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const { userPermission } = React.useContext(GeneralContext);
  const location = useLocation();
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        {FooterIcons.filter(
          (p) =>
            !p.permissions || checkPermissions(p.permissions, userPermission)
        ).map((p) => (
          <BottomNavigationAction
            label={p.title}
            key={p.route}
            icon={p.icon}
            sx={{
              textDecoration: "none",
              color: location.pathname === p.route ? "blue" : "",
              fontWeight: location.pathname === p.route ? "bold" : "normal",
            }}
            component={Link}
            to={p.route}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
