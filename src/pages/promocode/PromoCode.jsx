import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import TablePromoCode from './table/TablePromoCode';

const PromoCode = ({ data }) => {

    return (
        <>
            {data && (
                <>
                    <BodyContent>
                        <div className="promocode">
                            <Title title={"PromoCode"} />
                            <div className="show_promocode show_table">
                                <TablePromoCode  data={data?.data} />
                            </div>
                        </div>
                    </BodyContent>
                </>
            )}
        </>
    )
}

export default PromoCode;

