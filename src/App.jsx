
import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/login'
import About from './pages/about/about';
import Info from './pages/info/Information';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manage from './pages/manage/Manage';
import { UserProvider } from './utils/userContext';
import PrivateRoute from './utils/protectedRoute.jsx'
import NewArticle from './pages/manage/NewArticle.jsx';
import View from './pages/article/View.jsx';
/* import NotFoundPage from './pages/notFound/NotFound' */
/* import  {UserProvider}  from './context/userContext'; */
function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/About' element= {<About/>}/>
          <Route path='/Information' element= {<Info/>}/>
          <Route path="/article/:id" element={<View />}/>
          <Route path="/" element={<PrivateRoute />}>
          <Route path='/New-article'  index element= {<NewArticle/>}/>
          <Route path='/dashboard'  index element= {<Manage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider> 
  )
}

export default App
