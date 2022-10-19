import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Copyright({TextStyle}) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={TextStyle}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
