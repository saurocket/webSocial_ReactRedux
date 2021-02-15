import classes from "./FormLogin.module.css"
import {Field} from "redux-form";
import {Input} from "../../common/FormsControll/FormsControll";
import {required} from "../../../utils/validators/validators";

const FormLogin = (props) => {

    return (
            <form onSubmit={props.handleSubmit} className={classes.form}>
                <div>
                    <Field
                        placeholder={'login'}
                        name={"login"}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        placeholder={'password'}
                        name={"password"}
                        component={Input}
                        validate={[required]}

                    />
                </div>
                <div>
                    Remember me  <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                </div>
                <div>
                    <button>LoginForm</button>
                </div>
            </form>
    )
}
export default FormLogin;