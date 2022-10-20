import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Components/Signup';
function App() {
  return (
    <BrowserRouter>
    <div className="Epp"> 
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Signup state='login'/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
