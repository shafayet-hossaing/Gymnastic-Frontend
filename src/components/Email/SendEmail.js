import React from 'react';
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from 'react-router-dom';
import './SendEmail.css';




const SendEmail = () => {
    return (
        <div className="p-3" style={{background: "#002a30"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-xs-none">
                        <Link style={{color: "white", fontSize: "35px", marginRight: "16px"}}><AiFillTwitterCircle /></Link>
                        <Link style={{color: "white", fontSize: "32px", marginRight: "16px"}}><BsFacebook /></Link>
                        <Link style={{color: "white", fontSize: "35px", marginRight: "16px"}}><AiFillGoogleCircle /></Link>
                        <Link style={{color: "white", fontSize: "35px", marginRight: "16px"}}><MdMarkEmailUnread /></Link>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input className="form-control" type="email" placeholder="You Email"/>
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendEmail;