import { useState } from 'react';
import { Outlet } from 'react-router-dom';
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

    return (
        <>
            <Header mode={mode} onThemeChange={handlerThemeChange} />
            <section style={{marginTop: 75}} className='container'>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}

export default Layout;