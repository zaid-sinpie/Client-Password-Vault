const Button = ({ children, fit, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        fit ? "w-fit" : "w-full"
      } rounded-sm text-center bg-blue-300 border border-blue-400 p-1 text-[#e3e3e3] cursor-pointer hover:bg-blue-400`}
    >
      {children}
    </button>
  );
};

export default Button;
