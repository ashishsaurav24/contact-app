import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import './ContactList.css'

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                key={contact.id}
                clickHandler={deleteContactHandler}
            />
        );
    });


    return (
        <div className="main ">
            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add</button>
                </Link>

            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    )
};

export default ContactList;
