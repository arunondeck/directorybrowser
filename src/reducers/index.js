import initialState from '../stores/initialState';
import actionTypes from '../actions/actionTypes';

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_FOLDER:
            let newFolder = Object.assign({}, state.newNode);
            newFolder.title = action.folderTitle;
            newFolder.type = state.types.folder;
            let newFolderPath = state.pwd_path.replace(/\/$/, "") + '/' + action.folderTitle;
            let newState = Object.assign({}, state, {
                nodes : Object.assign({}, state.nodes, {
                    [newFolderPath] : newFolder,
                    [state.pwd_path] : Object.assign({}, state.nodes[state.pwd_path], {children: [...state.nodes[state.pwd_path].children, newFolderPath]})})
            });
            return newState;
        case actionTypes.ADD_FILE:
            let newFile = Object.assign({}, state.newNode);
            newFile.title = action.fileTitle;
            newFile.type = state.types.file;
            let newFilePath = state.pwd_path.replace(/\/$/, "") + '/' + action.fileTitle;
            return Object.assign({}, state, {
                nodes : Object.assign({}, state.nodes, {
                    [newFilePath] : newFile,
                    [state.pwd_path] : Object.assign({}, state.nodes[state.pwd_path], {children: [...state.nodes[state.pwd_path].children, newFilePath]})})
            });
        case actionTypes.CHANGE_PWD_CHILD:
            return Object.assign({}, state, {pwd_path: state.pwd_path.replace(/\/$/, "") + '/' + action.changeToFolder, pwd_parent: state.pwd_path});
        case actionTypes.CHANGE_PWD_PARENT:
            return Object.assign({}, state, {pwd_path: state.pwd_parent, pwd_parent: state.pwd_parent.substr(0, state.pwd_parent.lastIndexOf("/"))});
        default:
            return state;
    }
}

export default reducer;