
import { Outlet } from 'react-router'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {
  

  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    </>
  )
}

export default App
