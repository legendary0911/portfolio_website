// import "../App.css";
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MdToggleOff, MdToggleOn, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useUser } from '../api/Contextapi';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';


function Header() {
    const navigateTo = useNavigate();
    const { user, loginUser, logoutUser, userdata } = useUser()
    const [ham_menu, set_menu] = useState(false);
    const [theme, setTheme] = useState("dark");
    const { pathname } = useLocation();
    const [admin, setAdmin] = useState(userdata.admin);
    useEffect(() => { setAdmin(userdata.admin) }, [userdata])

    function themeChange() {
        if (theme == "dark") {
            setTheme("light")
            document.getElementById('html').className = " scroll-smooth ";
        }
        else {
            setTheme("dark")
            document.getElementById('html').className = "dark scroll-smooth ";
        }
    }

    const Blogsender = async (e) => {
        e.preventDefault();
        let response;
        console.log(userdata.token)
        try {
            response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/blogs`,
                {
                    title: "My Admin Blog final Post",
                    content: "This is the content of my second blog post.",
                    author: "shivam",
                    "token": userdata.token

                }
            )
            console.log(response.data);
            // alert("Login successfully");

        } catch (err) {
            console.log(err.response.data)
        }

    }

    function logout() {
        // toast.success("Successfully Logged Out", {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: false,
        //     draggable: false,
        //     theme: "dark",

        // });
        logoutUser()
        navigateTo("/login");


    }

    return (
        <div className='h-[70px]'>
            <div className="sticky top-0 z-10 h-20 bg-yellow-500  dark:bg-[#111827] dark:text-slate-300 ">
                <div id="nav" className="  flex ">
                    <div className=" text-lg md:text-xl lg:text-2xl font-[620] pl-[7%] pt-8">
                        <ul id="animate" className="space-y-1">
                            <a id="link" href="/">
                                <li className="">Kumar <span className="dark:text-yellow-500 text-20d-600 pb-4">Shivam </span></li>
                            </a>
                        </ul>
                    </div>
                    <div className="flex absolute right-[7%] pt-8">

                        {/* Full Nav Bar */}
                        <ul id="full_navbar" className="hidden md:flex justify-end space-x-8 lg:space-x-16">
                            {pathname == "/blogs" && admin ?
                                <li id="Create" className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/editor">Editor</a> </li>
                                :
                                null
                            }
                            {pathname == "/editor" && admin ?
                                <li id="Post" className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/editor">Post</a> </li>
                                :
                                null
                            }
                            <li id="Home" className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]  "><a id="link" href="/">Home</a></li>
                            {user ?
                                <li id="Logout" onClick={logout} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/login">Logout</a></li>
                                :
                                <li id="Login" className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/login">Login</a></li>
                            }
                            <li id="Blogs" className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/blogs">Blogs</a> </li>

                        </ul>
                        <div className="ml-16 space-x-2 flex font-medium text-lg" onClick={() => themeChange()}>{theme == "light" ? <MdToggleOff className="scale-[1.8] mt-1" /> : <MdToggleOn className="scale-[1.8] mt-1" />}{theme == "light" ? <MdLightMode className="scale-110 mt-1" /> : <MdDarkMode className=" mt-1" />}</div>




                        <div className=" cursor-pointer block mr-20 pb-10 absolute right-[3%] md:hidden" onClick={() => {
                            if (ham_menu === true) {
                                document.getElementById('mobile_menu').className = "absolute right-0 top-[80px] md:hidden bg-white h-fit w-full hidden space-y-4";
                                set_menu(false);
                            }
                            else {
                                document.getElementById('mobile_menu').className = "absolute right-0 top-[80px] md:hidden bg-white h-fit w-full space-y-4";
                                set_menu(true);
                            }
                        }}>{ham_menu === true ? <CloseIcon className=" scale-110 rotate " /> : <MenuIcon className=" ease-out duration-200 scale-110" />}</div>
                    </div>
                </div>
                <div className="-mt-6">

                    {/* Mobile Nav Menu */}
                    <ul id="mobile_menu" className="absolute  right-0 top-23.5 md:hidden items-end bg-red-400 h-fit w-full hidden space-y-4">
                        <li id="Home2" className="text-black text-end pr-12  font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]  "><a id="link" href="/">Home</a></li>
                        <li id="LogIn2" className=" text-black text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/login">LogIn</a></li>
                        <li id="Blogs2" className=" text-black text-end pr-12  font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] "><a id="link" href="/blogs">Blogs</a> </li>
                        <li id="Contact Me2" className=" text-black text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4  pb-6 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="/#contact">Contact Me</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;

