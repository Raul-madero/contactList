'use client'
import Link from "next/link"
import { useState } from "react"
import { useSelector } from "react-redux"
const { Form, FormGroup, FormLabel, FormControl, Button } = require("react-bootstrap")

const UserForm = () => {
    const user = useSelector((state) => state.user.user)
    const [full_name, setFull_name] = useState(user.full_name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [address, setAddress] = useState(user.address)
    const handleChange = (e) => {
        switch (e.target.name) {
            case "full_name":
                setFull_name(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "phone":
                setPhone(e.target.value)
                break;
            default:
                setAddress(e.target.value)
                break;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const create = await fetch(
                user.id ? `https://playground.4geeks.com/apis/fake/contact/${user.id}` 
                : "https://playground.4geeks.com/apis/fake/contact/"
            , {
                method: 'POST',
                body: JSON.stringify({
                    "full_name": full_name,
                    "email": email,
                    "agenda_slug": "raul",
                    "address": address,
                    "phone": phone
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const res = await create.json()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        setFull_name("")
        setAddress("")
        setEmail("")
        setPhone("")
    }
    return (
        <Form className="bg-light p-3 border border-2 rounded-3 container-md" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-center">Llena los datos de contacto</h1>
            <Link href="/" className="btn btn-outline-primary my-2">Volver</Link>
            <FormGroup controlId="FormFullName">
                <FormLabel>Nombre Completo:</FormLabel>
                <FormControl value={full_name} name="full_name" onChange={(e) => handleChange(e)} type="text" placeholder="Tu nombre"/>
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
                <FormLabel>Correo electronico:</FormLabel>
                <FormControl value={email} name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Tu email" />
            </FormGroup>
            <FormGroup controlId="formPhone">
                <FormLabel>Tu telefono:</FormLabel>
                <FormControl value={phone} name="phone" onChange={(e) => handleChange(e)} type="text" placeholder="Tu telefono"/>
            </FormGroup>
            <FormGroup controlId="formAddress">
                <FormLabel>Tu dirección:</FormLabel>
                <FormControl value={address} name="address" onChange={(e) => handleChange(e)} type="text" placeholder="Calle y numero"/>
            </FormGroup>
            <Button type="submit" variant="outline-success" className="my-2">{user.id? "Editar" : "Crear"}</Button>
        </Form>
    )
}

export default UserForm