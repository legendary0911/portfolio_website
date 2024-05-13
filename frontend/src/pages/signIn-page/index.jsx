import React, { useState } from 'react';
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
function LoginPage() {

  const [user, setuser] = useState(null);
  const handleClick = () => {
    if (user === null) {
      setuser("hii")
    }
    else {
      setuser(null)
    }
  }
  return (
    <div>
      {/* <Header /> */}
      <div className=' h-[calc(100vh-70px)]  flex dark:bg-[#111827] bg-yellow-500'>

        <div className='m-auto md:w-[60%] w-[90%] lg:w-[45%]'>
          {user ? <SignupCard on={handleClick} /> : <LoginCard on={handleClick} />}

        </div>
      </div>
      <div className='footer -mt-20'>
        <Footer />

      </div>
    </div>

  )
}
export default LoginPage;
