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
import DeleteIcon from "@mui/icons-material/Delete";
import "../Style/Cards.css";
import "../index.css";
import EditCard from "./EditCard";
import CardModal from "./CardModal";
export default function GetMyCards({ cards, setCards }) {
  const { setLoader } = useContext(GeneralContext);
  const [cardEdited, setCardEdited] = useState();

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/business/cards?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
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
  const update = (p) => {
    if (p) {
      const i = cards.findIndex((x) => x.id == p.id);
      cards.splice(i, 1, p);
      setCards([...cards]);
    }
    setCardEdited();
  };
  const deleteCard = (cardId) => {
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/business/cards/${cardId}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "DELETE",
      }
    ).then(() => {
      const afterDelete = cards.filter((c) => c.id !== cardId);
      setCards(afterDelete);
      setLoader(false);
    });
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={0} sx={{ pt: 10 }}>
        {cards.length > 0 &&
          cards.map((card) => (
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
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <IconButton
                      onClick={() => deleteCard(card.id)}
                      className="icon-btn"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton>
                      <EditCard
                        card={cardEdited}
                        edited={update}
                        cardData={card}
                      />
                    </IconButton>
                  </div>
                  <div>
                    <IconButton className="icon-btn" aria-label="phone">
                      <a href={`tel:${cards.phone}`}>
                        <IconButton className="icon-btn" aria-label="phone">
                          <LocalPhoneIcon />
                        </IconButton>
                      </a>
                    </IconButton>
                  </div>
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
