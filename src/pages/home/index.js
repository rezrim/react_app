import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function HomePages(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: params =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div id="main" class="container">
      <h1 class="text-center">Full Stack Developer</h1>
      <h2 class="text-center">Frontend & Backend</h2>
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat
        libero non erat porttitor, at blandit dolor condimentum. Vivamus quis
        nulla non nisl auctor consectetur fermentum sed diam. Nam vitae quam at
        orci fermentum venenatis. Maecenas varius pulvinar justo, eu porta nibh
        mollis eu.
      </p>
      <p class="text-justify">
        Morbi id justo egestas, vulputate turpis id, elementum est. Aenean
        rutrum dapibus arcu. In euismod quis turpis et dictum. Vivamus commodo
        volutpat lorem. Sed non orci id mi varius gravida et eget enim. Cras
        eleifend pulvinar ligula. Duis quis quam sed sem posuere egestas.
      </p>

      <div style={{ height: 400, width: "100%", marginTop:30 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default HomePages;