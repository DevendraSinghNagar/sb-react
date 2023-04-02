import { useDispatch, useSelector } from "react-redux";
import useFormInput from "../services/useFormInput";
import { incrementByAmount } from "../features/counter/counterSlice";

function Login() {
    const getValueFromStore = useSelector((state) => state.counterApp.value);
    const dispatch = useDispatch();
    const emailField = useFormInput('input');
    const passField = useFormInput('input');
    const checkboxField = useFormInput('checkbox');

    return (
        <form>
            <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
                <input {...emailField} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                <input {...passField} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="mb-3 form-check">
                <input {...checkboxField} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="button" className="btn btn-primary mb-3"
                onClick={() => dispatch(incrementByAmount(21))}>Redux- Increase by 21 </button>

            <pre><code>
                Email:- {emailField.value}<br />
                Pass:- {passField.value}<br />
                Checkbox:- {JSON.stringify(checkboxField.value)}<br />
                Redux Counter Value:- {getValueFromStore}
            </code></pre>
        </form>
    )
}

export default Login;