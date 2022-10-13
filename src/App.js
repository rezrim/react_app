import React from "react";
import Menu from "./components/Menu";
import logo from "./logo.svg";
import { Container } from "./style/baseStyle";

function App() {
  const [angka1, setAngka1] = React.useState(0)
  const [operator, setOperator] = React.useState("+")
  const [angka2, setAngka2] = React.useState(0)
  const [hasil, setHasil] = React.useState(0)

  const hitungSubmit = (value1, value2, valueOperator) => {
    let hasil = 0
    if(valueOperator==="+"){
      hasil = parseInt(value1)+parseInt(value2)
    }else if(valueOperator==="-"){
      hasil = value1-value2
    }else if(valueOperator==="/"){
      hasil = value1/value2
    }else if(valueOperator==="*"){
      hasil = value1*value2
    }else{
      alert("Pilih Operator")
    }

    setHasil(hasil)
  }

  const handleAngka1 = (e) => {
    let value1 = e.target.value
    setAngka1(value1)
    hitungSubmit(value1, angka2, operator)

  }

  const handleAngka2 = (e) => {
    let value2 = e.target.value
    setAngka2(value2)
    hitungSubmit(angka1, value2, operator)
  }

  const handleOperator = (e) => {
    let valueOperator = e.target.value
    setOperator(valueOperator)
    hitungSubmit(angka1, angka2, valueOperator)
  }

  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="row-between">
            <img src={logo} />
            <Menu user="a" />
            <div>
              <a href="#">Login</a> |
              <a href="register.html"> Register</a>
            </div>
          </div>
        </div>
      </div>

      <div id="form">
        <form action="#">
          <input
            type="number"
            name="angka1"
            placeholder="Masukkan Angka 1"
            onChange={handleAngka1}
          />
          <select name="operator" onChange={handleOperator}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>
          <input
            type="number"
            name="angka2"
            placeholder="Masukkan Angka 2"
            onChange={handleAngka2}
          />
          <input type="button" value="Hitung" onClick={hitungSubmit} />
        </form>
      </div>

      <div id="result">
        Hasil dari &nbsp;<span>{angka1}</span>&nbsp;<span>{operator}</span>&nbsp;
        <span>{angka2}</span>&nbsp;=&nbsp;<span>{hasil}</span>
      </div>
    </div>
  );
}

export default App;
