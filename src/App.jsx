import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './components/sidebar/SideBar'
import Categories from './pages/categories/Categories'
import Dashboard from './pages/dashboard/Dashboard'
import Saas from './pages/dashboard/saas/Saas'
import Products from './pages/products/Products'
import CreaeProducts from './pages/products/create/CreateProducts'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PromoCode from './pages/promocode/PromoCode'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <div className='bodyContent'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/SaaS" element={<Saas />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/create" element={<CreaeProducts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/promocode" element={<PromoCode />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
