import React from "react";

function ContactCard(props) {
    console.log(props)
    return (
        <div>
            <div className="caontacts">
                <div className="contact-card">
                    <img src="https://images.unsplash.com/photo-1594547021300-467038ef6645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="img" />
                    <h4> {props.contactObj.name} </h4>
                    <p> Phone:
                        <span> 9894658321 </span>
                    </p>

                    <p> Email:
                        <span> {props.contactObj.email} </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;