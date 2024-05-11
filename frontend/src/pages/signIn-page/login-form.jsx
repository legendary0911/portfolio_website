import React, { useState } from 'react';
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import Header from '../../components/Header'
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

      <div class="">
        {/* <Header /> */}
        <div class="flex  bg-[#76f2fe]  justify-center ">
          {user ? <SignupCard on={handleClick} /> : <LoginCard on={handleClick} />}

        </div>
      </div>

    </div>

  )
}
export default LoginPage;
