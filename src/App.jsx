
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ProjectListPage from './pages/ProjectListPage'
import CreateProject from './pages/CreateProject'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<ProjectListPage />}></Route>
        <Route path="/projects/create" element={<CreateProject />}></Route>
        <Route path="/*" element={<h2>Page not found</h2>}></Route>
      </Routes>
    </>
  )
}

export default App
