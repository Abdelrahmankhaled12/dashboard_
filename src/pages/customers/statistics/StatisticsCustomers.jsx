import './style.scss'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useState , useEffect } from 'react';
import { TotalCustomers ,  TotalOrders , TotalSpendOrders} from './function';

const StatisticsCustomers = ({ data }) => {

    const [ totalOrders , setTotalOrders ] = useState(0)
    const [ totalCustomers , setTotalCustomers ] = useState(0)
    const [ totalSpend , setTotalSpend ] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            const totalOrders = await TotalOrders(data);
            const totalCustomers = await TotalCustomers(data);
            const totalSpend = await TotalSpendOrders(data);
            setTotalOrders(totalOrders);
            setTotalCustomers(totalCustomers);
            setTotalSpend(totalSpend.toFixed(2));
        };

        fetchData();
    }, [data]);

    return (
        <div className='statisticsCustomers'>
            <div className="grid">
                <div className="box">
                    <div className="text">
                        <p>{totalCustomers}</p>
                        <span>Total Customers</span>
                    </div>
                    <div className="icon">
                        <Diversity1Icon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{totalOrders}</p>
                        <span>Total Orders</span>
                    </div>
                    <div className="icon">
                        <DoneAllIcon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{totalSpend}</p>
                        <span>Total Spent</span>
                    </div>
                    <div className="icon">
                        <MonetizationOnIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsCustomers