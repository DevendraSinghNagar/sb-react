import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Alert from '../shared/Alert';
import AuthState from '../shared/AuthState';
import Footer from './Footer';
import Header from './Header';

function Layout() {
    const [mode, setMode] = useState('light');

    const handlerThemeChange = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#f1f1f1';
            document.title = 'SB Dark mode';
        } else {
            setMode('light');
            document.body.style.backgroundColor = '#fff';
            document.title = 'SB Light mode';
        }
    }
    const [alert, setAlert] = useState(null);
    const handlerShowAlert = ({ type, message }) => {
        setAlert({
            type: type,
            message: message
        });
        setTimeout(() => {
            setAlert(null);
        }, 1000);
    }

    return (
        <AuthState initialState={{ name: 'Devendra Singh' }}>
            <Header mode={mode} onThemeChange={handlerThemeChange} />
            <section style={{ marginTop: 75 }} className='container'>
                <Alert alert={alert} />
                <Outlet />
            </section>
            <Footer showAlert={handlerShowAlert} />
        </AuthState>
    )
}

export default Layout;