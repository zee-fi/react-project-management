
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/*" element={<h2>Page not found</h2>}></Route>
      </Routes>
    </>
  )
}

export default App
