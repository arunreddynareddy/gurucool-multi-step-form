import './App.css'
import {Routes, Route} from "react-router-dom"
import Personal from './Personal'
import Address from './Address'
import Confirmation from './Confirmation'

function App() {

  return (
    <div className='min-vh-100 bg-warning d-flex flex-column align-items-center p-5'>
        <h1 className='fs-1 fw-bold text-secondary-emphasis'>GuruCool Multi Step Form</h1>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/address" element={<Address />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    </div>
  )
}

export default App
