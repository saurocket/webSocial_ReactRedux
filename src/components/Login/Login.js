

import classes from './Login.module.css'
import FormLogin from "./FormLogin/FormLogin";
import {reduxForm} from "redux-form";
const Login= () => {
    const onSubmit = (fromData) => {
        console.log(fromData);
    }
    return (
       <div>
           <h1>Form</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>
    )
}




const LoginReduxForm  = reduxForm({
    form: 'login', // имя формы в state (state.form.post)
})(FormLogin);




export default Login;


