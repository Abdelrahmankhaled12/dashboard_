import './style.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useState , useEffect } from 'react';
import { TotalCategories ,  TotalProducts , TotalEarning} from './function';
import CategoryIcon from '@mui/icons-material/Category';

const StatisticsCategories = ({ data }) => {

    const [ totalCategories , setTotalCategories ] = useState(0)
    const [ totalProducts , setTotalProducts ] = useState(0)
    const [ totalEarning , setTotalEarning] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            const totalCategories = await TotalCategories(data);
            const totalProducts = await TotalProducts(data);
            const totalEarning = await TotalEarning(data);
            setTotalCategories(totalCategories);
            setTotalProducts(totalProducts);
            setTotalEarning(totalEarning.toFixed(2));
        };

        fetchData();
    }, [data]);

    return (
        <div className='statisticsCategories'>
            <div className="grid">
                <div className="box">
                    <div className="text">
                        <p>{totalCategories}</p>
                        <span>Total Categories</span>
                    </div>
                    <div className="icon">
                        <CategoryIcon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{totalProducts}</p>
                        <span>Total Products</span>
                    </div>
                    <div className="icon">
                        <DoneAllIcon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{totalEarning}</p>
                        <span>Total Earning</span>
                    </div>
                    <div className="icon">
                        <MonetizationOnIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsCategories