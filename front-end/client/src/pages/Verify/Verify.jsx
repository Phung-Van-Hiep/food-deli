import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const { url } = useContext(StoreContext)
    const navigate = useNavigate()
    const verifyPayment = async () => {
        try {
            const res = await axios.post(`${url}/api/order/verify`, { success, orderId });
            console.log("sai gi khong" ,  res.data)
            if (res.data?.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (err) {
            console.error("verifyPayment error:", err.message);
            navigate("/");                    // fallback an toàn
        }
    };
    useEffect(() => {
        verifyPayment()
    }, [])
    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    )
}

export default Verify
