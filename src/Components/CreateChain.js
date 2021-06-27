import React from 'react'
import Container from './Container'
import ChainForm from './ChainComps/ChainForm'
import { useParams } from 'react-router'

export default function CreateChain() {

    const { chainId } = useParams();

    return (
        <Container children={<ChainForm chainId={chainId}/>}></Container>
    )
}
