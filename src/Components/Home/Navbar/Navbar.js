import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../logo/logo2.png';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light navBarBG" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    {/* <img src={logo} alt="" height="100" /> */}
                    <h4 className="navLinkColor">FlyingBird</h4>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link me-5 navLinkColor" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 navLinkColor" to="/book">BOOK</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 navLinkColor" to="/contact">CONTACT</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 navLinkColor" to="#">BLOG</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5 navLinkColor" to="/admin">ADMIN</Link>
                        </li>
                        {loggedInUser.email ? <li class="nav-item d-flex">
                            <Link class="nav-link me-5 navLinkColor" to="/Login">{loggedInUser.displayName.toUpperCase()}</Link>
                            <img style={{ height: '40px' }} class="rounded-circle" src={loggedInUser.photo} alt="" srcset="" />
                        </li> : <li class="nav-item">
                            <Link class="nav-link me-5 navLinkColor" to="/Login">LOGIN</Link>
                        </li>}
                    </ul>

                </div>
            </div>
        </nav>
    );
};
export default Navbar;