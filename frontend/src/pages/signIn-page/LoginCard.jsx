import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const LoginCard = (props) => {
    const [user,setuser]=useState(null);
    const [pass,passvisible]=useState("password")
    const handleClick=(event)=>{
      if (user===null){
        setuser("hii")
    }
    else{
        setuser(null)
    }
    if (pass==="password"){
        passvisible("text")
    }
    else{
        passvisible("password")
    }
    
    }
    return (
        <div>
             <div class="shadow-2xl h-fit w-[70%] md:w-fit items-center  mx-auto  rounded-md text-center bg-white mb-8">
          <h1 class="mt-[3%] mb-20 h1 text-3xl font-semibold pt-10 cursor-default">
            Backbenchers
          </h1>

          <div class="flex flex-col items-center">
            <span class="text-xl font-serif mb-14 cursor-default"
              >Welcome to backbenchers
            </span>
            <input
              type="text"
              class="border border-gray-600 border-[1px] rounded-md text-center py-2 px-8 mb-3 shadow-md"
              placeholder="Username or Email"
            />
            
            <input
              type={pass}
              class="border border-gray-600 border-[1px] rounded-md text-center py-2 px-8 mb-1 shadow-md"
              placeholder="Password"
            ></input>
            {user?<VisibilityIcon className='mt-[10px] relative left-[104px] bottom-11 text-blue-500' onClick={handleClick}/>:<VisibilityOffIcon className='mt-[10px] relative left-[104px] bottom-11' onClick={handleClick}/>}
            
            <p
              class="text-left text-xs pl-40 hover:text-blue-500 cursor-pointer hover:underline mb-2 relative bottom-7"
              >forgot pasword?</p>
          </div>

          <div class="flex flex-col items-center mb-6">
            
            <button
              class="bg-blue-500 text-white w-fit rounded-xl py-2 px-10 shadow-2xl hover:bg-blue-400 hover:rounded-2xl hover:w-[150px] hover:h-[45px]"
            >
              Sign In
            </button>
          </div>
          <div class="flex mb-6">
            <hr class="border-0 border-t-2 w-56 mr-4" />
          <p class="text-xs mr-4 -mt-2">Or</p>
          <hr class="border-0 border-t-2 w-56 pr-0 mr-0" /> 
          </div>

          <div class="mx-auto">
          <div class="flex justify-center my-10 ">
           
            <GoogleIcon className='mr-[5px] text-blue-600 '></GoogleIcon>
            <p class="text-sm hover:text-blue-500 cursor-pointer">Sign in with Google</p>
          </div>
          </div>

          <div class="pb-4">
            <p class="text-sm flex justify-center">
              New to Backbencher ?  
              <div onClick={props.on}><span class="underline hover:text-blue-500 cursor-pointer" 
                >Create Account</span></div>
            </p>
          </div>
        </div>
        </div>
    );
};

export default LoginCard;