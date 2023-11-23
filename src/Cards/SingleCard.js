import { Fragment, useState } from "react";
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
import Link from "@mui/material/Link";
import CardModal from "./CardModal";
export default function SingleCard({
  card,
  toggleFavorite,
  isCardInFav,
  userPermission,
}) {
  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
        <Card sx={{ marginBottom: "80px", position: "relative" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={card.imgUrl}
            title={card.imgAlt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span>Title: {card.title}</span>
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
              Address: {card.state} {card.city}
              {card.street}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
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
            {userPermission ? (
              <IconButton className="icon-btn" aria-label="phone">
                <a href={`tel:${card.phone}`}>
                  <LocalPhoneIcon />
                </a>
              </IconButton>
            ) : (
              ""
            )}
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
    </Fragment>
  );
}
