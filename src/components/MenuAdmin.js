import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MenuAdmin() {

  const logoutSubmit = () => {
    localStorage.removeItem('User');
    window.location.href="/home"
  }

  return (
    <Box>
      <Box sx={{ bgcolor: "white", p: 2, borderBottom: 1 }}>
        <Link to="/admin/dashboard">Home</Link>
      </Box>
      <Box sx={{ bgcolor: "white", p: 2, borderBottom: 1 }}>
        <Link to="/admin/product">List Product</Link>
      </Box>
      <Box sx={{ bgcolor: "white", p: 2, borderBottom: 1 }}>
        <Link to="/admin/category">List Category</Link>
      </Box>
      <Box sx={{ bgcolor: "white", p: 2, borderBottom: 1 }}>
        <Button onClick={logoutSubmit}>Logout</Button>
      </Box>
    </Box>
  );
}

export default MenuAdmin;
