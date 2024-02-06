/* eslint-disable react/prop-types */
import { MDBInput } from 'mdb-react-ui-kit';
import Notes from '../../../../components/notes/Notes';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const Price = ({ price, setPrice, error, discount, setDiscount , setDate }) => {
    return (
        <div className="div">
            <h2>Pricing</h2>
            <div className="form">
                <MDBInput
                    label='price'
                    id='price'
                    type='number'
                    className={price === 0 ? "empty" : ""}
                    onChange={(e) => setPrice(e.target.value)}
                    min={1}
                    placeholder='$150'
                    required
                />
                {error && (
                    <p className='error'>Please Enter Price</p>
                )}
            </div>
            <h2>Discount</h2>
            <div className="form">
                <MDBInput
                    label='Discount'
                    id='price'
                    type='number'
                    className={discount === 0 ? "empty" : ""}
                    onChange={(e) => setDiscount(e.target.value)}
                    min={1}
                    placeholder='$50'
                />
            </div>
            <div className="date">
                <LocalizationProvider dateAdapter={AdapterDayjs}  >
                    <DemoContainer
                        components={[
                            'MobileDatePicker',
                        ]}
                    >
                        <DemoItem label="Deadline">
                            <MobileDatePicker
                                defaultValue={dayjs(new Date())}
                                className='inputDate'
                                onChange={e => setDate(e.$d.toISOString())}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <Notes
                text={[
                    "Discount (optional)",
                    "If there is a discount on the product and it has an expiration date, you must choose a date in the event that no expiry date is always chosen."
                ]}
            />
        </div>
    )
}

export default Price