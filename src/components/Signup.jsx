const Signup = () => {
  return (
    <form>
        <div>
            <h1>Sign up</h1>
        </div>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password"/>
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="text" id="confirmPassword"/>
        </div>
        <div>
            <button>Sign Up</button>
        </div>
    </form>
  )
}

export default Signup