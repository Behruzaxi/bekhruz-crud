import axios from 'axios'
import "./style.css";
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

export default function GetData() {

const [user, setUser] = useState([])

const getAllData = () => {
    axios.get("http://localhost:3000/data").then((data) => {
        setUser(data.data)
    })
}

const delete_func = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
}

useEffect(() => {
    getAllData()
}, [])

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={10}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Sale</th>
                                    <th>Img</th>
                                </tr>
                            </thead>
                            <tbody className='tble'>

                                {user?.map((data) => {
                                    return (
                                        <>
                                <tr style={{paddingTop: "50px"}}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.location}</td>
                                    <td>{data.price}</td>
                                    <td>{data.sale}</td>
                                    <td>{data.img}</td>
                                    <button onClick={() => delete_func(data.id)}>delete</button>
                                </tr>   
                                        </>
                                    )
                                })}


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
