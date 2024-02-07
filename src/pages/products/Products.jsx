import useFetch from '../../hooks/useFetch'
import BodyContent from '../../components/bodyContent/BodyContent'
import Title from '../../components/title/Title'
import TableProducts from './table/TableProducts'
import StatisticsProducts from './statistics/StatisticsProducts'

const Products = () => {

    const { data, } = useFetch("products");
    console.log(data)
    return (
        <>
            {data && (
                <BodyContent>
                    <div className="products">
                        <Title title={"Products"} />
                        <StatisticsProducts data={data?.data} />
                        <div className="show_products show_table">
                            <TableProducts data={data?.data} />
                        </div>
                    </div>
                </BodyContent>
            )}
        </>
    )
}

export default Products