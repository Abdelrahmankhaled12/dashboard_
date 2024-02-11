import BodyContent from '../../components/bodyContent/BodyContent'
import Title from '../../components/title/Title'
import TableProducts from './table/TableProducts'
import StatisticsProducts from './statistics/StatisticsProducts'

const Products = ({ products }) => {

    return (
        <>
            <BodyContent>
                <div className="products">
                    <Title title={"Products"} />
                    <StatisticsProducts data={products?.data} />
                    <div className="show_products show_table">
                        <TableProducts data={products?.data} />
                    </div>
                </div>
            </BodyContent>
        </>
    )
}

export default Products