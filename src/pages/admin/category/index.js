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
import React, { useEffect, useState } from "react";
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
};

function AdminCategoryPages(props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [category_name, setCategoryName] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [edit, setEdit] = useState(false);
  const [idDetail, setIdDetail] = useState(0);

  const columns = [
    { field: "no", headerName: "No.", width: 100 },
    { field: "category_name", headerName: "Category Name", width: 200 },
    { field: "active", headerName: "Active", width: 100 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: params => {
        return (
          <div>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="success"
              onClick={() => editData(params.id)}
            >
              Edit
            </Button>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="error"
              onClick={() => deleteData(params.id)}
            >
              Hapus
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => editData(params.id)}
            >
              Detail
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const header = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer 5|QU8UqFPfI5NYoDg2PHjueqYy4iTuIaTj28c5YAqI",
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
  };

  const getDataDetail = id => {
    const header = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer 5|QU8UqFPfI5NYoDg2PHjueqYy4iTuIaTj28c5YAqI",
      },
    };

    axios
      .get(Config.api_url + "category/" + id, header)
      .then(function(response) {
        const value = response.data;
        if (value.status) {
          const val = value.data;

          setIdDetail(id);
          setCategoryName(val.category_name);
          setActive(val.active);
        } else {
          alert(value.message);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const storeData = e => {
    e.preventDefault();

    const header = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer 5|QU8UqFPfI5NYoDg2PHjueqYy4iTuIaTj28c5YAqI",
      },
    };

    const dataBody = {
      category_name,
      active,
    };

    axios
      .post(Config.api_url + "category", dataBody, header)
      .then(function(response) {
        const value = response.data;
        if (value.status) {
          getData();
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

  const updateData = e => {
    e.preventDefault();

    const header = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Bearer 5|QU8UqFPfI5NYoDg2PHjueqYy4iTuIaTj28c5YAqI",
      },
    };

    const dataBody = {
      category_name,
      active,
    };

    axios
      .put(Config.api_url + "category/" + idDetail, dataBody, header)
      .then(function(response) {
        const value = response.data;
        if (value.status) {
          getData();
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
    if (window.confirm("Yakin menghapus data ini ?")) {
      const header = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer 5|QU8UqFPfI5NYoDg2PHjueqYy4iTuIaTj28c5YAqI",
        },
      };

      axios
        .delete(Config.api_url + "category/" + id, header)
        .then(function(response) {
          const value = response.data;
          if (value.status) {
            getData();
            alert(value.message);
          } else {
            alert(value.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  const handleOpen = () => {
    clear();
    setEdit(false);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = event => {
    setActive(event.target.value);
  };

  const handleChangeCategory = event => {
    setCategoryName(event.target.value);
  };

  const editData = id => {
    getDataDetail(id);
    setEdit(true);
    setOpen(true);
  };

  const clear = () => {
    setCategoryName("");
    setActive(0);
    setIdDetail(0);
  };

  return (
    <div>
      <Container>
        <Box>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Typography component={"h2"} variant={"h4"}>
              List Category
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
              rows={dataCategory}
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
            {edit ? "Edit" : "Add"} Data
          </Typography>
          <Box component={"form"} onSubmit={edit ? updateData : storeData}>
            <TextField
              value={category_name}
              sx={{ mb: 2 }}
              margin="normal"
              required
              fullWidth
              label="Category Name"
              name="category_name"
              onChange={handleChangeCategory}
              autoFocus
            />
            <FormControl fullWidth>
              <InputLabel>Active</InputLabel>
              <Select value={active} label="Active" onChange={handleChange}>
                <MenuItem value={1}>Aktif</MenuItem>
                <MenuItem value={0}>Tidak Aktif</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="outlined" fullWidth sx={{ mt: 2 }}>
              Simpan
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AdminCategoryPages;
