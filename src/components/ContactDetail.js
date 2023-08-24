import React from "react";
import user1 from "../images/user1.png"
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    console.log(props)
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user1} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        Ashish
                    </div>
                    <div className="description">ashish@gmail.com</div>
        </div>
                    <Link to="/">
                <button className="ui button blue center aligned container">Back</button>
                </Link>

                </div>
                
                
            </div>
            
    )
}

export default ContactDetail;

