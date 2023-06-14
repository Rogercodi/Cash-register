
export function Screen(props: any): any {
  return (
    <div className=" font w-80 h-14 bg-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 first:mb-3 ">
      <p
      className="text-left text-lg text-green-400 bg-black font-bold p-1"
      >{props.name + '______________________' + ' ' + props.input}</p>
    </div>
  );
}
