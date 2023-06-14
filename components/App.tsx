import { useState } from "react";
import { Button } from "./components/Button.js";
import { ButtonF } from "./components/ButtonF.js";
import { Screen } from "./components/Pantalla.js";
import { ScreenR } from "./components/PantallaResult.js";
import { checkCashRegister } from "./cashregistercore/index.js";
// import { Teclado } from "./components/Teclado"



function App() {
  const [value, setValue] = useState("price");
  const [entry, setEntry] = useState("");
  const [price, setPrice] = useState("");
  const [cash, setCash] = useState("");
  const [status, setStatus] = useState("");
  const [change, setChange] = useState([]);

  const setInput = (value: string) => {
    setEntry(entry + value);
  };




 
  const reset = () => {
    setPrice("");
    setCash("");
    setStatus('')
  };

  const executeFunction = (
    num1 = parseFloat(price),
    num2 = parseFloat(cash)
  ) => {
    const obj = checkCashRegister(num1, num2, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 30],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ]);
    //   console.log(typeof obj.status)
    setStatus(obj.status);
    setChange(obj.change);
  };

  var key = 1;

  return (
    <div>
      <div className="border-4 rounded-xl flex flex-col items-center border-gray-600 mt-10 max-w-lg bg-slate-400  p-8">
        <div className=" border-2 rounded-xl">
          <Screen input={entry} name="Entry"></Screen>
          <Screen input={price} name="Price"></Screen>
          <Screen input={cash} name="Cash"></Screen>
        </div>
        {/* <div>
          <Teclado 
          data={entry} 
          ></Teclado>
        </div> */}

        <div>
          <Button click={setInput}>1</Button>
          <Button click={setInput}>2</Button>
          <Button click={setInput}>3</Button>
        </div>
        <div>
          <Button click={setInput}>4</Button>
          <Button click={setInput}>5</Button>
          <Button click={setInput}>6</Button>
        </div>
        <div>
          <Button click={setInput}>7</Button>
          <Button click={setInput}>8</Button>
          <Button click={setInput}>9</Button>
        </div>
        <div>
          <Button click={setInput}>0</Button>
          <Button click={setInput}>.</Button>
          <ButtonF click={reset}>Reset</ButtonF>
        </div>
        <div>
          <ButtonF click={confirmValue}>Confirm</ButtonF>
          <ButtonF click={executeFunction}>Execute Function</ButtonF>
        </div>
        <div>
          <ScreenR input={status}></ScreenR>
          <ScreenR
            input={
              <div className="container">
                <h1 className="text-center text-xl"> CHANGE IS:</h1>

                {change.map((name) => (
                  <li className="p-2" key={name}>
                    {name[0]}
                    <p className="text-lg text-center">{name[1]}€</p>
                  </li>
                ))}
              </div>
            }
          ></ScreenR>
        </div>
      </div>
      
    </div>
  );
}

export default App;
