import React from 'react';
import { FaSearch, FaCaretDown } from 'react-icons/fa'
import './index.css';

class Filter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: false,
            country: false,
            company: false,
            department: false,
            admissionDate: false,
        }
    }

    handleClick(category){
        
        let newState = {}

        for( let key in this.state ){
            newState[key] = false;
        }

        newState[category] = true;

        this.setState(newState)
    }

    render(){
        
        return(
            <div className="filter__container">
                <section className="filter__section">
                    <div className="search__filter">
                        <input type="text"
                               className="filter__input"    
                               placeholder="Pesquisar..."
                               onChange={this.props.filterContent}/>
                        <FaSearch></FaSearch>
                    </div>
                    <button className={`filter__sort__button ${this.state.name ? 'selected' : ''}`}
                            onClick={() => { this.handleClick('name'); this.props.sortContent('name') }}>
                        <div className="text">
                            Nome
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${this.state.country ? 'selected' : ''}`}
                            onClick={() => { this.handleClick('country'); this.props.sortContent('country') }}>
                        <div className="text">
                            País
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${this.state.company ? 'selected' : ''}`}
                            onClick={() => { this.handleClick('company'); this.props.sortContent('company') }}>
                        <div className="text">
                            Empresa
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${this.state.department ? 'selected' : ''}`}
                            onClick={() => { this.handleClick('department'); this.props.sortContent('department') }}>
                        <div className="text">
                            Departamento
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${this.state.admissionDate ? 'selected' : ''}`}
                            onClick={() => { this.handleClick('admissionDate'); this.props.sortContent('admissionDate') }}>
                        <div className="text">
                            Data de admissão
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                </section>
            </div>
        )
    }
}

export default Filter;