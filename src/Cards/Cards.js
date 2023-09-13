import "../Style/Cards.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../index.css";
import { useContext } from "react";
import { GeneralContext } from "../App";

export default function Cards() {
  const { user, setUser, setLoader, userPermission } =
    useContext(GeneralContext);
  return (
    <Container maxWidth="xl">
      <h1>Business Cards</h1>
      <h3>im glad you to look for business cards here !</h3>
      <Grid container spacing={0} sx={{ pt: 10 }}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/Img/front-end.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <IconButton className="icon-btn" aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton className="icon-btn" aria-label="phone">
                <LocalPhoneIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="../Img/front-end.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
              {userPermission ? (
                <IconButton className="icon-btn" aria-label="add to favorites">
                  <FavoriteIcon />
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
      </Grid>
    </Container>
  );
}
