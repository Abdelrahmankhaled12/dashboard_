import BodyContent from '../../components/bodyContent/BodyContent'
import './style.scss'
import { calculateMonthlyTotalPrices } from './functions'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Transactions from './components/transactions/Transactions';
import Revenue from './components/revenue/Revenue';
import TotalSales from './components/totalSales/TotalSales';
import TotalRevenueCategory from './components/totalRevenueCategory/TotalRevenueCategory';
import BestSellingProducts from './components/bestSellingProducts/BestSellingProducts';
import LatestOrders from './components/latestOrders/LatestOrders';
import LatestProduct from './components/latestProducts/LatestProduct';
import TotalProductsOfCategory from './components/TotalProductsOfCategory/TotalProductsOfCategory';


const Dashboard = ({ orders, products, categories }) => {

    // calculateMonthlyTotalPrices(orders?.data)
    console.log(products)

    return (
        <>
            <BodyContent>
                <div className="dashboard">
                    <div className="sectionOne">
                        <img className='imgg' src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/illustration-john-2.png" alt="" />
                        <div className="div boxShadow">
                            <div className="text">
                                <h4>Welcome back, Lucy! We've missed you. 👋</h4>
                                <p>Are you ready to start our journey? 🚀</p>
                            </div>
                            <div className="image">
                                <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/illustration-john-2.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="partTwo">
                                <Transactions />
                                <Revenue />
                            </div>
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
                        </div>
                    </div>
                </div>
            </BodyContent>
        </>
    )
}

export default Dashboard