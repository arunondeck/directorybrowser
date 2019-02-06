import React from 'react';
import {FaFolder } from 'react-icons/fa';

class Folder extends React.Component{
    render(){
        return (
            <div className="node folder">
                <FaFolder/><span onClick={()=>this.props.changePWDChild(this.props.title)} className="title">{this.props.title}</span>
            </div>
        )
    }
}

export default Folder;