import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Logx from './Components/Logx';
function App() {
  return (
    <BrowserRouter>
    <div className="Epp"> 
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Logx/>}/>
      <Route path='/login' element={<Logx state='login'/>}/>
      <Route path='/logx' element={<Logx/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
