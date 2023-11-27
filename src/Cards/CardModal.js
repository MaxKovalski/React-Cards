import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "../Style/Cards.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useState } from "react";
import { Link, useMediaQuery, useTheme } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const linkStyle = {
  color: "inherit",
  textDecoration: "none",
};

export default function CardModal({ card }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="test">
      <OpenInFullIcon onClick={handleOpen} sx={{ color: "info.main" }} />
      <Modal
        theme={theme}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={style}
          style={{
            width: isSmallScreen ? "90%" : "50%",
            height: isSmallScreen ? "80%" : "auto",
            padding: isSmallScreen ? "20px" : "50px",
            margin: isSmallScreen ? "10px" : "50px",
            backgroundColor: theme.palette.background.default,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={card.imgUrl}
            alt={card.imgAlt}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              <h4>{card.title}</h4>
              <br />
              <br />
            </Typography>
            <Typography variant="h5" color="info.main">
              {card.subtitle}
              <br />
            </Typography>
            <Typography variant="h5" color="info.main">
              {card.description}
              <hr />
              <br />
            </Typography>
            <Typography variant="h5" color="info.main">
              Email: {card.email}
            </Typography>
            <Typography variant="h5" color="info.main">
              <a href={`tel:${card.phone}`} style={linkStyle}>
                Phone: {card.phone}
              </a>
            </Typography>
            <Typography variant="h5" color="info.main">
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
            <Typography variant="h5" color="info.main">
              Address: {card.country} {card.city} {card.street}
              {card.houseNumber}
            </Typography>
            <Typography variant="h5" color="info.main">
              Zip: {card.zip}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
