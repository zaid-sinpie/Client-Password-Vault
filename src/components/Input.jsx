import { forwardRef } from "react";

const Input = forwardRef(({ id, title, name, type = "text", ...props }, ref) => {
  return (
    <div className="w-full flex flex-col justify-center gap-1">
      <label htmlFor={id}>{title}</label>
      <input
        ref={ref}
        type={type}
        required
        id={id}
        {...props}
        name={name}
        className="border outline-none px-2 py-1 rounded-sm"
      />
    </div>
  );
});

export default Input;
