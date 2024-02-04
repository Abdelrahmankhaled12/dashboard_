import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './components/sidebar/SideBar'
import Categories from './pages/categories/Categories'
import Dashboard from './pages/dashboard/Dashboard'
import Products from './pages/products/Products'
import CreaeProducts from './pages/products/create/CreateProducts'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PromoCode from './pages/promocode/PromoCode'
import Orders from './pages/orders/Orders'
import Customers from './pages/customers/Customers'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <div className='bodyContent'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/create" element={<CreaeProducts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/promocode" element={<PromoCode />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<PromoCode />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
