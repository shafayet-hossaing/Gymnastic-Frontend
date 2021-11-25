import React from 'react';
import { FiUsers } from "react-icons/fi";
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import logo from '../../images/logo.png';
import './Header.css';




const Header = () => {
    const {user, logOut} = useData()
    const userName = user?.displayName && user.displayName
    const userImg = user?.photoURL ? <img src={user?.photoURL} width='50' className="img-fluid border-circle" alt="" /> : <FiUsers />
    
    return (
        <>
            <nav style={{lineHeight: "35px"}} className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link  className="navbar-brand fw-bolder" style={{fontSize: "30px"}} to='/home'><img className="img-fluid" style={{width: "50px"}} src={logo} alt="" /> Gymnastics</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 fw-bold mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="user">
                            {userImg}
                        </div>
                        </a>
                        <ul className="dropdown-menu text-center border-0 shadow" aria-labelledby="navbarDropdown">
                            <div className="user">
                                {userImg}
                            </div>
                            <span className="fw-bold me-2">{userName}</span>
                            {
                            user?.email ? <button onClick={logOut}  className="btn btn-light"><Link style={{textDecoration: "none", fontWeight: "bold"}} to="/login">Log Out</Link></button>
                            :
                            <button className="btn btn-light"><Link style={{textDecoration: "none", fontWeight: "bold"}} to="/login">Log In</Link></button>
                        }
                        
                        </ul>
                        </li>
                    </ul>
                        
                    </div>
                </div>
            </nav>
            <div>
            </div>
        </>
    );
};

export default Header;