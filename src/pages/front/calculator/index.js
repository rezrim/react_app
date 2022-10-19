import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function CalculatorPages(props) {
  const [angka1, setAngka1] = React.useState(0);
  const [operator, setOperator] = React.useState("+");
  const [angka2, setAngka2] = React.useState(0);
  const [hasil, setHasil] = React.useState(0);

  const hitungSubmit = (value1, value2, valueOperator) => {
    let hasil = 0;
    if (valueOperator === "+") {
      hasil = parseInt(value1) + parseInt(value2);
    } else if (valueOperator === "-") {
      hasil = value1 - value2;
    } else if (valueOperator === "/") {
      hasil = value1 / value2;
    } else if (valueOperator === "*") {
      hasil = value1 * value2;
    } else {
      alert("Pilih Operator");
    }

    setHasil(hasil);
  };

  const handleAngka1 = e => {
    let value1 = e.target.value;
    setAngka1(value1);
    hitungSubmit(value1, angka2, operator);
  };

  const handleAngka2 = e => {
    let value2 = e.target.value;
    setAngka2(value2);
    hitungSubmit(angka1, value2, operator);
  };

  const handleOperator = e => {
    let valueOperator = e.target.value;
    setOperator(valueOperator);
    hitungSubmit(angka1, angka2, valueOperator);
  };

  return (
    <Box>
      <Box sx={{ width: "70%", m:'auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Angka 1"
              variant="outlined"
              onChange={handleAngka1}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel>Operator</InputLabel> 
              <Select value={operator} label="Operator" onChange={handleOperator}>
                <MenuItem value="+">+</MenuItem>
                <MenuItem value="-">-</MenuItem>
                <MenuItem value="/">/</MenuItem>
                <MenuItem value="*">*</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Angka 2"
              variant="outlined"
              onChange={handleAngka2}
            />
          </Grid>
        </Grid>

        <Button sx={{my:3}} variant="contained" onClick={hitungSubmit}>
          Hitung
        </Button>

        <div id="result">
          Hasil dari &nbsp;<span>{angka1}</span>&nbsp;<span>{operator}</span>&nbsp;
          <span>{angka2}</span>&nbsp;=&nbsp;<span>{hasil}</span>
        </div>
      </Box>
    </Box>
  );
}

export default CalculatorPages;
