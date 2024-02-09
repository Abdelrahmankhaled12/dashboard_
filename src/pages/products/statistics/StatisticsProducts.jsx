import './style.scss'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useState , useEffect } from 'react';
import { TotalProducts , TotalProductsSold,  TotalProductsStock } from './function';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const StatisticsProducts = ({ data }) => {

    const [ totalProducts , setTotalProducts ] = useState(0)
    const [ totalSold , setTotalSold ] = useState(0)
    const [ totalStock, setTotalStock ] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            const totalProducts = await TotalProducts(data);
            const totalSold = await TotalProductsSold(data);
            const totalStock = await TotalProductsStock(data);
            setTotalProducts(totalProducts);
            setTotalSold(totalSold);
            setTotalStock(totalStock);
        };

        fetchData();
    }, [data]);

    return (
        <div className='statisticsProducts'>
            <div className="grid">
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
                        <p>{totalSold}</p>
                        <span>Total Sold</span>
                    </div>
                    <div className="icon">
                        <DeliveryDiningIcon />
                    </div>
                </div>
                <div className="box">
                    <div className="text">
                        <p>{totalStock}</p>
                        <span>Total Stock</span>
                    </div>
                    <div className="icon">
                        <InventoryIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsProducts