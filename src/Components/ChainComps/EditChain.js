import React from 'react'
import Container from './Container'
import EditChainForm from './EditChainForm'

export default function EditChain() {
    return (
        <div>
            <Container children={<EditChainForm/>}></Container>
        </div>
    )
}
