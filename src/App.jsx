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
import useFetch from './hooks/useFetch'
import 'sweetalert2/src/sweetalert2.scss'

function App() {

  const { data: promoCodes, } = useFetch("promocodes");
  const { data: customers, } = useFetch("customers");
  const { data:orders, } = useFetch("orders");

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
              <Route path="/promocode" element={<PromoCode data={promoCodes} />} />
              <Route path="/orders" element={<Orders data={orders} />} />
              <Route path="/customers" element={<Customers data={customers} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
