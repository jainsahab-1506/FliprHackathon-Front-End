import React from 'react'
import Container from './Container'
import ChainForm from './ChainComps/ChainForm'

export default function CreateChain() {
    return (
        <Container children={<ChainForm/>}></Container>
    )
}
