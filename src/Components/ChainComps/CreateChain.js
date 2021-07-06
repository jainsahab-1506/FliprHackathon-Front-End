import React from 'react'
import Container from '../Container'
import ChainForm from './ChainForm'
import { useParams } from 'react-router'

export default function CreateChain() {

    const { chainId } = useParams();
    const title = chainId ? "Edit" : "Create";

    return (
        <Container children={<ChainForm chainId={chainId} title={title}/>}></Container>
    )
}
