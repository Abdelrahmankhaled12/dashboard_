import useFetch from '../../hooks/useFetch'
import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import TableCategories from './table/TableCategories';

const Categories = () => {

    const { data, } = useFetch("categories");

    return (
        <>
            {data && (
                <>
                    <BodyContent>
                        <div className="category">
                            <Title title={"Categories"} />
                            <div className="show_categories show_table">
                                <TableCategories  data={data?.data} />
                            </div>
                        </div>
                    </BodyContent>
                </>
            )}
        </>
    )
}

export default Categories;
