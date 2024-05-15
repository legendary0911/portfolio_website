import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { EditorContext } from '.'
import { useUser } from '../../api/Contextapi'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const PublishForm = () => {
    let { setEditorState, blog: { banner, title, des, content }, setBlog, blog } = useContext(EditorContext)
    let charLimit = '200';
    const handleCloseEvent = () => {
        setEditorState("editor");
    }
    const { user, userdata } = useUser()

    const navigateTo = useNavigate();

    const handleBlogTitleChange = (e) => {
        let input = e.target;

        setBlog({ ...blog, title: input.value })
    }

    const handleBlogDesChange = (e) => {
        let input = e.target;
        setBlog({ ...blog, des: input.value })
    }

    const publishBlog = async (e) => {
        const loadingToast = toast.loading("Publishing....");

        try {
            if (e.target.className.includes("disable")) {
                return toast.error("Blog is publishing");
            }
            if (!title.length) {
                return toast.error("Write Blog title before publishing");
            }
            if (!des.length || des.length > charLimit) {
                return toast.error(`Write a description within ${charLimit}`);
            }


            e.target.classList.add('disable');
            let blogObj = {
                title, banner, des, content, author: "Kumar Shivam", draft: false, token: userdata.token
            }

            const response = await axios.post("http://localhost:3000/api/blogs", blogObj)
            console.log(response)
            e.target.classList.remove('disable');
            toast.dismiss(loadingToast);
            toast.success("Blog Published");
            setTimeout(() => {
                navigateTo("/blogs")
            }, 2000);

        } catch (err) {
            console.log(err);
            toast.dismiss(loadingToast);
            e.target.classList.remove('disable')
            return toast.error(err);
        }

    }
    return (
        <div className='bg-yellow-500 dark:bg-[#111827] text-white'>
            <button className="mt-6 text-white" onClick={handleCloseEvent}>
                Return to Editor
            </button>

            <section className='w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4'>


                <div className='max-w-[550px] mx-auto block'>
                    <p className='text-dark-grey mb-1'>Preview</p>
                    <div className='w-full aspect-video rounded-lg overflow-hidden bg-gray mt-4'>
                        <img src={banner} />
                    </div>

                    <h1 className='text-4xl font-medium mt-2 leading-tight line-clamp-2'>{title}</h1>
                    <p className=' w-full h-fit text-xl leading-7 mt-4'>{des}</p>
                </div>

                <div className='border-grey lg:border-1 max-w-[550px] '>
                    <p className=' text-gray-500 mb-2 mt-9'>Blog Title</p>
                    <input onChange={handleBlogTitleChange} className='pl-4 ' type="text" placeholder="Blog Title" defaultValue={title} />

                    <p className=' text-gray-500 mb-2 mt-9'>Short decription about your blog</p>
                    <textarea onChange={handleBlogDesChange} maxLength={charLimit} defaultValue={des} className='h-40 resize-none leading-7 pl-4 ' >

                    </textarea>
                    <p className='mt-1 text-right text-gray-400 text-sm'>{charLimit - des.length} characters left</p>

                    <button className='mt-10' onClick={publishBlog}>Publish</button>
                </div>
            </section>
        </div>
    )
}

export default PublishForm