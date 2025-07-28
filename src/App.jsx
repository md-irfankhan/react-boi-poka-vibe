
import { Outlet } from 'react-router'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {


  return (
    <>
      <div className='max-w-[1250px] mx-auto'>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
