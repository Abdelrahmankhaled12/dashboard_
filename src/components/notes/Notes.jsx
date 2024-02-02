/* eslint-disable react/prop-types */
const Notes = ({ text }) => {
    return (
        <div className='notes'>
            <ul>
                {text?.map((ele, index) => (
                    <li key={index}>{ele}</li>
                ))}
            </ul>
        </div>
    )
}

export default Notes