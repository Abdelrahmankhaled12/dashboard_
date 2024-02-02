/* eslint-disable react/prop-types */
import SelectCategories from './SelectCategories'

const Category = ({ data, setProduct_category , error }) => {
    return (
        <div className="div">
            <h2>Category</h2>
            <div className="form">
                <SelectCategories data={data} setSelected={(value) => setProduct_category(value)} />
            </div>
            {error[0] && (
                <p className='error'>Please choose the category type for this product</p>
            )}
        </div>
    )
}

export default Category