import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import TableCategories from './table/TableCategories';
import StatisticsCategories from './statistics/StatisticsCategories';
const Categories = ({ data }) => {

    return (
        <>
            {data && (
                <>
                    <BodyContent>
                        <div className="category">
                            <Title title={"Categories"} />
                            <StatisticsCategories data={data?.data} />
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
