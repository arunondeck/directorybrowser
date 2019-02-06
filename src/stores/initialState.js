const initialState = {
    nodes: {
        '/' : {
            title : '/',
            type : 'folder',
            children: [],
            isRoot : true
        }
    },
    newNode :{
        title : '',
        type : '',
        children: [],
        isRoot : false
    },
    types : {
        folder : 'folder',
        file : 'file'
    },
    pwd_parent: false,
    pwd_path: '/'
}

export default initialState;