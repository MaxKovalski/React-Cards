export default function EditCard({ cardId }) {
  console.log(cardId);
  fetch(
    `https://api.shipap.co.il/business/cards/:${cardId}?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
    {
      credentials: "include",
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj),
    }
  ).then((data) => {});
}
