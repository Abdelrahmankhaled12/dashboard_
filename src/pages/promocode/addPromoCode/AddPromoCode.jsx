/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { addPromoCode } from '../../../utils/api';
import RulesPromo from './RulesPromo.';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const AddPromoCode = ({ isOpen, closeModal }) => {

  // Use Storage Values 
  const [promoCodeName, setPromoCodeName] = useState("");
  const [discount, setDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Use Show Errors
  const [checkStartDate, setCheckStartDate] = useState(false)
  const [checkEndDate, setCheckEndDate] = useState(false)
  const [checkPromoCode, setCheckPromoCode] = useState(false)
  const [checkDiscount, setDiscountError] = useState(false)
  const [errorSendApi, setErrorSendApi] = useState(false)

  // Send Data to aoi and Check Errors
  const handleClickButtonForm = () => {
    // Storage Value Check forEach Input before send to api => Default Check is True 
    let checkStartDateApiSend = true;
    let checkEndDateApiSend = true;
    let checkDiscountApiSend = true;
    let checkPromoCodeApiSend;

    // Regular Expression For Promo code Name 
    const promoCodeRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    // Chech Value Input [promo code Name] is same  the condition for Regular Expression
    checkPromoCodeApiSend = promoCodeRegex.test(promoCodeName);

    // In Case value checkPromoCodeApiSend equal  false => Show Error
    if (!checkPromoCodeApiSend) {
      setCheckPromoCode(true)
    } else {
      setCheckPromoCode(false)
    }

    // In Case value discount equal empty  => Show Error And Storage value checkDiscountApiSend equal false
    if (!discount.trim()) {
      setDiscountError(true)
      checkDiscountApiSend = false;
    } else {
      setDiscountError(false)
    }

    // In Case value startDate equal empty  => Show Error And Storage value checkStartDateApiSend equal false
    if (!startDate.trim()) {
      setCheckStartDate(true)
      checkStartDateApiSend = false;
    } else {
      setCheckStartDate(false)
    }

    // In Case value endDate equal empty  => Show Error And Storage value checkEndDateApiSend equal false
    if (!endDate.trim()) {
      setCheckEndDate(true)
      checkEndDateApiSend = false;
    } else {
      setCheckEndDate(false)
    }

    // In Case all check values True Send Api 
    if (checkPromoCodeApiSend && checkDiscountApiSend && checkStartDateApiSend && checkEndDateApiSend) {
      Swal.fire({
        title: "Are you sure?",
        text: `A promo code will be added called ${promoCodeName}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete them"
      }).then((result) => {
        if (result.isConfirmed) {
          addPromoCode(promoCodeName, discount, startDate, endDate)
            .then(responseData => {
              if (responseData.status === 201) {
                Swal.fire({
                  title: "Added!",
                  text: `A new promo code called ${promoCodeName} has been added`,
                  icon: "success"
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.reload();
                  }
                })
              }
            })
            .catch(error => {
              console.log(error)
              setErrorSendApi(true)
            });
        }
      });
    }

  }
  
  return (
    <div className={isOpen ? "addCategory addCategory_active" : "addCategory"}>
      <div className="flex">
        <div style={{ "flex": "1" }} onClick={() => closeModal()}></div>
        <div className="content">
          <div>
            <div className="top">
              <h2>Add PromoCode</h2>
              <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <div className="box">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <MDBInput
                  label='PromoCode Name'
                  id='PromoCode_Name'
                  type='text'
                  className={promoCodeName === "" ? "empty" : ""}
                  onChange={(e) => setPromoCodeName(e.target.value)}
                  required
                  value={promoCodeName}
                />
                {checkPromoCode && (
                  <p className='error'>The name of the promo code must contain numbers and letters and must be at least 6 letters.</p>
                )}
                <MDBInput
                  label='Discount'
                  id='Discount'
                  type='number'
                  className={discount === "" ? "empty" : ""}
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                  required
                  min={1}
                />
                {checkDiscount && (
                  <p className='error'>Please enter discount.</p>
                )}
                <div className="date">
                  <LocalizationProvider dateAdapter={AdapterDayjs}  >
                    <DemoContainer
                      components={[
                        'MobileDatePicker',
                      ]}
                    >
                      <DemoItem label="Start Date">
                        <MobileDatePicker
                          defaultValue={dayjs(new Date())}
                          className='inputDate'
                          onChange={e => setStartDate(e.$d.toISOString())}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                  {checkStartDate && (
                    <p className='error'>Please enter the start date of the promo code</p>
                  )}
                </div>
                <div className="date">
                  <LocalizationProvider dateAdapter={AdapterDayjs}  >
                    <DemoContainer
                      components={[
                        'MobileDatePicker',
                      ]}
                    >
                      <DemoItem label="End Date">
                        <MobileDatePicker
                          defaultValue={dayjs(new Date())}
                          className='inputDate'
                          onChange={e => setEndDate(e.$d.toISOString())}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                  {checkEndDate && (
                    <p className='error'>Please enter the expiration date of the promo code</p>
                  )}
                </div>
                <div className="buttons">
                  <button type="button"
                    onClick={()=> {
                      setCheckStartDate(false)
                      setCheckEndDate(false)
                      setCheckPromoCode(false)
                      setDiscountError(false)
                      setErrorSendApi(false)
                      setDiscount("")
                      setPromoCodeName("")
                      setStartDate("")
                      setEndDate("")
                    }}
                  >discard</button>
                  <button type="sumbit" onClick={() => handleClickButtonForm()}>Publish promoCode</button>
                </div>
                {errorSendApi && (
                  <p className='error'>Error. Please make sure that you are applying the rules correctly</p>
                )}
              </form>
              <RulesPromo />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default AddPromoCode