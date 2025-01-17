import './App.css'
import { Routes, Route } from "react-router-dom"
import Main from './layouts/Main'
import Home from './pages/Home/home.jsx'
import Details from './pages/Details'
import Add from './pages/Add'
import Wishlist from './pages/Wishlist'
import NotFound from './pages/Notfound'
function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/menu/:id' element={<Details />} />
          <Route path='/add' element={<Add />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App