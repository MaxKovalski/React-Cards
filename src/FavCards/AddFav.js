export default function AddFav(cardId) {
  fetch(
    `https://api.shipap.co.il/cards/${cardId}/favorite?token=5364e7bc-5265-11ee-becb-14dda9d4a5f0`,
    {
      credentials: "include",
      method: "PUT",
    }
  ).then(() => {});
}
