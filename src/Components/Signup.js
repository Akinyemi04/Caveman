import '../Components/login.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
const Signup = (props) => {
  function Submit(e){
    e.preventDefault()
  }
  return (
    <div className="state">
      {props.state?<h1>Login</h1>:<h1>Signup</h1>}
      <form action="" onSubmit={Submit} >
        <label htmlFor="username">Username</label>
        <input className='input' id="username" name="username" type="text" />
        <label htmlFor="password">Password</label>
        <input className='input' id="password" name="password" type="password" />
        {!props.state && <span className='spanner'>Must be 8 or more characters and contain at least 1  number and 1 special character </span>}
        {!props.state &&<>
          <label htmlFor="contact">Contact</label>
          <input name='contact' className='input' type="tel" id='contact' />
          <label htmlFor="education">Education</label>
          <select className='input' name="Education" id="education">
            <option value=""></option>
            <option value="highschool">High-school</option>
            <option value="college">College</option>
            <option value="tertiary">Tertiary</option>
          </select>
          <label htmlFor="country">Country</label>
          <input id='country' name='location' type="text" className="input" />
          <label htmlFor="job">Job-Title</label>
          <input type="text" name='job' className='input' id='job'/>
          <label htmlFor="experience"> Years of Experience</label>
          <input type="tel"  name='experience' className='input' id='experience'/>

        </>}
        {props.state && 
        <div className='checkbox'>
        <input name="check" id='check' type="checkbox" />
        <label htmlFor="check">Remember me?</label>
        </div>
        }
        {props.state?
        <input id='submit' type="submit" />:
        <input id='submit' className='submit' type="submit" />
        }
        {props.state && <span className='forget'>Forgot Password?</span>}
      </form>
      <aside className='option'>
          <hr />
          <span>OR</span>
      </aside>

      <footer>
        <div className='design'>
          <a className='red'  href='#'><GoogleIcon className='icon'/></a >
          <a className='blue' href='#' ><FacebookOutlinedIcon className='icon'/></a >
          <a className='blue' href='#' ><LinkedInIcon className='icon'/></a >
        </div>
        {
          props.state?
          <div className='last'>
            <span>Need An Account?</span>
            <NavLink className='rate'  to='/signup'>
                Sign-up
            </NavLink>
          </div>:
          <div className='last'>
            <span>Already a user?</span>
            <NavLink to='/login'className='rate'>Login</NavLink>
          </div>  
        }
      </footer>

    </div>
  )
}

export default Signup