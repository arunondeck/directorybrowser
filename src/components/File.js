import React from 'react';
import { FaFile } from 'react-icons/fa';

class File extends React.Component{
    clickFile(){
        alert("No permission to open file!");
    }

    render(){
        return (
            <div className="node file">
                <FaFile/><a onClick={()=> this.clickFile()} className="title">{this.props.title}</a>
            </div>
        )
    }
}

export default File;