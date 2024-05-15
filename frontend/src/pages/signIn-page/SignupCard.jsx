import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useUser } from '../../api/Contextapi';
import Loader from '../../components/Loader'
import { toast } from 'react-toastify';
import { authWithGoogle } from '../../api/FireBase';


const SignupCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, loginUser, logoutUser, userdata } = useUser()
  const navigateTo = useNavigate();
  const [visibility, setvisibility] = useState(null);
  const [pass, passvisible] = useState("password")
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = data;

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (visibility === null) setvisibility("hii")
    else setvisibility(null)
    if (pass === "password") passvisible("text")
    else passvisible("password")
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(data)
      setIsLoading(true)
      const response = await axios.post("http://localhost:3000/api/auth/signup",
        {
          name: data.name,
          email: data.email,
          password: data.password
        }
      );
      setIsLoading(false)
      console.log('Response:', response.data);
      toast.success(response.data.message, {
        position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark",
      });
      navigateTo("/login");
      window.location.reload();

    } catch (error) {
      setIsLoading(false)
      console.log(error.response.data)
      if (error.response) {
        toast.error(error.response.data.error, {
          position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark",
        });
      } else {
        toast.error("Something went wrong. Please try again", {
          position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark",
        });
      }
    }
  }

  const handleGoogleAuth = async (e) => {
    let user;
    try {
      user = await authWithGoogle();
      setIsLoading(true)

      let response = await axios.post("http://localhost:3000/api/auth/googlesignup",
        {
          access_token: user.accessToken
        }
      )
      setIsLoading(false)
      console.log(response.data);

      toast.success(response.data.message, {
        position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark",
      });

      navigateTo("/login");
      window.location.reload();
    } catch (error) {
      setIsLoading(false)
      console.error(error);
      if (error.response) {
        toast.error(error?.response.data.error, {
          position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark",
        });
      } else {
        toast.error("Something went wrong.Please try again later.", {
          position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark",
        });
      }
    }
  }

  return (
    <div>
      {isLoading && <Loader />}

      <div class="shadow-2xl h-fit  items-center  mx-auto  rounded-md text-center bg-white mb-6">
        <h1 class="mt-[3%] mb-10 h1 text-3xl font-semibold pt-6 cursor-default">
          Sign Up
        </h1>

        <form onSubmit={onSubmitHandler}>
          <div class="flex flex-col items-center">


            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={name}
              class="border border-gray-600  rounded-md text-center py-2 px-8 mb-3"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChangeHandler}
              class="border border-gray-600  rounded-md text-center py-2 px-8 mb-3"
              placeholder="Email"
            />

            <input
              type={pass}
              name="password"
              onChange={onChangeHandler}
              value={password}
              class="border border-gray-600 rounded-md text-center py-2 px-8 mb-1"
              placeholder="Password"
            />
            {visibility ? <VisibilityIcon className='mt-[10px] relative left-[104px] bottom-[48px] text-blue-500' onClick={handleClick} /> : <VisibilityOffIcon className='mt-[10px] relative left-[104px] bottom-[48px]' onClick={handleClick} />}

          </div>

          <div class="flex flex-col items-center -mt-4 mb-6">

            <button type="submit"
              class="bg-blue-500 text-white w-fit rounded-xl py-2 px-10 shadow-2xl hover:bg-blue-600 hover:scale-105 duration-200"
            >
              Sign Up
            </button>

          </div>
        </form>
        <div class="flex mb-6">
          <hr class="border-0 border-t-[1px] w-[45%] border-black/75 mr-0" />
          <p class="text-xs mx-auto -mt-2">Or</p>
          <hr class="border-0 border-t-[1px] w-[45%]  border-black/75 pr-0 mr-0" />
        </div>

        <div class="flex justify-center">
          <div onClick={handleGoogleAuth} class="flex mb-6 hover:scale-105 hover:text-blue-600 w-fit duration-200  ">

            <div><img className="h-5 w-5 mr-[8px]" src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png" /></div>
            <p class="text-sm hover:text-blue-500 cursor-pointer">Sign up with Google</p>
          </div>
        </div>

        <div class="pb-4 ">
          <p class="text-sm flex justify-center">
            Already have an account ?
            <div onClick={props.on}><span class="underline hover:text-blue-600 cursor-pointer"
            >Log In</span></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;