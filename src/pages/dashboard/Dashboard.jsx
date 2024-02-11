import BodyContent from '../../components/bodyContent/BodyContent'
import './style.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Transactions from './components/transactions/Transactions';
import Revenue from './components/revenue/Revenue';
import TotalSales from './components/totalSales/TotalSales';
import TotalRevenueCategory from './components/totalRevenueCategory/TotalRevenueCategory';
import BestSellingProducts from './components/bestSellingProducts/BestSellingProducts';
import LatestProduct from './components/latestProducts/LatestProduct';
import TotalProductsOfCategory from './components/TotalProductsOfCategory/TotalProductsOfCategory';
import image from '../../assets/dashboard.png'
import { TotalCompletedOrders, TotalPendingOrders } from '../orders/statistics/function';

const Dashboard = ({ orders, products, categories }) => {


    return (
        <>
            <BodyContent>
                <div className="dashboard">
                    <div className="sectionOne">
                        <img className='imgg' src={image} alt="Dashboard Image" />
                        <div className="div boxShadow">
                            <div className="text">
                                <h4>Welcome back, Lucy! We've missed you. 👋</h4>
                                <p>Are you ready to start our journey? 🚀</p>
                            </div>
                            <div className="image">
                                <img src={image} alt="Dashboard Image" />
                            </div>
                        </div>
                        <div className="partTwo">
                            <Transactions data={orders} />
                            <Revenue data={orders} />
                        </div>
                    </div>
                    <TotalRevenueCategory />
                    <div className="sectionTwo">
                        <BestSellingProducts products={products} />
                        <div className='partTwo'>
                            <div className="boxes">
                                <div className="box boxShadow">
                                    <div className="top">
                                        <p>Visitors</p>
                                        <MoreVertIcon className='moreVertIcon' />
                                    </div>
                                    <h5>15000</h5>
                                    <div className="footerBox">
                                        <span>+14%</span>
                                        <p>Since last month</p>
                                    </div>
                                </div>
                                <div className="box boxShadow">
                                    <div className="top">
                                        <p>Income</p>
                                        <MoreVertIcon className='moreVertIcon' />
                                    </div>
                                    <h5>15000</h5>
                                    <div className="footerBox">
                                        <span>+14%</span>
                                        <p>Since last month</p>
                                    </div>
                                </div>
                            </div>
                            <TotalProductsOfCategory categories={categories} />
                        </div>
                    </div>
                    <div className="sectionThree">
                        <LatestProduct products={products} />
                        <div className="partTwo">
                            <div className="boxes">
                                <div className="box boxShadow">
                                    <div className="top">
                                        <p>Visitors</p>
                                        <MoreVertIcon className='moreVertIcon' />
                                    </div>
                                    <h5>15000</h5>
                                    <div className="footerBox">
                                        <span>+14%</span>
                                        <p>Since last month</p>
                                    </div>
                                </div>
                                <div className="box boxShadow">
                                    <div className="top">
                                        <p>Income</p>
                                        <MoreVertIcon className='moreVertIcon' />
                                    </div>
                                    <h5>15000</h5>
                                    <div className="footerBox">
                                        <span>+14%</span>
                                        <p>Since last month</p>
                                    </div>
                                </div>
                            </div>
                            <TotalSales />
                            <div className="boxes">
                                <div className="box boxShadow">
                                    <div className="top">
                                        <p>Completed Orders</p>
                                        <MoreVertIcon className='moreVertIcon' />
                                    </div>
                                    <h5>{TotalCompletedOrders(orders?.data)}</h5>
                                    <div className="footerBox">
                                        <span>+17%</span>
                                        <p>Since last month</p>
                                    </div>
                                </div>
                                <div className="box boxShadow">
                                    <div className="top">
                                        <p>Pending Orders</p>
                                        <MoreVertIcon className='moreVertIcon' />
                                    </div>
                                    <h5>{TotalPendingOrders(orders?.data)}</h5>
                                    <div className="footerBox">
                                        <span>+22%</span>
                                        <p>Since last month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sectionFour">
                        <div className="partTwo">
                        </div>
                        <LatestOrders orders={orders} />
                    </div> */}
                </div>
            </BodyContent>
        </>
    )
}

export default Dashboard