import React, { EffectCallback } from "react";
import { Button } from "../components/Button";
import { Screen } from "./Screen";
import { ButtonF } from "../components/ButtonF";
import { useState, useEffect } from "react";

export function Teclado(props: any) {

  const [entry, setEntry] = useState("");

  const clearInput = () => {
    setEntry('')
  }

  const setInput = (value: string) => {
    setEntry(entry + value);
  };

  return (
    <div className="bg-gray-400 border-solid border-2 border-black border-opacity-40 rounded-md mt-2 h-1/3 flex flex-col items-center justify-center">
      <div className="m-2">
        <Screen name="Value" input={entry}></Screen>
      </div>
      <div>
        <Button name={props.name} onClick={setInput}>
          1
        </Button>
        <Button name={props.name} onClick={setInput}>
          2
        </Button>
        <Button name={props.name} onClick={setInput}>
          3
        </Button>
      </div>
      <div>
        <Button name={props.name} onClick={setInput}>
          4
        </Button>
        <Button name={props.name} onClick={setInput}>
          5
        </Button>
        <Button name={props.name} onClick={setInput}>
          6
        </Button>
      </div>
      <div>
        <Button name={props.name} onClick={setInput}>
          7
        </Button>
        <Button name={props.name} onClick={setInput}>
          8
        </Button>
        <Button name={props.name} onClick={setInput}>
          9
        </Button>
      </div>
      <div>
        <Button name={props.name} onClick={setInput}>
          0
        </Button>
        <Button name={props.name} onClick={setInput}>
          .
        </Button>
        <Button name={props.name} onClick={clearInput}>
          C
        </Button>
      </div>
      <ButtonF
        onClick={() => {
          props.handleConfirm(entry);
          setEntry("");
        }}
      >
        Confirm
      </ButtonF>

      {/* <button 
    type='submit' 
    className=" border-2 w-40 h-20 m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
    onClick={() => props.test(entry)}
    > Confirm
    </button> */}
    </div>
  );
}
