import React, { useState } from 'react'
import "../StyleSheet/TrainInfo.scss"
import trains from "../JSON/train.json"

interface MapItem{
    name:string, 
    id:Number, 
    sear:String 
}
const TrainInfo = () => {
    const [train, setTrain] = useState("")
    const handleClick=(e:string)=>{
        setTrain(e)
        alert(e)
    }
    console.log(train)
    return (
        <div className='train-info'>
            <div className='train-info-container flex flex-col md:flex-row gap-[20px] max-w-7xl mx-auto px-10 lg:px-0 pt-5'>
                <div className='left-card'>
                    <h3>Select Your Preferred Train</h3>
                    <div className='relative'>
                        <div className='train-name-container'>
                            <label htmlFor="" >TRAIN NAME</label>
                            <input type="text" value={train} placeholder="SELECT TRAIN" />
                            {/* train dropdown list */}
                            <div className='train-list-dropdown'>
                                <ul>
                                    {
                                        trains.map((item:any)=> <li onClick={()=>handleClick(item.name)} key={item.id}>{item.name}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <button>SEARCH</button>
                </div>
                <div className=' right-card'>
                    <div>
                        <img className='mx-auto' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/train-information/train-information-illustration.svg" alt="" />
                        <p className='m-0'>Please select your preferred train to see the detailed information of your selected train.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainInfo