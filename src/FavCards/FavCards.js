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

import "../Style/Cards.css";
import "../index.css";
import RemoveFav from "./RemoveFav";

export default function FavCards() {
  const { setLoader, userPermission } = useContext(GeneralContext);
  const [favCards, setFavCards] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/cards/favorite?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFavCards(data);
        console.log(data);
        setLoader(false);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <h1>Favorite Cards</h1>

      <Grid container spacing={0} sx={{ pt: 10, marginBottom: "70px" }}>
        {favCards.length > 0 &&
          favCards.map((card) => (
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
                  {userPermission ? (
                    <IconButton
                      className="icon-btn"
                      aria-label="add to favorites"
                      onClick={() => RemoveFav(card.id)}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    ""
                  )}

                  <IconButton className="icon-btn" aria-label="phone">
                    <a href={`tel:${card.phone}`}>
                      <IconButton className="icon-btn" aria-label="phone">
                        <LocalPhoneIcon />
                      </IconButton>
                    </a>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
