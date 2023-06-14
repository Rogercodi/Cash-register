export function ScreenR(props: any): any {
  return (
    <div className="first-of-type:text-center first-of-type:text-3xl bg-black text-green-500 font-extrabold w-80 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 first:mb-3 ">
      {props.status}
    </div>
  );
}
