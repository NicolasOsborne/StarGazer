import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './pages/Loading'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/loading' element={<Loading />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
    </Router>
  )
}

export default App
