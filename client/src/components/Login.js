

function Login() {
    return <>
        <form>
            <input type="text" name="name" placeholder="username"></input>
            <input type="password" name="password" placeholder="password"></input>
            <input type="submit" value="Log in"></input>
        </form>
    </>
}

export default Login