import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
export default function UserManagement() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.shipap.co.il/admin/clients?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .finally(console.log(users));
  }, []);

  const deleteUsers = (userId) => {
    fetch(
      `https://api.shipap.co.il/admin/clients/${userId}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "DELETE",
      }
    ).then(() => {
      const afterDelete = users.filter((u) => u.id !== userId);
      setUsers(afterDelete);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
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
          <input
            type="checkbox"
            checked={params.row.business}
            readOnly
            enable
          />
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => deleteUsers(params.row.id)}>
            <PersonRemoveIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const rows = users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    business: user.business,
  }));

  return (
    <div>
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
    </div>
  );
}
