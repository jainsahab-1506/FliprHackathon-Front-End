import React from 'react'
import { Link } from 'react-router-dom'

export default function TagLine() {
    return (
        <div>
            <div class="sub-content-box">
                    <div class="d-flex center">
                        <div class="left">
                            <h1>Spread the word,<br/>We'll get the pigeons</h1>
                            <div class="dash-btn-container bg-2"><Link to="/mailcred" class="dash-btn">Get Started today</Link></div>
                        </div>
                        <div class="right">
                            {/* ad image */}
                        </div>
                    </div>
                </div>
        </div>
    )
}
