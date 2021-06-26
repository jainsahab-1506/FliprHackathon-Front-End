import React from 'react'
import SubContentBox from './SubContentBox'

export default function SendBusinessMail() {
    
    function content(){
        return (<>
        <div class="left">
            {/* <!-- ad image here --> */}
        </div>
        <div class="right">
            <h1 class="sub-heading">Set Up your business mails quickly</h1>
            <p class="center sub-text">Get your business up and running by sending out newsletters, updates to your suscribers</p>
            <div class="dash-btn-container bg-1"><a class="dash-btn">Manage chains</a></div>
        </div></>)
    }

    return (
        <div>
            <div class="top center w-50">
                <h1>Send business chain mails</h1>
                <p class="center sub-head-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi officiis unde minima ipsum cumque deserunt aperiam velit nam veritatis voluptatum quo ullam temporibus, ducimus eius ratione officia, neque possimus.</p>
            </div>
            <SubContentBox content={content}></SubContentBox>
        </div>
    )
}
