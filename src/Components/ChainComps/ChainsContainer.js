import {React, useState, useEffect} from 'react'
import axios from '../utils/axios';
import {requests} from '../utils/requests';
import Chain from './Chain';
import { Link } from 'react-router-dom';

export default function ChainsContainer() {
    
    const [chains, setChains] = useState([]);

    useEffect(()=>{
        async function fetchChains(){
            const request = await axios.get(requests['fetchUserChains']);
			return request;
        }
        fetchChains().then((res) => {
			const data = res.data.chains;
			setChains(data);
	  		console.log(data);
		}).catch((e)=>{
			console.log(e);
			setChains([]);
		});
    }, [])

    return (
        <div className="inner">
            <h1>Manage Chains</h1>
            <div className="cards-container">
                {chains && chains.map((chain, index) => <Chain chain={chain}/>)}
                <div className="card add-icon-card">
                    <div className="add-icon">
                        <Link to="/chains/add">
                            <i className="material-icons">
                                add_circle
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
