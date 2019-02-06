import React from 'react';
import {connect} from 'react-redux';
import actionTypes from '../actions/actionTypes';
import {Row, Col, Grid, Navbar, Nav, NavItem} from 'react-bootstrap';
//import DirectoryTitle from './DirectoryTitle.js';
import DirectoryActions from './DirectoryActions.js';
import File from './File.js';
import Folder from './Folder.js';
import FormAddNew from './FormAddNew';

class TreeViewContainer extends React.Component{
    constructor(props) {
        super(props);
        this.showAddForm = this.showAddForm.bind(this);
        this.hideAddForm = this.hideAddForm.bind(this);
        this.state = {
            showAddForm: false,
        };
    }

    showAddForm(){
        this.setState({showAddForm: true});
    }

    hideAddForm() {
      this.setState({ showAddForm: false });
    }

    render(){
        let formHTML = this.state.showAddForm ? <FormAddNew hideAddForm = {this.hideAddForm} addFolder={this.props.addFolder} addFile={this.props.addFile} /> : ''
        return(
            <Grid xs={12} md={10} frameBorder={1} className='border border-dark'>
                    <Row className='directory-header'>
                        <Navbar bg="light" expand="lg">
                            <Row className='title'>
                                <Col xs={12}><Navbar.Brand>File-Folder Manager</Navbar.Brand></Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Nav className="mr-auto">
                                        <NavItem disabled className="pwd-title"> 
                                            {this.props.pwd.title}
                                        </NavItem>
                                        <DirectoryActions showAddForm = {this.showAddForm} changePWDParent={this.props.changePWDParent} isRoot={this.props.pwd.isRoot}/>
                                    </Nav>
                                </Col>
                            </Row>
                        </Navbar>
                    </Row>
                    <Row className='directory-body'>
                        <Col>
                        {this.props.pwd.children.map(
                            (childNodePath) => this.props.nodes[childNodePath].type == 'file' ? <File key={childNodePath} path={childNodePath} title={this.props.nodes[childNodePath].title}/> : <Folder key={childNodePath} path={childNodePath} changePWDChild={this.props.changePWDChild} title={this.props.nodes[childNodePath].title}/>
                        )}
                        </Col>
                    </Row>
                {formHTML}
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return{
        pwd: state.nodes[state.pwd_path],
        nodes: state.nodes
    }
}

function mapDispatchToProps(dispatch) {
    return({
        changePWDParent: () => {dispatch({type: actionTypes.CHANGE_PWD_PARENT})},
        changePWDChild: (changeToFolder) => {dispatch({type: actionTypes.CHANGE_PWD_CHILD, changeToFolder: changeToFolder})},
        addFolder: (folderTitle) => {dispatch({type: actionTypes.ADD_FOLDER, folderTitle: folderTitle})},
        addFile: (fileTitle) => {dispatch({type:actionTypes.ADD_FILE, fileTitle: fileTitle})}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeViewContainer);