import Button from "@mui/material/Button";

import { GeneralContext } from "../App";
import GetMyCards from "./GetMyCards";
import CreateCard from "./CreateCard";
import { useSnackbar } from "notistack";
import { useContext, useState } from "react";
export default function MyCards() {
  const { setLoader } = useContext(GeneralContext);
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { enqueueSnackbar } = useSnackbar();
  const [addCard, setAddCard] = useState({
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
  console.log(cards);

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
        if (!res.ok) {
          return res.text().then((x) => {
            throw new Error(x);
          });
        }
        return res.json();
      })
      .then(() => {
        enqueueSnackbar("Card Added", { variant: "success" });
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
      })

      .finally(() => {
        setLoader(false);
        setAddCard({
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
        handleClose();
        setCards([...cards, addCard]);
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
      <div>
        <h1>My Cards</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleOpen} variant="contained">
            Create Card
          </Button>
        </div>
        <CreateCard
          handleClose={handleClose}
          publishCards={publishCards}
          handleInput={handleInput}
          addCard={addCard}
          open={open}
          setAddCard={setAddCard}
        />

        <GetMyCards cards={cards} setCards={setCards} test={publishCards} />
      </div>
    </div>
  );
}
