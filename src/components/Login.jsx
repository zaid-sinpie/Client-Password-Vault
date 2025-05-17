import Button from "./Button";
import Input from "./Input";

const Login = () => {
  return (
    <form className="flex flex-col h-fit gap-[5px] justify-around items-center">
        <div className="w-full text-center uppercase font-bold text-xl">
            <h1>Login</h1>
        </div>
        <Input label={"Username"} id={"username"}/>
        <Input label={"Password"} id={"password"} type="password"/>
        <div className="w-full">
            <Button>Login</Button>
        </div>
    </form>
  )
}

export default Login