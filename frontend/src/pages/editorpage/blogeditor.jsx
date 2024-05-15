import React, { useContext, useEffect, useRef, useState } from 'react'
import Banner from "/Uploadbanner.png"
import { uploadImage } from '../../api/aws';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { EditorContext } from './index';
import EditorJS from "@editorjs/editorjs";
import { tools } from '../../components/tools';
import axios from "axios";
import { useUser } from '../../api/Contextapi';
import { useNavigate } from 'react-router-dom';
const BlogEditor = () => {
    const [isLoading, setIsLoading] = useState(false);

    let { blog, blog: { title, banner, content, des }, setBlog, editorstate, setEditorState, texteditor, setTextEditor } = useContext(EditorContext);
    const { userdata } = useUser();
    const navigateTo = useNavigate();


    useEffect(() => {
        if (!texteditor.isReady) {
            setTextEditor(new EditorJS({
                holderId: "textEditor",
                data: content,
                tools: tools,
                placeholder: "Let's write an awesome story"
            }))
        }

    }, [])

    const handlePublishForm = () => {
        if (!banner.length) {
            return toast.error("Upload a Blog banner to publish it")
        }
        if (!title.length) {
            return toast.error("Write Blog Title to publish it")
        }
        if (texteditor.isReady) {
            texteditor.save()
                .then(data => {
                    if (data.blocks.length) {
                        setBlog({ ...blog, content: data });
                        setEditorState("publish")
                    } else {
                        return toast.error("write something in your blog to publish")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const handleBannerUpload = async (e) => {
        let loadingToast = toast.loading("Uploading..")
        try {
            let img = e.target.files[0];
            if (img) {
                const url = await uploadImage(img);
                if (url) {
                    setBlog({ ...blog, banner: url })
                }
            }
        } catch (error) {
            console.error('Error uploading banner:', error);
        }
        toast.dismiss(loadingToast);
        toast.success("Uploaded")
    };

    const handleTitleKeyDown = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }

    }

    const handleTitleChange = (e) => {
        let input = e.target;

        input.style.height = 'auto';
        input.style.height = input.scrollHeight + "px";
        setBlog({ ...blog, title: input.value.trim() })
    }

    const handleSaveDraft = async (e) => {
        if (e.target.className.includes("disable")) {
            return toast.error("Draft is saving");
        }
        if (!title.length) {
            return toast.error("Write Blog title before saving the draft");
        }
        const loadingToast = toast.loading("Saving draft....");


        e.target.classList.add('disable');

        if (texteditor.isReady) {
            texteditor.save().then(async content => {
                try {
                    let blogObj = {
                        title, banner, des, content, author: "Kumar Shivam", draft: true, token: userdata.token
                    }

                    const response = await axios.post("http://localhost:3000/api/blogs", blogObj)
                    console.log(response)
                    e.target.classList.remove('disable');
                    toast.dismiss(loadingToast);
                    toast.success("Draft Saved");
                    setTimeout(() => {
                        navigateTo("/blogs")
                    }, 1000);

                } catch (err) {
                    console.log(err);
                    toast.dismiss(loadingToast);
                    e.target.classList.remove('disable')
                    return toast.error(err);
                }
            })
        }

    }
    return (
        <div className='  text-white mx-auto bg-yellow-500  dark:bg-[#111827] '>
            {isLoading && <Loader />}

            <div className='w-full mx-auto max-w-[900px] px-10 pt-10'>
                <div className='aspect-video rounded-lg hover:opacity-80   border-white border-[3px]'>
                    <label htmlFor='uploadBanner' >
                        <img defaultValue={banner} className="rounded-md z-20"
                            src={banner ? banner : Banner}
                        />
                        <input
                            id="uploadBanner"
                            type="file"
                            accept=".png, .jpg , .jpeg"
                            hidden
                            onChange={handleBannerUpload}
                        />

                    </label>
                </div>

                <textarea
                    defaultValue={title}
                    placeholder='Blog Title'
                    className='w-full bg-yellow-500 text-black dark:text-white  dark:bg-[#111827] mt-10 leading-tight placeholder:opacity-60 placeholder:dark:text-white placeholder:text-black rounded-md mx-auto flex items-center max-w-[900px] pt-4 text-4xl font-medium h-20 outline-none resize-none'
                    onKeyDown={handleTitleKeyDown}
                    onChange={handleTitleChange}
                >
                </textarea>

                <hr className='w-full opacity-60 my-10 dark:border-white border-black ' />

                <div id="textEditor" className=' dark:text-white text-black'>




                </div>
                <div className=' text-black md:space-x-16 space-x-10     pb-10'>

                    <button className='bg-white/80 hover:bg-white w-fit mx-auto hover:scale-105 duration-200 px-6 py-2 rounded-lg' onClick={handlePublishForm}>
                        Publish
                    </button>

                    <button className='bg-white/80 hover:bg-white w-fit mx-auto hover:scale-105 duration-200 px-6 py-2 rounded-lg' onClick={handleSaveDraft}>
                        Save Draft
                    </button>
                </div>
            </div>



        </div>
    )
}

export default BlogEditor