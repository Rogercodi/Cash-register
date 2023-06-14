
export function Screen(props: any): any {
  return (
    <div className=" font w-80 h-14 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 first:mb-3 ">
      <p
      className="text-left text-red-400 bg-slate-300 font-bold p-1"
      >{props.name + '__________________________' + ' ' + props.input}</p>
    </div>
  );
}
