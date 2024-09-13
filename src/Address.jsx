import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Address = () => {

    const navigate = useNavigate();

    const [loading , setLoading] = useState(false)
    const [address1, setAddress1] = useState(localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")).address1 : "");
    const [address2, setAddress2] = useState(localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")).address2 : "");
    const [city, setCity] = useState(localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")).city : "");
    const [state, setState] = useState(localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")).state : "");
    const [zipCode, setZipCode] = useState(localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")).zipCode : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const AddressDetails = {
            address1,
            address2,
            city,
            state,
            zipCode
        }
        localStorage.setItem("address", JSON.stringify(AddressDetails))
        setLoading(true)
        setTimeout(() => {
          navigate("/confirmation")
        }, 1000)
    }

    const handleBack = () => {
      setLoading(true);
      setTimeout(() => {
        navigate("/")
      }, 1000)
    }

  return (
    <div  className='h-auto w-auto p-2'>
      <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center'>
          <button type="button" className='btn btn-primary m-2' onClick={handleBack}>Back</button>
          <button type="submit" className='btn btn-primary m-2'>Next</button>
        </div>
        {
          loading ? <p className='text-center mt-5 text-success'>Loading...</p> : (
            <>
              <h3 className='fs-5 text-danger text-center'>Address Information</h3>
              <div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingAddress1" placeholder="Address1" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
                  <label htmlFor="floatingAddress1">Address Line 1</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingAddress2" placeholder="Address2" value={address2} onChange={(e) => setAddress2(e.target.value)} required />
                  <label htmlFor="floatingEmail">Address Line 2</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingCity" placeholder="City"  value={city} onChange={(e) => setCity(e.target.value)} required />
                  <label htmlFor="floatingPhone">City</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingState" placeholder="State"  value={state} onChange={(e) => setState(e.target.value)} required />
                  <label htmlFor="floatingState">State</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="tel" className="form-control" id="floatingZipCOde" placeholder="Zip Code"  value={zipCode} onChange={(e) => setZipCode(e.target.value)} pattern="[0-9]{6}" required />
                  <label htmlFor="floatingZipCode">Zip Code</label>
                </div>
              </div>
            </>
          ) 
        }
      </form>
    </div>
  )
}

export default Address

