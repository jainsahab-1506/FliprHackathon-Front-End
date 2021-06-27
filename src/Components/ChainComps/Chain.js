import React from 'react'
import axios from '../utils/axios';
import {requests} from '../utils/requests';
import { Link, useHistory } from 'react-router-dom';

export default function Chain(props) {

    const chain = props.chain;
    const history = useHistory();

    const deleteChain = () => {
        async function deleteChainData(){
            const request = await axios.delete(requests['deleteChain']+"/"+chain._id);
            return request;
        }

        deleteChainData().then((res) => {
            alert("Deleted");
            history.push(`/chains/manage`);
        }).catch((e)=>{
            console.log(e);
        });
    }

    return (
        <div className="card">
            <div className="card-top">
                <h1 className="sub-head-text">{chain.chainname}</h1>
                <div className={`status-icon ${chain.status? 'green':'red'}`}></div>
            </div>
            <p className="freq-text">{chain.frequency.period} | {chain.frequency.day} | {chain.frequency.time}</p>
            <h5>{chain.emailgroupid.groupName}</h5>
            <div className="card-footer">
                <div className="chain-icons">
                    {!chain.status?<a href="" className="chain-icon"><i className="material-icons">play_arrow</i></a>:
                    <a href="" className="chain-icon"><i className="material-icons">pause</i></a>}
                    <Link to={`/chains/add/${chain._id}`} className="chain-icon"><i className="material-icons">edit</i></Link>
                    <a className="chain-icon" onClick={deleteChain}><i className="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    )
}