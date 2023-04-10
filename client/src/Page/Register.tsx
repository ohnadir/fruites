import React, { useState } from 'react'
import "../StyleSheet/Authentication.scss"

const Register = () => {
    const [auth, setAuth] = useState();
    const handleChange = (e:any) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit=()=>{}
    const handleVerify=()=>{}
    return (
        <div className='register'>
            <div>
                <div className='w-[350px] mx-auto h-full pt-10'>
                    <header>
                        <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/auth/verify-nid-illustration.svg" alt="" />
                        <h2 className='m-0 text-center'>Please Verify Your NID</h2>
                        <p className='py-3'>Enter the information below to verify and register your NID with Bangladesh Railway Ticketing Service</p>
                        <p>If your NID is verified through SMS, please use the details used during the SMS verification.</p>
                        
                    </header>
                    <body>
                        <div className='form-card grid grid-cols-1 gap-5'>
                            <input name='phone' onChange={handleChange} type="text" placeholder='Enter Mobile Number' />
                            <input name='nid' onChange={handleChange} type="number" placeholder='Enter NID Number' />
                            <input name='date' onChange={handleChange} type="date" placeholder='Select Date of Birth' />
                            <button onClick={handleVerify}>Verify</button>
                        </div>
                        <p>If you are under 18 years old or a foreign passport holder, you can register with your birth certificate or passport by clicking the submit data button.</p>
                        <button className='submit' onClick={handleSubmit}> SUBMIT DATA</button>
                        <h2>Already Registered</h2>
                    </body>
                </div>
            </div>
        </div>
    )
}

export default Register