import React from 'react';
import './index.css';

class Button extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            ative: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            ative: !state.ative //!this.state.ative
        }))
    }

    render(){
        return(
            <button className={`filter__sort__button ${
                                    this.state.ative ? 'selected' : ''
                                }`}
                    onClick={this.handleClick}>
                {this.props.children}
                {this.state.ative ? 'ative' : 'desative'}
            </button>
        )
    }
}

export default Button;