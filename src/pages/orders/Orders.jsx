import useFetch from '../../hooks/useFetch'
import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import TableOrders from './table/TableOrders';
import StatisticsOrders from './statistics/StatisticsOrders';

const Orders = () => {

    const { data, } = useFetch("orders");

    return (
        <>
            {data && (
                <>
                    <BodyContent>
                        <div className="orders">
                            <Title title={"Orders"} />
                            <StatisticsOrders  data={data?.data} />
                            <div className="show_orders show_table">
                                <TableOrders data={data?.data} />
                            </div>
                        </div>
                    </BodyContent>
                </>
            )}
        </>
    )
}

export default Orders