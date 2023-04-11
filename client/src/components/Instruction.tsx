import React from 'react'

const Instruction = () => {
    return (
        <div className='max-w-7xl mx-auto px-10 lg:px-0 my-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div>
                    <img className='mx-auto max-w-full align-middle' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/search.svg" alt="" />
                    <p className='font-[900] text-[27px] leading-7 text-[#333]'>Search</p>
                    <p className='m-0 text-[13px] text-[#333]'>Choose your origin, destination, journey dates and search for trains</p>

                </div>
                <div>
                    <img className='mx-auto max-w-full align-middle' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/select.svg" alt="" />
                    <p className='font-[900] text-[27px] leading-7 text-[#333]'>Select</p>
                    <p className='m-0 text-[13px] text-[#333]'>Select your desired trip and choose your seats</p>
                    
                </div>
                <div>
                    <img className='mx-auto max-w-full align-middle' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/pay.svg" alt="" />
                    <p className='font-[900] text-[27px] leading-7 text-[#333]'>Pay</p>
                    <p className='m-0 text-[13px] text-[#333]'>Pay for the tickets via Debit / Credit Cards or MFS</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Instruction