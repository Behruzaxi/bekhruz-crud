// import axios from 'axios'
// import "./style.css";
// import React, { useEffect, useState } from 'react'
// import { Container, Row, Col, Table } from 'react-bootstrap'

// export default function GetData() {

// const [user, setUser] = useState([])

// const getAllData = () => {
//     axios.get("http://localhost:3000/data").then((data) => {
//         setUser(data.data)
//     })
// }

// const delete_func = (id) => {
//     axios.delete(`http://localhost:3000/data/${id}`)
// }

// useEffect(() => {
//     getAllData()
// }, [])

//     return (
//         <>
//             <Container>
//                 <Row className='justify-content-center mt-5'>
//                     <Col xs={10}>
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>First Name</th>
//                                     <th>Location</th>
//                                     <th>Price</th>
//                                     <th>Sale</th>
//                                     <th>Img</th>
//                                 </tr>
//                             </thead>
//                             <tbody className='tble'>

//                                 {user?.map((data) => {
//                                     return (
//                                         <>
//                                 <tr style={{paddingTop: "50px"}}>
//                                     <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.id}</td>
//                                     <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.name}</td>
//                                     <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.location}</td>
//                                     <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.price}</td>
//                                     <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.sale}</td>
//                                     <img style={{width: "200px", height: "140px"}} src={data.img} alt="" />
//                                     <button style={{marginLeft: "30px", padding: "10px, 10px ,10px, 10px", backgroundColor: "red", borderRadius: "8px", color: "white"}}  onClick={() => delete_func(data.id)}>delete</button>
//                                 </tr>   
//                                         </>
//                                     )
//                                 })}


//                             </tbody>
//                         </Table>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }










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
                                    <th> Name</th>
                                    <th> Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody className='tble'>

                                {user?.map((data) => {
                                    return (
                                        <>
                                <tr style={{paddingTop: "50px"}}>
                                    <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.id}</td>
                                    <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.name}</td>
                                    <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.email}</td>
                                    <td style={{fontSize: "30px", paddingTop: "40px"}}>{data.password}</td>
                                    <button style={{marginLeft: "30px", padding: "10px, 10px ,10px, 10px", backgroundColor: "red", borderRadius: "8px", color: "white"}}  onClick={() => delete_func(data.id)}>delete</button>
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
