import React from 'react';
import { FaSearch, FaCaretDown } from 'react-icons/fa'
import './index.css';

class Filter extends React.Component{
    render(){
        return(
            <div className="filter__container">
                <section className="filter__section">
                    <div className="search__filter">
                        <input type="text" className="filter__input" placeholder="Pesquisar..."/>
                        <FaSearch></FaSearch>
                    </div>
                    <button className={`filter__sort__button ${false ? 'selected' : ''}`}>
                        <div className="text">
                            Nome
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${true ? 'selected' : ''}`}>
                        <div className="text">
                            País
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${false ? 'selected' : ''}`}>
                        <div className="text">
                            Empresa
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${false ? 'selected' : ''}`}>
                        <div className="text">
                            Departamento
                        </div>
                        <FaCaretDown></FaCaretDown>
                    </button>
                    <button className={`filter__sort__button ${true ? 'selected' : ''}`}>
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