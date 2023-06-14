import { useState } from "react";
import { ButtonF } from "./components/ButtonF.js";
import { checkCashRegister } from "./cashregistercore/index.js";
import { Teclado } from "./components/Teclado.js";
import { ValueScreen } from "./components/ValueScreen.js";
import { ResultScreen } from "./components/ResultScreen.js";

function App() {
  const [price, setPrice] = useState("");
  const [cash, setCash] = useState("");
  const [param, setParam] = useState("price");
  const [status, setStatus] = useState("");
  const [change, setChange] = useState(['']);

  function handleConfirmValues(value: any) {
    if (param === "price") {
      setParam("cash");
      setPrice(value);
    } else if (param === "cash") {
      setParam("price");
      setCash(value);
    }
  };

  function handleDoubleClick() {
    setStatus('');
    setChange(['']);
  };

  function handleConfirmExecute() {

    if(price==="" || cash===""){
      return alert('Introduce valid params')
    } else {
  
    let result = checkCashRegister(Number(price), Number(cash), [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ]);
    setStatus(result.status);
    setChange(result.change);
    setCash('');
    setPrice('');    
  }}

  return (
    <>
    <h1 className="font-bold opacity-75 p-10 text-6xl text-center" >CASH REGISTER</h1>
    <div className="border-4 flex 2-1 justify-center ">
      <Teclado name="test" handleConfirm={handleConfirmValues}></Teclado>
      <div className="flex flex-col p-2">
        <ValueScreen input={[price, cash]}></ValueScreen>
        <ResultScreen
          onClick={handleConfirmExecute}
          onDoubleClick={handleDoubleClick}
          status={[status, change]}
        ></ResultScreen>
      </div>
    </div>
    </>
  );
}

export default App;
