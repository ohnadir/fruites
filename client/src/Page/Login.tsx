import { useState } from 'react'
import "../StyleSheet/Authentication.scss"

const Login = () => {
    const [auth, setAuth] = useState();
    const handleChange = (e:any) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    return (
        <div className='login'>
            <div className='login-form'>
                <div >
                    <header className='p-3'>
                        <img src="https://d19qjkjk65tfln.cloudfront.net/img/login-page-logo.png" alt="" />
                        <h1 className='text-center py-3'>Bangladesh Railway</h1>
                        <div>
                            <ul className=''>
                                <li>নিরাপদ</li>
                                <li className='child-two'>আরামদায়ক</li>
                                <li className='child-three'>সাশ্রয়ী</li>
                            </ul>
                        </div>
                    </header>
                    <main>
                        <div className='login-form-container'>
                            <header className=''>
                                <div className='flex justify-between p-3'>
                                    <p className='text-[#da924e] font-semibold'>Forgot Password ?</p>
                                    <p className='text-[#bdc3c6] font-semibold'>Need Help?</p>
                                </div>
                            </header>
                            <body className='grid grid-cols-1 gap-5 mt-5 p-3'>
                                <input name='phone' onChange={handleChange} type="text" placeholder='Enter your mobile number' />
                                <input name='password' onChange={handleChange} type="password" placeholder='Enter your password' />
                                <button className='text-[12px] font-semibold rounded-[4px]'>LOGIN</button>
                                <p className='m-0 text-center'>OR</p>
                                <p className='m-0 text-center underline text-[#006747]'>REGISTER</p>
                            </body>
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default Login