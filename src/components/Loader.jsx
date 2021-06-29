import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
export default function Loader() {
    return (
        <Container className="d-flex justify-content-center align-items-center ">

            <Spinner animation="grow" variant="info" />     

        </Container>
    )
}
