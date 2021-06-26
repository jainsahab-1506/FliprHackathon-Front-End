import React from 'react'

export default function Chain(props) {

    const chain = props.chain;

    return (
        <div className="card">
            <div className="card-top">
                <h1 className="sub-head-text">{chain.chainname}</h1>
                <div className={`status-icon ${chain.status? 'green':'red'}`}></div>
            </div>
            <p className="freq-text">{chain.frequency}</p>
            {/* <h5>{chain.emailgroup.groupName}</h5> */}
            <div className="card-footer">
                <div className="chain-icons">
                    <a href="" className="chain-icon"><i className="material-icons">play_arrow</i></a>
                    {/* <!-- <a href="" className="chain-icon"><i className="material-icons">pause</i></a> --> */}
                    <a href="" className="chain-icon"><i className="material-icons">visibility</i></a>
                    <a href="" className="chain-icon"><i className="material-icons">edit</i></a>
                    <a href="" className="chain-icon"><i className="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    )
}