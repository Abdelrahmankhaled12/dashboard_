/* eslint-disable react/prop-types */
import { MDBInput } from 'mdb-react-ui-kit';
import Notes from '../../../../components/notes/Notes';

const Price = ({ product_priceOld, product_priceNew, setProduct_priceOld, setProduct_priceNew, error }) => {
    return (
        <div className="div">
            <h2>Pricing</h2>
            <div className="form">
                <MDBInput
                    label='Old price'
                    id='Old_price'
                    type='number'
                    className={product_priceOld === 0 ? "empty" : ""}
                    onChange={(e) => setProduct_priceOld(e.target.value)}
                    min={1}
                    required
                    placeholder='$150'
                />
                {error[0] && (
                    <p className='error'>Please Enter Old Price</p>
                )}
                <MDBInput
                    label='New price'
                    id='New_price'
                    type='number'
                    className={product_priceNew === 0 ? "empty" : ""}
                    onChange={(e) => setProduct_priceNew(e.target.value)}
                    min={1}
                    placeholder='$150'
                    required
                />
                {error[1] && (
                    <p className='error'>Please Enter New Price</p>
                )}
            </div>
            <Notes
                text={[
                    "In the event that there is no discount on the product, the old price and new price will be entered with the same value, and it will automatically appear to the user that there is no discount on this product."
                ]}
            />
        </div>
    )
}

export default Price