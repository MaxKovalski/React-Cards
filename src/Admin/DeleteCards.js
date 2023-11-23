import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Style/Cards.css";
import "../index.css";
import { useSnackbar } from "notistack";
export default function DeleteCards() {
  const { setLoader } = useContext(GeneralContext);
  const [cards, setCards] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  function deleteById(id) {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/admin/cards/${id}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "DELETE",
      }
    ).then(() => {
      const afterDelete = cards.filter((c) => c.id !== id);
      setCards(afterDelete);
      setLoader(false);
      enqueueSnackbar("Card Deleted", { variant: "success" });
    });
  }

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/cards?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoader(false);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "Card ID", width: 70 },
    { field: "title", headerName: "Card Title", width: 200 },
    { field: "clientId", headerName: "User ID", width: 100 },
    { field: "userName", headerName: "User Name", width: 230 },

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
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Box>
          <IconButton onClick={() => deleteById(params.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = cards.map((cards) => ({
    id: cards.id,
    userName: cards.userName,
    phone: cards.phone,
    email: cards.email,
    clientId: cards.clientId,
    title: cards.title,
  }));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Delete Cards</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 650,
          width: "60%",
          margin: "0 auto",
          marginTop: "70px",
          marginBottom: "70px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </div>
    </div>
  );
}
