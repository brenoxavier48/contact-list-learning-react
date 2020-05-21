import React from 'react';
import './index.css';

class Contact extends React.Component{

    render(){

        const { contact_data } = this.props;
        
        return(
            <article className="contact">
                <span className="contact__avatar">
                    <img 
                        src={contact_data.avatar} 
                        alt={contact_data.name} />
                </span>
                <span className="contact__data contact__name">{contact_data.name}</span>
                <span className="contact__data">{contact_data.phone}</span>
                <span className="contact__data">{contact_data.country}</span>
                <span className="contact__data">{
                    new Date(contact_data.admissionDate).toLocaleDateString()
                }</span>
                <span className="contact__data">{contact_data.company}</span>
                <span className="contact__data">{contact_data.department}</span>
            </article>
        )
    }
}

export default Contact;