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
import useFetch from './hooks/useFetch'
import 'sweetalert2/src/sweetalert2.scss'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'
import Animation from './components/animation/Animation'
import CustomerDetails from './pages/customerDetails/CustomerDetails';
import OrderDetails from './pages/orderDetails/OrderDetails';

function App() {

  const { data: promoCodes, } = useFetch("promocodes");
  const { data: customers, } = useFetch("customers");
  const { data: orders, } = useFetch("orders");
  const { data: categories, } = useFetch("categories");
  const { data: products, } = useFetch("products");
  const { data: ordersData, } = useFetch("orders/2039");
  const { data: customer, } = useFetch("customer_details?phone=01148173525");

  const { logged } = useSelector(state => state.login)
  
  console.log(customer)

  return (
    <>
      {
        (!promoCodes || !products || !orders || !categories || !ordersData) && (
          <Animation />
        )
      }
      {
        (orders && products && customers && categories && ordersData && customer) && (
          <BrowserRouter>
            <div className="flex">
              {logged && <SideBar />}
              <div className='bodyContent'>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route
                    path="/dashboard"
                    element={
                      logged ? (
                        <Dashboard orders={orders} products={products} categories={categories} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/products"
                    element={
                      logged ? (
                        <Products products={products} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/products/create"
                    element={
                      logged ? (
                        <CreaeProducts data={categories} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/categories"
                    element={
                      logged ? (
                        <Categories data={categories} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/orders"
                    element={
                      logged ? (
                        <Orders data={orders} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/order/details"
                    element={
                      logged ? (
                        <OrderDetails data={ordersData} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/customers"
                    element={
                      logged ? (
                        <Customers data={customers} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/customers/details"
                    element={
                      logged ? (
                        <CustomerDetails data={customer} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                  <Route
                    path="/promocode"
                    element={
                      logged ? (
                        <PromoCode data={promoCodes} />
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        )
      }
    </>
  )
}

export default App
