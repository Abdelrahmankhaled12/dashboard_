import TableLatestProducts from './table/TableLatestProducts'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './style.scss'

function last10Elements(arr) {
    if (arr.length <= 5) {
        return arr;
    } else {
        return arr.slice(arr.length - 5);
    }
}


const LatestProduct = ({ products }) => {

    return (
        <div className='latestProducts'>
            <div className="boxShadow">
                <div className="top">
                    <p>latest products</p>
                    <MoreVertIcon className='moreVertIcon' />
                </div>
                <div className="latestProductsTable">
                    <TableLatestProducts data={last10Elements(products.data).reverse()} />
                </div>
            </div>
        </div>
    )
}

export default LatestProduct