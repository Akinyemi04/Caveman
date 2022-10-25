import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/logx.scss'
import bg from './images/journals.webp'
const Logx = (props) => {
    function submit(e){
        e.preventDefault()
    }
  return (
    <div className='log'>
        <img className='img' src={bg} alt="" />
        <div className='blank'></div>
        <main>
            <img className='small_screen' src={bg} alt="" />
                {!props.state?
                <form action="" onSubmit={submit}>
                <span className='span'><h1>Registration</h1></span>
                <div>
                <label htmlFor='first_name'>First name
                </label>
                <input type="text" name='fname' id='first_name'/>
                </div>
                <div>
                <label htmlFor='last_name'>Last name
                </label>
                <input type="text" name='lname' id='last_name'/>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input className='input' id="username" name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className='input' id="password" name="password" type="password" />
                    {/* <span className='spanner'>Must be 8 or more characters and contain at least 1  number and 1 special character </span> */}
                </div>
                <div>
                    <label htmlFor="contact">Phone number </label>
                    <input name='contact' className='input' type="tel" id='contact' />
                </div>
                <div>
                <label htmlFor="education">Education</label>
            <select className='input' name="Education" id="education">
                <option value=""></option>
                <option value="highschool">High-school</option>
                <option value="college">College</option>
                <option value="tertiary">Tertiary</option>
            </select>
                </div>
                <div>
                <label htmlFor="country">Country</label>
            <input id='country' name='location' type="text" className="input" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name='city' className='input' id='city'/>
                </div>
            
                <input id='submit' type="submit" />
                <footer>Already have an Account?<NavLink className='link' to='/signup'> Sign-in</NavLink></footer>
                </form>:
                <form className='login'>
                    <span className='span'><h1>Sign up</h1></span>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input className='input' name='username' type="text" id='username'/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className='input' type="text" name='password' id='password' />
                    </div>
                    <p><input type='checkbox'/>Remember me?</p>
                    <input id='submit' type="submit" />
                <footer>Already have an Account?<NavLink className='link' to='/login'> Log-in</NavLink></footer>
                </form>
            }
        </main>
    </div>
  )
}

export default Logx