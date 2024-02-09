import BodyContent from '../../components/bodyContent/BodyContent'
import './style.scss'
import { calculateMonthlyTotalPrices } from './functions'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Transactions from './components/transactions/Transactions';
import Revenue from './components/revenue/Revenue';
import TotalSales from './components/totalSales/TotalSales';
import TotalRevenueCategory from './components/totalRevenueCategory/TotalRevenueCategory';
import BestSellingProducts from './components/bestSellingProducts/BestSellingProducts';


const Dashboard = () => {

    // calculateMonthlyTotalPrices(orders?.data)

    return (
        <>
            <BodyContent>
                <div className="dashboard">
                    <div className="grid grid_two">
                        <div>
                            <div className="div boxShadow" style={{marginBottom:"20px"}}>
                                <div className="text">
                                    <h4>Welcome back, Lucy! We've missed you. 👋</h4>
                                    <p>Are you ready to start our journey? 🚀</p>
                                </div>
                                <div className="image">
                                    <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/illustration-john-2.png" alt="" />
                                </div>
                            </div>
                            <TotalRevenueCategory />
                        </div>
                        <div>
                            <div className="gridTwo">
                                <Transactions />
                                <Revenue />
                            </div>
                            <TotalSales />
                        </div>


                    </div>
                    <div className="boxes grid grid_four">
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
                        <div className="box boxShadow">
                            <div className="top">
                                <p>Pending Orders</p>
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
                                <p>Completed Orders</p>
                                <MoreVertIcon className='moreVertIcon' />
                            </div>
                            <h5>15000</h5>
                            <div className="footerBox">
                                <span>+14%</span>
                                <p>Since last month</p>
                            </div>
                        </div>
                    </div>
                    <BestSellingProducts />
                </div>
            </BodyContent>
        </>
    )
}

export default Dashboard