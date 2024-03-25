import { Navigate, Route,Routes } from 'react-router-dom'
import { PageLayout } from './components'
import { Home,About,Projects,Contact,NotFound } from './pages'
import './App.scss'

function App() {

  return (
    <>
 
    
    <Routes>
      <Route element={<Navigate to = {'/home'}/>} path={'/'} ></Route> 
      <Route element = { <PageLayout/> } path='/'>
  
        <Route element={<Home/>} path='home' ></Route>
        <Route element={ <About/>} path='about'></Route>
        <Route element={ <Projects/>} path='work'></Route>
        <Route element={ <Contact/>} path='contact'></Route>
        <Route element={<NotFound/>} path={'*'}></Route>
    
      </Route>
    </Routes>

    
    </>
  )
}

export default App
