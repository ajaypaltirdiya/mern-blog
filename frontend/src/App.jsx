import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Home/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/profile' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
