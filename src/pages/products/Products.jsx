import useFetch from '../../hooks/useFetch'
import BodyContent from '../../components/bodyContent/BodyContent'
import Title from '../../components/title/Title'
import TableProducts from './table/TableProducts'

const Products = () => {

    const { data, } = useFetch("products");
    console.log(data)
    return (
        <>
            { data && (
                <BodyContent>
                    <div className="show_products">
                        <Title title={"Products"} />
                        <TableProducts data={data?.data} />
                    </div>
                </BodyContent>
            )}
        </>
    )
}

export default Products