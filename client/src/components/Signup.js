import {useState} from "react"
import Header from "./Header"

function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password, email})
        })
    }

    return <>
        <div>
            <form>
                <label>Username</label>
                <input name="name" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input name="password" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label>Email</label>
                <input name="email" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="submit" value="Sign up"></input>
            </form>
        </div>
    </>
}

export default Signup