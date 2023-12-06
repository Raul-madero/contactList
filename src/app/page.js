'use client'
import { useDispatch } from "react-redux";
import Contacts from "./components/Contacts";
import { addUser } from "@/redux/userSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch()
  const getUsers = async () => {
    try {
      const res = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/raul')
      const users = await res.json()
      dispatch(addUser(users))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])
  return <Contacts />;
};

export default Home;