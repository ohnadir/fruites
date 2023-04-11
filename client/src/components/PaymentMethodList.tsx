import React from 'react'

const PaymentMethodList = () => {
    return (
        <div className='payment-method-list border'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-7 py-7'>
                <img  src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bkash.png" alt="" />
                <img  src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/rocket.svg" alt="" />
                <img  src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/nagad-32.png" alt="" />
                <img className='h-[43px]' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/master-card.png" alt="" />
                <img className='h-[35px]' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/visa.png" alt="" />
                <img className='h-[43px]' src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/nexus-debit.svg" alt="" />
            </div>
        </div>
    )
}

export default PaymentMethodList