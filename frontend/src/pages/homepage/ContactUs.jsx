// import "../App.css";
import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { name, email, message } = data;


    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        // Create an object with EmailJS service ID, template ID, Public Key, and Template params
        const emaildata = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: data.name,
                from_email: data.email,
                // to_name: 'Web Wizard',
                message: data.message,
            }
        };

        console.log(emaildata)
        // Send the email using EmailJS
        setIsLoading(true)
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", emaildata);
            console.log(res.data);
            setData({
                name: '',
                email: '',
                message: ''
            })
            setIsLoading(false)

            toast.success("Thank You for reaching me out", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",

            });
        } catch (error) {
            console.error(error);
            toast.error("Error occured! Please try again", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",

            });
            setIsLoading(false)
        }
    }
    return (
        <div id="contact" className="h-[60%] pb-10">
            {isLoading && <Loader />}

            <section class=" bg-fixed bg-[url('https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg')] dark:bg-gray-900">
                <div class="  py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <div className="items-center">
                        <h2 class="mb-10 mt-10 font-alb text-5xl md:text-6xl lg:text-7xl tracking-tight font-[600] text-center text-white bg-blue-700 rounded-2xl py-4">Contact Me</h2>
                        <p class=" mb-64 font-normal text-center text-white  sm:text-xl">Got a technical issue? Want to send feedback ? Need details about our Business plan? Let me know.</p>
                    </div>
                </div>
            </section>
            <div>
                <section class=" h-[32rem] dark:bg-gray-900 ">
                    <div class="  h-[32rem] py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

                        <form onSubmit={formSubmitHandler} action="#" data-aos="zoom-in-up" data-aos-duration="600" className="bg-[#1f2937] text-white relative bottom-72 shadow-2xl shadow-black/60  py-10 px-10 rounded-xl space-y-8">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium  dark:text-gray-300">Name</label>
                                <input onChange={onChangeHandler}
                                    value={name} name="name" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required></input>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium  dark:text-gray-300">Your email</label>
                                <input onChange={onChangeHandler}
                                    value={email} name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="xyz@email.com" required></input>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium  dark:text-gray-400">Your message</label>
                                <textarea onChange={onChangeHandler}
                                    value={message} name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>

                    </div>
                </section>
            </div>
            <div className="footer -mt-32 ">
                <Footer />
            </div>
        </div>
    )
};

export default Contact;

