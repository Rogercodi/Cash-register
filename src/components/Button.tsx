

type obj = {
  [key: string]: number | string
};

export function Button(props: any) {
  return (
    <button
      name={props.name}
      className=" border-2 w-20 h-20 m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => props.onClick(props.children)}
      
    >{props.children}
    </button>
  );
}
