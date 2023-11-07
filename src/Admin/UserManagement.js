import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UserEdit from "./UserEdit";
import DeleteCards from "./DeleteCards";
import { GeneralContext } from "../App";
export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [userEdited, setUserEdited] = useState();
  const { setLoader } = useContext(GeneralContext);
  const update = (u) => {
    if (u) {
      const i = users.findIndex((x) => x.id == u.id);
      users.splice(i, 1, u);
      setUsers([...users]);
    }
    setUserEdited();
  };
  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/admin/clients?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoader(false);
      });
  }, []);

  const deleteUsers = (userId) => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/admin/clients/${userId}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "DELETE",
      }
    ).then(() => {
      const afterDelete = users.filter((u) => u.id !== userId);
      setUsers(afterDelete);
      setLoader(false);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      sortable: false,
      width: 180,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "business",
      headerName: "Business",
      width: 100,
      renderCell: (params) => (
        <div>
          <input type="checkbox" checked={params.row.business} readOnly />
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Box>
          <IconButton onClick={() => deleteUsers(params.row.id)}>
            <PersonRemoveIcon />
          </IconButton>
          <IconButton>
            <UserEdit
              userParams={params.row}
              userEdit={userEdited}
              edited={update}
            />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
    phone: user.phone,
    email: user.email,
    business: user.business,
    imgUrl: user.imgUrl,
    imgAlt: user.imgAlt,
    state: user.state,
    country: user.country,
    city: user.city,
    street: user.street,
    houseNumber: user.houseNumber,
    zip: user.zip,
  }));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Administartor Panel</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
          width: "70%",
          margin: "0 auto",
          marginTop: "70px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </div>

      <div>
        <DeleteCards />
      </div>
    </div>
  );
}
