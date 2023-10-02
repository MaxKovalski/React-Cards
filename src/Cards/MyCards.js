import * as React from "react";
import Button from "@mui/material/Button";

import { GeneralContext } from "../App";
import GetMyCards from "./GetMyCards";
import CreateCard from "./CreateCard";

export default function MyCards() {
  const { setLoader } = React.useContext(GeneralContext);
  const [open, setOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addCard, setAddCard] = React.useState({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    imgUrl: "",
    imgAlt: "",
    country: "",
    street: "",
    houseNumber: "",
    state: "",
    zip: "",
    city: "",
  });
  const publishCards = (ev) => {
    ev.preventDefault();
    setLoader(true);
    fetch(
      `https://api.shipap.co.il/business/cards?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(addCard),
      }
    )
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
      })
      .finally(() => {
        setLoader(false);
        handleClose();
      });
  };
  const handleInput = (ev) => {
    const { name, value } = ev.target;
    const obj = {
      ...addCard,
      [name]: value,
    };
    setAddCard(obj);
  };

  return (
    <div>
      <h4> My Cards</h4>
      <div>
        <Button onClick={handleOpen} variant="contained">
          Create Card
        </Button>
        <CreateCard
          handleClose={handleClose}
          publishCards={publishCards}
          handleInput={handleInput}
          addCard={addCard}
          open={open}
        />
        <GetMyCards cards={cards} setCards={setCards} />
      </div>
    </div>
  );
}
