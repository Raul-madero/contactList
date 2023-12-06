'use client'
import { setUser, addUser } from "@/redux/userSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const { default: UserForm } = require("../components/UserForm")

const EditUser = () => {
    const dispatch = useDispatch()
    const params = window.location.search
    const id = params.substring(4)

    console.log(id)
    const getUsers = async () => {
        try {
          const res = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/raul')
          const users = await res.json()
          dispatch(addUser(users))
        } catch (error) {
          console.log(error)
        }
      }
    const getUser = async () => {
        try {
            const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
            const data = await res.json()
            dispatch(setUser(data.id))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
        getUser()
    }, [])
    return (
        <UserForm/>
    )
}

export default EditUser