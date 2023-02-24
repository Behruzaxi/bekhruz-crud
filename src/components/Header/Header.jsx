import React from 'react'
import {  Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("")
    const [sale, setSale] = useState("")
    const [img, setImg] = useState("")
    const navigate = useNavigate()

    
    let obj = {
        name: name,
        location: location,
        price: price,
        sale: sale,
        img: img
    }
    
    const postdata = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/data", obj).then(res => {
            if(res.status === 201){
                alert(res.statusText );
                 setName("")
                 setLocation("")
                 setPrice("")
                 setSale("")
                 setImg("")
                 navigate("/table")
            }
        })
    }



    return (
        <>
            <Container fluid="md">
                <Row className='justify-content-center mt-5'>
                    <Col xs={6}>
                        <Form onSubmit={postdata}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name"  onChange={(e) => setName(e.target.value)} value={name} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="location"  onChange={(e) => setLocation(e.target.value)} value={location} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>price</Form.Label>
                                <Form.Control type="number" placeholder="price"  onChange={(e) => setPrice(e.target.value)} value={price} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>sale</Form.Label>
                                <Form.Control type="number" placeholder="sale"  onChange={(e) => setSale(e.target.value)} value={sale} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >img</Form.Label>
                                <Form.Control  type="text" placeholder="image-link"  onChange={(e) => setImg(e.target.value)} value={img} required/>
                            </Form.Group>
                            <Button variant="primary" style={{width: "100%"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
