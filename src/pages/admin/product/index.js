import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import axios from "axios";
import { Config } from "../../../utils/config";

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
  overflow: "scroll",
  height: "80vh",
};

function AdminProductPages(props) {
  const [auth, setAuth] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [productName, setProductName] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [productDescription, setProductDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [image, setImage] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [dataCategory, setDataCategory] = React.useState([]);
  const [dataProduct, setDataProduct] = React.useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "productImage",
      headerName: "Gambar",
      width: 80,
      renderCell: params => {
        console.log(params);
        return (
          <div>
            <img
              src={Config.product_image_url + params.value}
              width={50}
              height={50}
            />
          </div>
        );
      },
    },
    { field: "productName", headerName: "Product Name", flex: 1 },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
    },
    { field: "stock", headerName: "Stock", width: 50 },
    { field: "view", headerName: "View", width: 50 },
    { field: "rating", headerName: "Rating", width: 50 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: params =>
        <div>
          <Button sx={{ mr: 2 }} variant="contained" color="success">
            Edit
          </Button>
          <Button
            sx={{ mr: 2 }}
            variant="contained"
            color="error"
            onClick={() => deleteData(params.row.id)}
          >
            Hapus
          </Button>
          <Button variant="contained" color="warning">
            Detail
          </Button>
        </div>,
    },
  ];

  useEffect(() => {
    getDataAuth();
  }, []);

  useEffect(
    () => {
      if (auth != {}) {
        getDataCategory();
        getDataProduct();
      }
    },
    [auth],
  );

  const getDataCategory = () => {
    if (auth !== {}) {
      const header = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + auth.token,
        },
      };

      axios
        .get(Config.api_url + "category", header)
        .then(function(response) {
          const value = response.data;
          if (value.status) {
            const val = value.data;
            let allData = [];
            let no = 0;

            val.forEach(e => {
              no++;
              allData.push({
                id: e.id,
                no,
                category_name: e.category_name,
                active: e.active,
              });
            });

            setDataCategory(allData);
          } else {
            alert(value.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  const getDataProduct = s => {
    if (auth !== {}) {
      const header = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + auth.token,
        },
      };

      axios
        .get(Config.api_url + "product", header)
        .then(function(response) {
          const value = response.data;
          if (value.status) {
            const val = value.data;
            let allData = [];
            let no = 0;

            val.forEach(e => {
              no++;
              allData.push({
                id: e.id,
                productName: e.product_name,
                slug: e.slug,
                stock: e.stock,
                view: e.view,
                rating: e.rating,
                productImage: e.product_image,
              });
            });

            setDataProduct(allData);
          } else {
            alert(value.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleProductName = e => setProductName(e.target.value);
  const handleProductDescription = e => setProductDescription(e.target.value);
  const handleSlug = e => setSlug(e.target.value);
  const handlePrice = e => setPrice(e.target.value);
  const handleDiscount = e => setDiscount(e.target.value);
  const handleStock = e => setStock(e.target.value);
  const handleCategory = e => setCategory(e.target.value);
  const handleImage = e => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);

    setImageUrl(objectUrl);
    setImage(e.target.files[0]);
  };

  const getDataAuth = () => {
    const auth = localStorage.getItem("User");
    setAuth(JSON.parse(auth));
  };

  const onSubmitAdd = e => {
    e.preventDefault();

    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + auth.token,
      },
    };

    let params = new FormData();
    params.append("product_name", productName);
    params.append("slug", slug);
    params.append("category_id", category);
    params.append("product_image", image);
    params.append("product_description", productDescription);
    params.append("meta_description", productDescription);
    params.append("meta_title", productName);
    params.append("price", price);
    params.append("stock", stock);
    params.append("discont", discount);

    axios
      .post(Config.api_url + "product", params, header)
      .then(function(response) {
        const value = response.data;
        console.log(value);
        if (value.status) {
          getDataProduct();
          setOpen(false);
          alert(value.message);
        } else {
          alert(value.message);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const deleteData = id => {
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + auth.token,
      },
    };

    alert(Config.api_url + "product/" + id);

    axios
      .delete(Config.api_url + "product/" + id, header)
      .then(function(response) {
        getDataProduct();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
              rows={dataProduct}
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
          <form onSubmit={onSubmitAdd} encType="multipart/form-data">
            <Button variant="contained" component="label" fullWidth>
              Upload
              <input
                hidden
                accept="image/*"
                type="file"
                name="product_image"
                onChange={handleImage}
              />
            </Button>
            {image &&
              <img
                src={imageUrl}
                style={{ width: "100%", height: 300, marginTop: 10 }}
              />}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Product Name"
              name="product_name"
              autoFocus
              onChange={handleProductName}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleCategory}
              >
                {dataCategory.map((val, i) =>
                  <MenuItem key={i} value={val.id}>
                    {val.category_name}
                  </MenuItem>,
                )}
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Slug"
              name="slug"
              autoFocus
              onChange={handleSlug}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Product Description"
              name="product_description"
              autoFocus
              multiline
              onChange={handleProductDescription}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Price"
              name="price"
              autoFocus
              onChange={handlePrice}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Stock"
              name="stock"
              autoFocus
              onChange={handleStock}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Discount (%)"
              name="discount"
              autoFocus
              onChange={handleDiscount}
            />
            <Button type="submit" variant="outlined" fullWidth sx={{ mt: 2 }}>
              Simpan
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AdminProductPages;
