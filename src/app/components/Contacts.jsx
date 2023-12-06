'use client'
const { Container, Row, Col } = require("react-bootstrap")
import profile from "../../img/profile.jpg"
import { faEdit, faEnvelope, faLocationArrow, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

const Contacts = () => {
    const user = useSelector((state) => state.user.users)
    const handleDelete = async (id) => {
        try {
            const userDelete = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                method: 'DELETE'
            })
            const resultado = await userDelete.json()
            window.location.reload()
        } catch (error) {
            alert(error)
        }
    }
    return (
        <Container>
            <Link href="/new" className="btn btn-outline-success my-2">Create Contact</Link>
            {user.map((user, key) => (
                <Row className="border rounded-2" key={key}>
                <Col className="col-3 d-flex align-items-center justify-content-center">
                    <Image className="rounded-2" src={profile} alt="Profile picture" width={100} height={100}/>
                </Col>
                <Col className="col-6 d-flex flex-column align-items-center justify-content-center">
                    <h3>{user.full_name}</h3>
                    <p><FontAwesomeIcon icon={faLocationArrow}/>{user.address}</p>
                    <p><FontAwesomeIcon icon={faPhone}/>{user.phone}</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/>{user.email}</p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Link className="text-dark" href={"/edit?id=" + user.id}><FontAwesomeIcon size="xl"  icon={faEdit}/></Link>
                    <FontAwesomeIcon size="xl"  onClick={(e) => handleDelete(user.id)} className="mx-5 delete" icon={faTrash}/>
                </Col>
            </Row>
            ))}
            
        </Container>
    )
}
export default Contacts