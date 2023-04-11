import React from 'react'
import "../StyleSheet/UpdatedUI.scss"
import { RiUserLine } from 'react-icons/ri';
import { BsTicketPerforatedFill } from 'react-icons/bs';

const UpdatedUi = () => {
    return (
        <div className='ticket-user-container'>
            <div>
                <h2>Last updated on 11/04/2023 15:25</h2>
                <div className='md:flex gap-5 item-center justify-between'>
                    <div className="ticket-available-card">
                        <div className='ticket-counter-header'>
                            <div>
                                <p className='counter-title'><BsTicketPerforatedFill/> Available Tickets*</p>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                        <div className='ticket-counter-container'>
                            <div className='flex item-center justify-between'>
                                <p className="counter-label">Tickets</p>
                                <p className="available-tickets-counter">61448</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-counter-card">
                        <div className='user-counter-header'>
                            <RiUserLine size={18}/>
                            <p className='counter-title'>Logged In Uusers</p>
                        </div>
                        <div className="user-counter-container">
                            <p className="counter-label">Web & App</p>
                            <p className="m-0 login-in-user-count">1218146</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatedUi