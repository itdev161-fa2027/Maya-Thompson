import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './Header.css';

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    //Returning JSX and only one element at a time
    //Notice how everything here is grouped inside the header
    return (
        <header className="header">
            <div className ="header-container">
                <Link to="/" className = "header-title">
                <h1>My Blog</h1>
                </Link>
                <nav className='header-nav'>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
{/*This is conditional code which switches when user is set or logged in*/}
                    {user ? ( 
                        <>
                        <span className='user-welcome'>
                            Hello, {user.name || 'User'}
                        </span>
                        <button onClick={logout} className='nav-button'>
                            Logout
                        </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className='nav-link'>
                            Register
                            </Link>
                            <Link to="/login" className='nav-link'>
                            Login
                            </Link>
                        </>
                        )}
                </nav>
            </div>
        </header>
    );
};

export default Header;