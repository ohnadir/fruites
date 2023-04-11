import { useState } from 'react'
import "../StyleSheet/Header.scss"

const Header = () => {
    const [destination, setDestination] = useState();
    const handleChange = (e:any) => {
        setDestination(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    return (
        <div className='mt-5 max-w-7xl mx-auto px-10 lg:px-10 '>
            <div className='header md:flex items-center gap-10'>
                <div className='w-[100%] md:w-[50%]'>
                    <div className='form-container grid grid-cols-1 md:grid-cols-2 gap-5 '>
                        <div>
                            <label htmlFor="From">From</label>
                            <input type="text" name="from" onChange={handleChange} placeholder='From Station' />
                        </div>
                        <div>
                            <label htmlFor="From">To</label>
                            <input type="text" name="to" onChange={handleChange} placeholder='To Station' />
                        </div>
                        <div>
                            <label htmlFor="From">Date of Journey</label>
                            <input type="date" name="date_of_journey" onChange={handleChange} placeholder='Pick a date' />
                        </div>
                        <div >
                            <label htmlFor="From">Choose a Class</label>
                            <select name="class" onChange={handleChange} id="cars">
                                <option value="volvo">Choose a Class</option>
                                <option value="">AC_B</option>
                                <option value="AC_S">AC_S</option>
                                <option value="SNIGDHA">SNIGDHA</option>
                                <option value="F_BERTH">F_BERTH</option>
                                <option value="F_SEAT">F_SEAT</option>
                                <option value="F_CHAIR">F_CHAIR</option>
                                <option value="S_CHAIR">S_CHAIR</option>
                                <option value="SHOVAN">SHOVAN</option>
                                <option value="SHULOV">SHULOV</option>
                                <option value="AC_CHAIR">AC_CHAIR</option>
                            </select>
                        </div>
                    </div>
                    <button>SEARCH TRAINS</button> 
                </div>
                <div className='w-[100%] md:w-[50%]'>
                    <img className='rounded-[8px]' src="https://eticket.railway.gov.bd/v2/assets/img/home/home-banner-campaign-05-04-2023.webp?v=1.0" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header