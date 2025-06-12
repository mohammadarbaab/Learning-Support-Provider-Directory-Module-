import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import ProviderList from './pages/ProviderList'
import ProviderDetail from './pages/ProviderDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<ProviderList />} />
        <Route path="/providers/:id" element={<ProviderDetail />} />
      </Routes>
    </BrowserRouter>
  )
}