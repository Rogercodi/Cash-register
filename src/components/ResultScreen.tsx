import { ButtonF } from "./ButtonF";
import { ScreenR } from "./ScreenR";

export function ResultScreen(props: any) {
  return (
    <div className="bg-gray-400 p-2 mt-8 flex flex-col items-center border-solid border-2 border-black border-opacity-40 rounded-md" >
        <ScreenR status={props.status[0]}></ScreenR>
        <ScreenR status={<div>
          <h1 className="text-2xl" >Change is:</h1>
          {props.status[1].map((name:any) => (
                  <li className="p-2" key={name}>
                    {name[0]}
                    <p className="text-lg text-center">{name[1]}€</p>
                  </li>
                ))}

        </div>}>Change is:</ScreenR>
        <ButtonF onClick={props.onClick} onDoubleClick={props.onDoubleClick} >Execute</ButtonF>
        {/* <ButtonF onClick={props.onClick} >Clear</ButtonF> */}
    </div>
  )
};