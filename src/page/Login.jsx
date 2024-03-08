import React, { useState } from 'react'
import { Select} from "antd";
import '../styles.css'
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState();
  const handleLogin = () => {
    if(!role) return;
    if(role === 'manager'){
      navigate('/manager')
    } else if (role === 'employee'){
      navigate('/employee')
    } else {
      navigate('/freelancer')
    }
  }

  return (
        <div className="h-screen h-full">
          <div className="flex w-full h-full">
            <div className="w-4/6 p-8">
              <div className="flex justify-center items-center ">
                <div className="max-w-[600px] mx-auto w-full">
                <img src="images/Logo.png" alt="logo" />
                </div>
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="w-full m-auto" style={{ maxWidth: "293px" }}>
                  <h4 className="pb-10 text-4xl text-center">Welcome Back !</h4>
                  <div className="w-full">
                    <p className="pb-2 leading-none font-semibold">
                      Email<span className="text-[#FF0000]"> *</span>
                    </p>
                    <input
                      className="text-base w-full outline-none leading-none bg-transparent border-2 border-[#B3B3B3] p-2 rounded"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="pb-8 pt-8 w-full">
                    <Select
                      className="w-full outline-none leading-none bg-transparent border-2 border-[#B3B3B3] rounded"
                      placeholder="Select Role"
                      onChange={(value)=> {
                        setRole(value)}}
                      options={[
                        { value: "manager", label: "Manager" },
                        { value: "employee", label: "Employee" },
                        { value: "freelancer", label: "Freelancer" }
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <p className="pb-2 leading-none font-semibold">
                      Password<span className="text-[#FF0000]"> *</span>
                    </p>
                    <input
                      className="text-base w-full outline-none leading-none bg-transparent border-2 border-[#B3B3B3] p-2 rounded"
                      placeholder="Enter Your Password"
                      type="password"
                    />
                    <p className="flex pt-2 justify-end text-sm w-full ">
                     <Link to="/forgotpassword" className="link-no-underline text-[#173767]">Forgot Password?</Link>
                    </p>
                  </div>
                  <div className="w-full pt-10">
                    <button
                      style={{ background: "#173767" }}
                      className="w-full bg-[#173767] text-white p-2 rounded-xl outline-none border-none font-semibold"
                    onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/6 right"></div>
          </div>
        </div>
      );
}

export default Login;