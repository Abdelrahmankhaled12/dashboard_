import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import 'sweetalert2/src/sweetalert2.scss'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'
import Animation from './components/animation/Animation'

function App() {

  // const { data: promoCodes, } = useFetch("promocodes");
  // const { data: customers, } = useFetch("customers");
  // const { data: orders, } = useFetch("orders");
  // const { data: categories, } = useFetch("categories");
  // const { data: products, } = useFetch("products");

  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <div className='bodyContent'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard  />} />
              {/* <Route path="/products" element={<Products products={products} />} />
              <Route path="/products/create" element={<CreaeProducts data={categories} />} />
              <Route path="/categories" element={<Categories data={categories} />} />
              <Route path="/orders" element={<Orders data={orders} />} />
              <Route path="/customers" element={<Customers data={customers} />} />
              <Route path="/promocode" element={<PromoCode data={promoCodes} />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
