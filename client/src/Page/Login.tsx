import { useState } from 'react'
import "../StyleSheet/Login.scss"

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
                        <img src="" alt="" />
                        <p className='text-center'>Bangladesh Railway</p>
                        <div>
                            <ul className='flex justify-between'>
                                <li>নিরাপদ</li>
                                <li>আরামদায়ক</li>
                                <li>সাশ্রয়ী</li>
                            </ul>
                        </div>
                    </header>
                    <main>
                        <div className='login-form-container'>
                            <header className=''>
                                <div className='flex justify-between p-3'>
                                    <p>Forgot Password ?</p>
                                    <p>Need Help?</p>
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