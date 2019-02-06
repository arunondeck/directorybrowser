const initialState = {
    nodes: {
        '/' : {
            title : '/',
            type : 'folder',
            children: ['/newfolder', '/newfolder2'],
            isRoot : true
        },
        '/newfolder' : {
            type : 'folder',
            title : 'newfolder',
            children: [],
            isRoot : false
        },
        '/newfolder2' : {
            type : 'folder',
            title : 'newfolder2',
            children: [],
            isRoot : false
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

initialState.pwd = initialState.nodes['/'];
export default initialState;