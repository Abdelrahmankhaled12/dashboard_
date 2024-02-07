/* eslint-disable react/prop-types */

import SelectCategory from "./SelectCategory"

const Category = ({ data, setCategory , error }) => {
    return (
        <div className="div">
            <h2>Category</h2>
            <div className="form">
                <SelectCategory categories={data} setCategory={(value) => setCategory(value)} />
            </div>
            {error[0] && (
                <p className='error'>Please choose the category type for this product</p>
            )}
        </div>
    )
}

export default Category