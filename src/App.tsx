import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MatchStackDemo from './pages/MatchStackDemo.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<MatchStackDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App