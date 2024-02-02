const RulesPromo = () => {
    return (
    <div className='rules'>
            <h6>Rules</h6>
            <ul>
                <li>The name of the promo code must contain numbers and letters and must be at least 6 letters. All letters must be capital. If you enter small letters, they will be converted to capital automatically.</li>
                <li>The same promo code name must not be repeated</li>
                <li>The discount is calculated per cent, meaning if you choose 5, this means that the discount will be 5 per cent of the amount.</li>
                <li>The end date must be not before or the same as the start date</li>
            </ul>
        </div>
    )
}

export default RulesPromo