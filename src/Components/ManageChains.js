import React from 'react'
import ChainsContainer from './ChainComps/ChainsContainer';
import Container from './Container';

export default function ManageChains() {
    return (
        <Container children={<ChainsContainer/>}/>
    )
}
