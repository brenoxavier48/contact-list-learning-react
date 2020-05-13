import React from 'react'
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'
import './index.css'

class Topbar extends React.Component{

    render(){
        return(
        
        <div className="topbar">
            <LogoSvg className="topbar-logo"/>
        </div>
        );
    }
}

export default Topbar;