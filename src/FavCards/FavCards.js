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
import CardModal from "../Cards/CardModal";
import Link from "@mui/material/Link";
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
        setLoader(false);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <h1>Favorite Cards</h1>

      <Grid container spacing={2} sx={{ pt: 4, marginBottom: "70px" }}>
        {favCards.length > 0 &&
          favCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Card
                sx={{
                  marginBottom: "35px",
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
                    <span>Title: {card.title} </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span> Subtitle: {card.subtitle}</span>
                    <br />
                  </Typography>
                  <div>
                    <hr />
                  </div>
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

                  <a href={`tel:${card.phone}`}>
                    <IconButton className="icon-btn" aria-label="phone">
                      <LocalPhoneIcon />
                    </IconButton>
                  </a>
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
                  aria-label="Full"
                >
                  <CardModal card={card} />
                </IconButton>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
