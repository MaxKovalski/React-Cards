import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CreateIcon from "@mui/icons-material/Create";
import "../Style/Cards.css";
import "../index.css";
import EditCard from "./EditCard";

export default function GetMyCards() {
  const { user, setUser, setLoader, userPermission } =
    useContext(GeneralContext);
  const [cards, setCards] = useState([]);
  const [selectId, setSelectId] = useState(null); // State
  useEffect(() => {
    fetch(
      `https://api.shipap.co.il/business/cards?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <h1>Business Cards</h1>
      <h3>im glad you to look for business cards here !</h3>
      <Grid container spacing={0} sx={{ pt: 10 }}>
        {cards.length > 0 &&
          cards.map((card) => (
            <Grid item xs={3} key={card.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={card.imgUrl}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.userName}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <IconButton
                    className="icon-btn"
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon />
                  </IconButton>

                  <IconButton
                    className="icon-btn"
                    aria-label="edit card"
                    onClick={() => setSelectId(card.id)}
                  >
                    <CreateIcon />
                  </IconButton>

                  <IconButton className="icon-btn" aria-label="phone">
                    <LocalPhoneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        <EditCard cardId={selectId} />
      </Grid>
    </Container>
  );
}
