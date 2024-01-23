import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home/Home'
import Shop from './components/pages/Shop/Shop'
import Profile from './components/pages/Profile/Profile'
import View from './components/pages/View/View'
import Wishlist from './components/pages/Wishlist/Wishlist'
import Login from './components/pages/Login/Login'
import Checkout from './components/pages/Checkout/Checkout'
import Account from './components/pages/Account/Account'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/view' element={<View />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
