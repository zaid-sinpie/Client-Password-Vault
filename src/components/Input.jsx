const Input = ({label,id,type="text"}) => {
  return (
    <div className="flex flex-col items-start justify-around gap-[2px]">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} className="border rounded-sm px-2 py-1 outline-none"/>
    </div>
  )
}

export default Input