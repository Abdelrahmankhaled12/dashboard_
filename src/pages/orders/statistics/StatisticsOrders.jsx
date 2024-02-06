import './style.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useState , useEffect } from 'react';
import { TotalRefundedOrders , TotalPendingOrders,  TotalCompletedOrders , TotalSpendOrders} from './function';

const StatisticsOrders = ({ data }) => {

    const [ orderCompletde , setOrderCompleted ] = useState(0)
    const [ orderPending , setOrderPending ] = useState(0)
    const [ orderRefunded, setOrderRefunded ] = useState(0)
    const [ totalSpend , setTotalSpend ] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            const orderCompletde = await TotalCompletedOrders(data);
            const orderPending = await TotalPendingOrders(data);
            const orderRefunded = await TotalRefundedOrders(data);
            const totalSpend = await TotalSpendOrders(data);
            setOrderCompleted(orderCompletde);
            setOrderPending(orderPending);
            setOrderRefunded(orderRefunded);
            setTotalSpend(totalSpend.toFixed(2));
        };

        fetchData();
    }, [data]);

    return (
        <div className='statistics'>
            <div className="grid">
                <div className="box">
                    <div className="text">
                        <p>{orderPending}</p>
                        <span>Pending Payment</span>
                    </div>
                    <div className="icon">
                        <CalendarMonthIcon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{orderCompletde}</p>
                        <span>Completed</span>
                    </div>
                    <div className="icon">
                        <DoneAllIcon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{orderRefunded}</p>
                        <span>Refunded</span>
                    </div>
                    <div className="icon">
                        <CurrencyExchangeIcon />
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

export default StatisticsOrders