import React from 'react'
import Header from "../components/Header"
import UpdatedUi from "../components/UpdatedUi"
import Instruction from "../components/Instruction"
import PaymentMethodList from "../components/PaymentMethodList"
import Note from '../components/Note'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div>
            <Header/>
            <UpdatedUi/>
            <Instruction/>
            <PaymentMethodList/>
            <Note/>
            <Footer/>
        </div>
    )
}

export default Home