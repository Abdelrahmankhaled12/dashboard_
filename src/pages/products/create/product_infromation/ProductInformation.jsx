/* eslint-disable react/prop-types */
import Editor from "./editor/Editor"
import { MDBInput } from 'mdb-react-ui-kit';
import Notes from '../../../../components/notes/Notes'

const ProductInformation = ({ name, setName, stock, barCode, setBarCode, setStock, description, setDescription }) => {
    return (
        <div className="productInfo">
            <div className="div">
                <h2>Product information</h2>
                <div className="form">
                    <MDBInput
                        label='Product Name'
                        id='Product_Name'
                        type='text'
                        className={name === "" ? "empty" : ""}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="e.g. Apple Macbook Retina"
                        value={name}
                    />
                    <div className="gridForm">
                        <MDBInput
                            label='Stock'
                            id='Stock'
                            type='number'
                            className={stock === 0 ? "empty" : ""}
                            onChange={(e) => setStock(e.target.value)}
                            min={0}
                            placeholder="10"
                            required
                        />
                        <MDBInput
                            label='Barcode'
                            id='barcode'
                            type='text'
                            className={barCode === "" ? "empty" : ""}
                            onChange={(e) => setBarCode(e.target.value)}
                            placeholder="0123-456"
                            required
                            value={barCode}
                        />
                    </div>
                    <Notes
                        text={[
                            "If the stock is zero, the product will appear to the user normally, but it will appear that it is currently unavailable"
                        ]}
                    />
                    <Editor value_des={description} setDesValue={(value) => setDescription(value)} />
                </div>
            </div>
        </div>
    )
}

export default ProductInformation