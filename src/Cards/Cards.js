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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../Style/Cards.css";
import "../index.css";
import AddFav from "../FavCards/AddFav";
import FavCards from "../FavCards/FavCards";
import RemoveFav from "../FavCards/RemoveFav";
export default function Cards() {
  const { user, setUser, setLoader, userPermission } =
    useContext(GeneralContext);
  const [cards, setCards] = useState([]);
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
      });
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

  const isCardInFav = (cardId) => {
    return favCards.some((favCard) => favCard.id === cardId);
  };
  const toggleFavorite = (cardId) => {
    if (isCardInFav(cardId)) {
      RemoveFav(cardId);
    } else {
      AddFav(cardId);
    }
  };
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
                  {userPermission ? (
                    <IconButton
                      className="icon-btn"
                      aria-label="add to favorites"
                      onClick={() => toggleFavorite(card.id)}
                    >
                      {isCardInFav(card.id) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  ) : (
                    ""
                  )}
                  <IconButton className="icon-btn" aria-label="phone">
                    <LocalPhoneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
