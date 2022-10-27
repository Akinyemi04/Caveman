import '../Components/admin.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import admin from './images/admin.jpg'
import dark from './images/dark-face.jpg'
const Admin = (props) => {
  function submit(e){
    e.preventDefault()
  }
  return (
    <div className='parent'>
        <main>
          <form action="" onSubmit={submit}>  
          {!props.state?<h1>Admin</h1>:<h1>Registra</h1>}
          <p> Sign in to your account</p>
          <section>
            <span><AccountCircleIcon className='icon'/></span>
            <input className='input' placeholder='Username' name='username' id='username' type="text" />
            </section>
            <section>
              <span><LockOpenIcon className='icon'/></span>
              <input className='input' placeholder='Password' id='password' type="password" />
            </section>
            <input className='submit' type="submit" />
          </form>
          {!props.state?<img src={admin} alt="" />:<img src={dark} alt=''/>}
        </main>
    </div>
  )
}

export default Admin