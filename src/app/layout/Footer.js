import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../shared/authContext";

function Footer({ showAlert }) {
    const navigate = useNavigate();
    const getContextState = useContext(authContext);
    const { name, updatedState } = getContextState.state;

    return (
        <footer className="fixed-bottom bg-dark pt-2 text-warning">
            <div className="container">
                <p className="col-12">
                    Initaial Context Value... {name}
                    <button className="mx-2 btn btn-sm btn-outline-warning" onClick={updatedState}>Update Context Value</button>
                    <button className="mx-2 btn btn-sm btn-outline-info" onClick={() => showAlert({ type: 'warning', message: 'I am from footrer' })}>Show Alert</button>
                    <button className="mx-2 btn btn-sm btn-outline-danger" onClick={() => navigate('/news')}>Jump on News</button>
                </p>
            </div>
        </footer>
    )
}

export default Footer;