import '../Components/Registra.scss'
const Registra = (props) => {
  return (
    <div className="registra">
        <form action="">
            <h1>Registra</h1>
            <label htmlFor="username">Username</label>
            <input id='username' name='user'  type="text" placeholder='username' />
            <label htmlFor="passowrd">Password</label>
            <input placeholder='password' name='password' id='password' type="password" />
            <input id='submit' type="submit" />
            <p>
                <span className='king'>  <input type="checkbox" /> <span className='right'>Keep me signed in</span></span>
                <button> Forgot Password?</button></p>
        </form>
    </div>
  )
}

export default Registra