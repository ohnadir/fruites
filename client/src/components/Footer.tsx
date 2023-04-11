import React from 'react'
import "../StyleSheet/Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='max-w-6xl mx-auto px-10 lg:px-0'>
                <div className='footer-container flex flex-col gap-5 lg:flex-row items-center justify-between'>
                    <div className='logo-container'>
                        <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bangladesh-railway.png" alt="" />
                        <div className="logo-slogan">
                            <p className='slogan'> Bangladesh Railway</p>
                            <p className='bangla-text'>নিরাপদ . আরামদায়ক . সাশ্রয়ী</p>
                        </div>
                    </div>
                    <div className="terms-condition">
                        <p>Terms and Conditions | Privacy Policy </p>
                    </div>
                    <div className="powered-by">
                        <p className='title'>Powered by</p>
                        <p className='company-name'>Shohoz-Synesis-Vincen JV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer