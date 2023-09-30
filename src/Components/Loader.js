import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div className="Loader" style={{ zIndex: 9999 }}>
      <CircularProgress disableShrink />
    </div>
  );
}
