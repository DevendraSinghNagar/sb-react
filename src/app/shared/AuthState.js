import { useState } from 'react'
import AuthContext from './authContext';

const AuthState = (props) => {
    const [state, setState] = useState(props.initialState);

    const updatedState = (val) => {
        setState({ name: val })
    }
    return (
        <AuthContext.Provider value={{ state, updatedState }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
