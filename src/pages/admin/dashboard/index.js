import { Grid, Modal, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AdminDashboardPages(props) {
  const [open, setOpen] = React.useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "productName", headerName: "Product Name", flex: 1 },
    { field: "slug", headerName: "Slug", flex: 1 },
    { field: "stock", headerName: "Stock", width: 50 },
    { field: "view", headerName: "View", width: 50 },
    { field: "rating", headerName: "Rating", width: 50 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () =>
        <div>
          <Button sx={{ mr: 2 }} variant="contained" color="success">
            Edit
          </Button>
          <Button sx={{ mr: 2 }} variant="contained" color="error">
            Hapus
          </Button>
          <Button variant="contained" color="warning">
            Detail
          </Button>
        </div>,
    },
  ];

  const rows = [
    {
      id: 1,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 2,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 3,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 4,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 5,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 6,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 7,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 8,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 9,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
    {
      id: 10,
      productName: "Kaos Kemeja",
      slug: "kaos-kemeja",
      stock: 35,
      view: 30,
      rating: 4.5,
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Container>
        <Box>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Typography component={"h2"} variant={"h4"}>
              List Product
            </Typography>
            <Button type="button" variant="contained" onClick={handleOpen}>
              + Add New
            </Button>
          </Grid>

          <div style={{ height: 400, width: "100%", marginTop: 30 }}>
            <TextField
              margin="normal"
              label="Search Product Name"
              name="search"
            />
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Add Data
          </Typography>
          <Box component={"form"}>
            <Button variant="contained" component="label" fullWidth>
              Upload
              <input hidden accept="image/*" type="file" name="product_image" />
            </Button>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Product Name"
              name="product_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Slug"
              name="slug"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Product Description"
              name="product_description"
              autoFocus
              multiline
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Price"
              name="price"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Stock"
              name="stock"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Discount (%)"
              name="discount"
              autoFocus
            />
            <Button type="submit" variant="outlined" fullWidth sx={{ mt: 2 }}>
              Simpan
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AdminDashboardPages;
