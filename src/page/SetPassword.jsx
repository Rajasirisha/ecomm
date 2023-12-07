import { useCallback } from "react";
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const SetPassword = () => {
  const onResetClick = useCallback(() => {
  }, []);

  const navigate = useNavigate();
  const handleBacktoLogin = () => {
  navigate('/')
       console.log('Back to login clicked');
};
const backtoLogin = {
    color: '#173767',
};

  return (
    <div className="h-screen h-full">
    <div className="flex w-full h-full">
      <div className="w-4/6 p-8">
        <div className="flex justify-center items-center ">
          <div className="max-w-[600px] mx-auto w-full">
          <img src="images/Logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-full">
          {/* <div className="absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[63px] h-[63px] border-[1px] border-solid border-gainsboro" /> */}
            <img
              className="mx-auto w-[63px] h-[63px] w-[35px] h-[35px] overflow-hidden"
              alt=""
              src="/group-5.svg"/>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full" style={{ maxWidth: "293px" }}>
              <h4 className="pt-10 text-center text-4xl w-[319px]">Set New Password</h4>
                <div className="w-full">
                  <p className="leading-none text-center">
                    Must be atleast 8 characters</p>
                </div>
                <div className="pb-1 leading-none font-semibold"> 
                  <div className="w-full">
                    <p className="pb-1 leading-none font-semibold">
                        Password
                    </p>
                    <input
                      className="text-base w-full outline-none leading-none bg-transparent border-2 border-[#B3B3B3] p-2 rounded"
                      placeholder="********"
                      type="password"/>
                  </div>
                  <div className="w-full">
                    <p className="pb-1 pt-3 leading-none font-semibold">
                      Confirm Password
                    </p>
                    <input
                      className="text-base w-full outline-none leading-none bg-transparent border-2 border-[#B3B3B3] p-2 rounded"
                      placeholder="********"
                      type="password"/>
                  </div>
                  <div className="w-full pb-2 pt-3">
                    <button
                      style={{ background: "#173767", height:"40px" }}
                      className="w-full bg-[#173767] text-white p-2 rounded-xl outline-none border-none font-semibold"
                      onClick={onResetClick}>
                     <Link to="/alldone" className="link-no-underline text-white">Reset Password</Link>
                    </button>
                  </div>
               
                <div className="w-full">
                <p className="mx-auto w-[164px] h-[30px] cursor-pointer text-center font-semibold text-darkslateblue"
                  onClick={handleBacktoLogin} style={backtoLogin}>
                         
                  <Link to="" className="link-no-underline text-[#173767]"><span>&#8701; </span> Back to Login</Link>
              </p>
                <div className="w-full max-w-[600px] flex justify-between mt-8">
                <div className="bg-[#173767] w-[70px] h-1.5 rounded-8xs" />
                <div className="bg-[#173767] w-[70px] h-1.5 rounded-8xs" />
                <div className="bg-[#173767] w-[70px] h-1.5 rounded-8xs" />
                </div>
                </div> 
                </div>
              </div>
            </div> 
          </div> 
        <div className="w-2/6 right"></div>
      </div>
    </div>
  );
};

export default SetPassword;
