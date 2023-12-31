export const usersPermissions = {
  none: 0,
  user: 1,
  business: 2,
  admin: 3,
};

export const checkPermissions = (permissions, usersPermissions) => {
  return permissions.includes(usersPermissions);
};

export const pages = [
  {
    route: "/React-Cards",
    title: "Home",
    permissions: [
      usersPermissions.none,
      usersPermissions.user,
      usersPermissions.business,
      usersPermissions.admin,
    ],
  },
  {
    route: "/login",
    title: "Login",
    permissions: [usersPermissions.none],
  },
  {
    route: "/signup",
    title: "Signup",
    permissions: [usersPermissions.none],
  },
  {
    route: "/fav-cards",
    title: "Favorite Cards",
    permissions: [
      usersPermissions.user,
      usersPermissions.business,
      usersPermissions.admin,
    ],
  },
  {
    route: "/my-cards",
    title: "My Cards",
    permissions: [usersPermissions.business, usersPermissions.admin],
  },
  {
    route: "/admin",
    title: "User Management",
    permissions: [usersPermissions.admin],
  },
  {
    route: "/about",
    title: "About",
  },
];

export const settings = [
  {
    route: "/account",
    title: "Account",
    permissions: [usersPermissions.business, usersPermissions.admin],
  },
];
