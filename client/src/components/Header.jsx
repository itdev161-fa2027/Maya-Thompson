import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
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
{/* Login and Register links will be add in activity 8*/}
                </nav>
            </div>
        </header>
    );
};

export default Header;