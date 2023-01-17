import { Link, NavLink } from 'react-router-dom';

function Header({ mode, onThemeChange }) {
    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg fixed-top bg-${mode} navbar-${mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">SB</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className={({ isActive }) => {
                                        return isActive ? "nav-link active" : "nav-link"
                                    }}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/news" className={({ isActive }) => {
                                        return isActive ? "nav-link active" : "nav-link"
                                    }}>Pagination&Class</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/news-inf" className={({ isActive }) => {
                                        return isActive ? "nav-link active" : "nav-link"
                                    }}>InfiniteScroll&Function</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/form" className={({ isActive }) => {
                                        return isActive ? "nav-link active" : "nav-link"
                                    }}>React Form</NavLink>
                                </li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            <div className="form-check form-switch" style={{color: mode === 'light' ? 'black' : 'white'}}>
                                <input onChange={onThemeChange}
                                    className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Theme</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;