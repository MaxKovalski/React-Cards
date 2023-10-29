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
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "../Style/Cards.css";
import "../index.css";
import AddFav from "../FavCards/AddFav";
import RemoveFav from "../FavCards/RemoveFav";
import { Link } from "@mui/material";
import CardModal from "./CardModal";
export default function Cards() {
  const { setLoader, userPermission } = useContext(GeneralContext);
  const [cards, setCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
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
  useEffect(() => {
    if (userPermission === 1 || userPermission === 2 || userPermission === 3) {
      console.log(userPermission);

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
    }
  }, [userPermission]);
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
      <Grid container spacing={0} sx={{ pt: 10, marginBottom: "70px" }}>
        {cards.length > 0 &&
          cards.map((card) => (
            <Grid item xs={3} key={card.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginBottom: "15px",
                  position: "relative",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={card.imgUrl}
                  title={card.imgAlt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>Title: {card.title} </h4>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h2> Subtitle: {card.subtitle}</h2>
                    <br />
                    <hr></hr>
                  </Typography>
                  <br />
                  <Typography variant="body2" color="info.main">
                    Phone: {card.phone}
                  </Typography>
                  <Typography variant="body2" color="info.main">
                    WebSite:
                    <Link
                      color="info.main"
                      href={
                        card.web.startsWith("http://") ||
                        card.web.startsWith("https://")
                          ? card.web
                          : `http://${card.web}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" " + card.web}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="info.main">
                    Address: {card.state}
                    {card.city}
                    {card.street}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
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
                    <a href={`tel:${card.phone}`}>
                      <IconButton className="icon-btn" aria-label="phone">
                        <LocalPhoneIcon />
                      </IconButton>
                    </a>
                  </IconButton>
                </CardActions>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  className="icon-btn"
                  aria-label="phone"
                >
                  <CardModal cardId={card.id} card={card} />
                </IconButton>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
