import React from 'react'

const SelectCategory = ({ categories , setCategory }) => {
    return (
        <div>
            <select onChange={(e)=> setCategory(e.target.value)}>
                {categories.map(category => (
                    <option value={category.category_id}>{category.category_name}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCategory