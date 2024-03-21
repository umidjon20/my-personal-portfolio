import { Navigate, Route,Routes } from 'react-router-dom'
import { Header } from './components'
import { Home,About,Projects,Contact,NotFound } from './pages'
import './App.scss'

function App() {

  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route element={<Navigate to = {'/home'}/>} path={'/'} ></Route> 
      <Route element={<Home/>} path='home' ></Route>
      <Route element={ <About/>} path='about'></Route>
      <Route element={ <Projects/>} path='projects'></Route>
      <Route element={ <Contact/>} path='Contact'></Route>

      <Route element={<NotFound/>} path={'*'}></Route>
    </Routes>

    </main>
    </>
  )
}

export default App
