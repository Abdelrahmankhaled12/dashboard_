/* eslint-disable react/prop-types */

import Editor from "./editor/Editor"
import { MDBInput } from 'mdb-react-ui-kit';
import Notes from '../../../../components/notes/Notes'

const ProductInformation = ({ product_name, setProduct_name, product_stock, product_barCode, setBarCode, setProduct_stock, product_description, setProduct_description, error }) => {
    return (
        <div className="productInfo">
            <div className="div">
                <h2>Product information</h2>
                <div className="form">
                    <MDBInput
                        label='Product Name'
                        id='Product_Name'
                        type='text'
                        className={product_name === "" ? "empty" : ""}
                        onChange={(e) => setProduct_name(e.target.value)}
                        required
                        placeholder="e.g. Apple Macbook Retina"
                    />
                    {error[0] && (
                        <p className='error'>Please Ensure That The Product Name is at least 6 characters long</p>
                    )}
                    <Notes
                        text={[
                            "The product name must consist of at least 6 letters"
                        ]}
                    />
                    <div className="gridForm">
                        <MDBInput
                            label='Stock'
                            id='Stock'
                            type='number'
                            className={product_stock === 0 ? "empty" : ""}
                            onChange={(e) => setProduct_stock(e.target.value)}
                            min={0}
                            placeholder="10"
                            required
                        />
                        <MDBInput
                            label='Barcode'
                            id='barcode'
                            type='text'
                            className={product_barCode === "" ? "empty" : ""}
                            onChange={(e) => setBarCode(e.target.value)}
                            placeholder="0123-456"
                        />
                    </div>
                    {error[2] && (
                        <p className='error'>Please Enter Stock</p>
                    )}
                    <Notes
                        text={[
                            "Barcode (optional)",
                            "If the stock is zero, the product will appear to the user normally, but it will appear that it is currently unavailable"
                        ]}
                    />
                    <Editor value_des={product_description} setDesValue={(value) => setProduct_description(value)} />
                    {error[1] && (
                        <p className='error'>Please Enter The Description Of The Product</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductInformation