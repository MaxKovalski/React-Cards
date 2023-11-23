import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "../Style/Cards.css";
import "../index.css";
import AddFav from "../FavCards/AddFav";
import RemoveFav from "../FavCards/RemoveFav";
import SingleCard from "./SingleCard";

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
      const updatedFavCards = favCards.filter(
        (favCard) => favCard.id !== cardId
      );
      setFavCards(updatedFavCards);
      RemoveFav(cardId);
    } else {
      const updatedFavCards = [...favCards, { id: cardId }];
      setFavCards(updatedFavCards);
      AddFav(cardId);
    }
  };

  return (
    <Container maxWidth="xl">
      <h1>Business Cards</h1>
      <h3>Im glad you are looking for business cards here!</h3>
      <Grid container spacing={2} sx={{ pt: 4 }}>
        {cards.length > 0 &&
          cards.map((card, index) => (
            <SingleCard
              card={card}
              toggleFavorite={toggleFavorite}
              isCardInFav={isCardInFav}
              userPermission={userPermission}
              key={index}
            />
          ))}
      </Grid>
    </Container>
  );
}
