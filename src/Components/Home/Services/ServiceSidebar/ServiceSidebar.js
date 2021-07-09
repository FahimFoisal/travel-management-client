import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceSidebar.css';
import '../../Navbar/Navbar.css';
import { userContext } from '../../../../App';

const ServiceSidebar = () => {
    const [adminEmail,setAdminEmail] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser.email)
    useEffect(() => {
        fetch('https://floating-forest-16007.herokuapp.com/adminEmail/?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdminEmail(data))
    }, []);
    return (
        <nav class="nav flex-column vh-100 ps-2 pt-1" style={{backgroundColor: 'rgb(140,180,64)', position: 'fixed'}}>
            {(adminEmail) && <div>
            <Link class="nav-link active navLinkColor2" to="/orderlist"><i class="fas fa-cart-plus"></i> ORDER LIST</Link>
            <Link class="nav-link navLinkColor2" to="/addService"><i class="fas fa-plus-circle"></i> ADD SERVICE</Link>
            <Link class="nav-link navLinkColor2" to="/manage-service"><i class="fas fa-tasks"></i> MANAGE SERVICES</Link>
            <Link class="nav-link navLinkColor2" to="/makeAdmin"><i class="fas fa-user-shield"></i> MAKE ADMIN</Link>
            </div>}
            <Link class="nav-link navLinkColor2" to="/bookingList"><i class="fas fa-bookmark"></i> BOOKING LIST</Link>
            <Link class="nav-link navLinkColor2" to="/book"><i class="fas fa-cart-plus"></i> BOOK</Link>
            <Link class="nav-link navLinkColor2" to="/reviews"><i class="fas fa-comment-alt"></i> REVIEW</Link>
        </nav>
    );
};

export default ServiceSidebar;