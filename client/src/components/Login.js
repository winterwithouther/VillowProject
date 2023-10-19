import Header from "./Header"


function Login() {
    return <>
        <Header />
        <form>
            <input type="text" name="name" placeholder="username"></input>
            <input type="password" name="password" placeholder="password"></input>
            <input type="submit" value="Log in"></input>
        </form>
    </>
}

export default Login