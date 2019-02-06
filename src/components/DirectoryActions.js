import React from 'react';
import {FaChevronUp, FaPlus} from 'react-icons/fa';
import {Col, Nav, NavItem} from 'react-bootstrap';

export default class DirectoryActions extends React.Component{
    render(){
        return(
            <>
                <NavItem>
                    <span onClick={() => this.props.isRoot ? alert('Already at root') : this.props.changePWDParent()} >
                        <FaChevronUp size={'12px'} color={'#999'} title='Go Up'/>Go Up
                    </span>
                </NavItem>
                <NavItem>
                    <span onClick={()=> this.props.showAddForm()}>
                        <FaPlus color={'#999'} title='Add New Folder'/>New Folder
                    </span>
                </NavItem>
            </>
        )
    }
}