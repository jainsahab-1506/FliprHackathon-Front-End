import React from 'react'
import SubContentBox from './SubContentBox'

export default function WhatWeOffer() {
    
    function firstOffer(){
        return (<>
        <div class="left">
            <h1 class="sub-heading">At your own time</h1>
            <p class="center sub-text">Weekly, Monthly, Yearly or recurring, send mails at any time of your choice</p>
            {/* <!-- <a class="dash-btn">Get Started today</a> --> */}
        </div>
        <div class="right">
            {/* <!-- ad image here --> */}
        </div></>)
    }

    function secondOffer(){
        return (<>
        <div class="left">
            <h1 class="sub-heading">Custom email groups</h1>
            <p class="center sub-text">Avoid adding emails everytime for a new chain. Create a custom group for multiple chains.</p>
            {/* <!-- <a class="dash-btn">Get Started today</a> --> */}
        </div>
        <div class="right">
            {/* <!-- ad image here --> */}
        </div></>)
    }
    
    return (
        <div>
            <div class="top center w-50">
                <h1>What do we offer</h1>
                <p class="center sub-head-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi officiis</p>
            </div>
            <SubContentBox content={firstOffer}></SubContentBox>
            <SubContentBox content={secondOffer}></SubContentBox>
        </div>
    )
}
