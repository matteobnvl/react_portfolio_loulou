import Header from './header'
import Home from './Home'
import About from './About'
import Projet from './Projet'
import Contact from './Contact'
import NoPage from './NoPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Projet />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
