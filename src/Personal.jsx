import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Personal = () => {

  const navigate = useNavigate();
  
  const [loading , setLoading] = useState(false)
  const [name, setName] = useState(localStorage.getItem("personal") ? JSON.parse(localStorage.getItem("personal")).name : "");
  const [email, setEmail] = useState(localStorage.getItem("personal") ? JSON.parse(localStorage.getItem("personal")).email : "");
  const [phone, setPhone] = useState(localStorage.getItem("personal") ? JSON.parse(localStorage.getItem("personal")).phone : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const personalDetails = {
      name,
      email,
      phone
    }
    localStorage.setItem("personal", JSON.stringify(personalDetails))
    setLoading(true)
    setTimeout(() => {
      navigate("/address")
    }, 1000)
  }

  return (
    <div className='h-auto w-auto p-2'>
      <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center'>
          <button type="button"  className='btn btn-primary m-2' disabled={true}>Back</button>
          <button type="submit" className='btn btn-primary m-2'>Next</button>
        </div>
        {
          loading ? <p className='text-center mt-5 text-success'>Loading...</p> : (
            <>
            <h3 className='fs-5 text-danger text-center'>Personal Information</h3>
            <div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="floatingName">Fullname</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="floatingEmail">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="floatingPhone" placeholder="Phone Number"  value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{10}" required />
                <label htmlFor="floatingPhone">Mobile Number</label>
              </div>
            </div>
            </>
          )
        }
      </form>
    </div>
  )
}

export default Personal
