import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Logx from './Components/Logx';
import Admin from './Components/Admin';
import Registra from './Components/Registra';
function App() {
  return (
    <BrowserRouter>
    <div className="Epp"> 
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Logx/>}/>
      <Route path='/login' element={<Logx state='login'/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/script' element={<Registra state='mark'/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
