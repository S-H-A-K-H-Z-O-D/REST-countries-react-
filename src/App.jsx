import { useEffect, useState } from "react"
import axios from "axios"
import { Form } from "./components/form/form.component"

function App() {

  let [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {

      console.log(res.data)
      setUsers(res.data)
    })
  }, [])

  return (
    <>
      <Form users={users} setUsers={setUsers}/>
    </>
  )
}

export default App
