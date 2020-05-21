import React from 'react';
import './index.css';

class Contacts extends React.Component{


    render(){
        return(
            <div className="container">
                <section className="contacts">
                    <article className="contacts__header">
                        <span className="contact__avatar" />
                        <span className="contact__data">Nome</span>
                        <span className="contact__data">Telefone</span>
                        <span className="contact__data">País</span>
                        <span className="contact__data">Admissão</span>
                        <span className="contact__data">Empresa</span>
                        <span className="contact__data">Departamento</span>
                    </article>

                    {this.props.children}
                </section>
            </div>
        )
    }

}

export default Contacts;