import Header from "./Header"
import { useRef } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import {useHistory} from "react-router-dom"

function Login({updateUser}) {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name : yup.string().required("Please enter name"),
        // password : yup.string().required("Please enter password")
    })

    const formik = useFormik({
        initialValues : {
            name : ""
            // password : "",
        },
        validationSchema : formSchema,
        onSubmit : (values) => {
            fetch("/login", {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify(values, null, 2)
            })
            .then(response => response.json())
            .then(user => {
                updateUser(user)
                history.push("/")
            })
        }
    })

    console.log("hi")

    return <>
        <Header/>
        <form onSubmit={formik.handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="username" 
                value={formik.values.name} 
                onChange={formik.handleChange}>
                        
            </input>
            <input 
                type="password" 
                name="password" 
                placeholder="password" 
                value={formik.values.password} 
                onChange={formik.handleChange}>
                        
            </input>
            <input type="submit" value="Log in"></input>
        </form>
    </>
}

export default Login