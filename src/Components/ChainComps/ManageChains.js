<<<<<<< HEAD:src/Components/ManageChains.js
import {React, useEffect} from 'react'
import { useSelector } from "react-redux";
import ChainsContainer from './ChainComps/ChainsContainer';
import Container from './Container';
=======
import React from 'react'
import ChainsContainer from './ChainsContainer';
import Container from '../Container';
>>>>>>> dev:src/Components/ChainComps/ManageChains.js

export default function ManageChains() {
    const authToken = useSelector((state) => state.auth.token);
    useEffect(() => {
      if (!authToken) {
        // dispatch(logOutSuccess({}));
        window.location.href = "/login";
      };
    });
    return (
        <Container children={<ChainsContainer/>}/>
    )
}
