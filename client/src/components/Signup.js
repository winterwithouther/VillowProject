


function Signup() {

    

    return <>
        <div>
            <form>
                <label>Username</label>
                <input name="name" placeholder="username" type="text"></input>
                <label>Password</label>
                <input name="password" type="password" placeholder="password"></input>
                <label>Email</label>
                <input name="email" type="email" placeholder="email"></input>
                <label>Phone number</label>
                <input name="phone" type="text" placeholder="(xxx)-(xxx)-(xxxx)"></input>
                <input type="submit" value="Sign up"></input>
            </form>
        </div>
    </>
}

export default Signup