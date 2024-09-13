import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Buttons() {
    const location = useLocation();
    const navigate = useNavigate();

    const pathName = location.pathname;
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handlePrevNavigation = () => {
        if (pathName === "/confirmation") {
            navigate("/address")
            setPrevDisabled(false)
            setIsSubmit(false)
        }
        else if (pathName === "/address") {
            navigate("/");
            setPrevDisabled(true)
            setIsSubmit(false)
        }
    }

    const handleNextNavigation = () => {
        const pathName = location.pathname
        if (pathName === "/") {
            navigate("/address")
            setPrevDisabled(false)
            setIsSubmit(false)
        }
        else if (pathName === "/address") {
            navigate("/confirmation");
            setPrevDisabled(false)
            setIsSubmit(true)
        }
    }

    return (
        <div>
        <button type="button" className="btn btn-primary" onClick={handlePrevNavigation} disabled={prevDisabled} >Previous</button>
        {
            isSubmit ? <button type="button" className="btn btn-secondary">Submit</button> : <button type="button" className="btn btn-secondary" onClick={handleNextNavigation}>Next</button>
        }
        </div>
    )
}

export default Buttons
