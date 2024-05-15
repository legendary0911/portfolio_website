import React, { useState, useEffect, createContext } from 'react'
import { useUser } from '../../api/Contextapi'
import { Navigate } from 'react-router-dom';
import BlogEditor from "./blogeditor";
import PublishForm from "./publishform"

const blogStructure = {
    title: '',
    banner: '',
    content: [],
    des: '',
    author: '', //author name
}

export const EditorContext = createContext({});

const Editor = () => {
    const [blog, setBlog] = useState(blogStructure);

    const { user, loginUser, logoutUser, userdata } = useUser()
    const [admin, setAdmin] = useState(userdata.admin);
    const [token, setToken] = useState(userdata.token);
    const [editorstate, setEditorState] = useState("editor");
    const [texteditor, setTextEditor] = useState({ isReady: false });
    useEffect(() => { setAdmin(userdata.admin) }, [userdata])
    useEffect(() => { setToken(userdata.token) }, [userdata])


    return (
        <EditorContext.Provider value={{ blog, setBlog, editorstate, setEditorState, texteditor, setTextEditor }}>
            {token == null ?
                <Navigate to="/login" />
                :
                admin == true ?
                    editorstate == "editor" ? <BlogEditor /> : <PublishForm />
                    :
                    <div className='h-[100vh] text-4xl text-white  bg-yellow-500  dark:bg-[#111827] flex'>
                        <div className='m-auto'>
                            Only Admin can access the page
                        </div>
                    </div>
            }
        </EditorContext.Provider>
    )
}

export default Editor