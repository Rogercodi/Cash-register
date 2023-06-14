

type obj = {
  [key: string]: number | string
};

export function ButtonF(props: any) {
  return (
    <button
      className="border-2 h-20 m-3 bg-blue-500  text-white font-bold py-2  rounded-full w-40 hover:bg-green-600  "
      onClick={() => props.click()}
    >{props.children}
    </button>
  );
}
