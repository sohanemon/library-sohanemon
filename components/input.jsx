const Input = (props) => {
  return (
    <>
      <div class='relative'>
        <input
          {...props}
          placeholder=' '
          class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-red-900 bg-transparent rounded-lg border-1 border-red-300 appearance-none dark:text-white dark:border-red-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer'
        />
        <label
          htmlFor={props.name}
          class='absolute text-sm text-red-500 dark:text-red-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-red-800 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
        >
          {props.name}
        </label>
      </div>
    </>
  );
};

export default Input;
