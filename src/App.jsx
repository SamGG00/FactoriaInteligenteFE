
import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/login'
import About from './pages/about/about';
import Info from './pages/info/Information';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manage from './pages/manage/Manage';
/* import  {UserProvider}  from './context/userContext'; */
function App() {

  return (
/*     <UserProvider> */
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/About' element= {<About/>}/>
          <Route path='/user' element= {<Manage/>}/>
          <Route path='/Information' element= {<Info/>}/>
          
        </Routes>
      </BrowserRouter>
      /* </UserProvider> */
  )
}

export default App
