import useFetch from '../../hooks/useFetch'
import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import TableCustomers from './table/TableCustomers';
import StatisticsCustomers from './statistics/StatisticsCustomers';

const Customers = () => {

  const { data, } = useFetch("customers");

  return (
    <>
      {data && (
        <>
          <BodyContent>
            <div className="customers">
              <Title title={"Customers"} />
              <StatisticsCustomers data={data?.data} />
              <div className="show_customers show_table">
                <TableCustomers data={data?.data} />
              </div>
            </div>
          </BodyContent>
        </>
      )}
    </>
  )
}

export default Customers