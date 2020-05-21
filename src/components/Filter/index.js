import React from 'react';
import './index.css';

class Filter extends React.Component{
    render(){
        return(
            <div className="filter__container">
                <section className="filter__section">
                    <div className="search__filter">
                        <input type="text" className="filter__input"/>
                        
                    </div>

                </section>
            </div>
        )
    }
}

export default Filter;