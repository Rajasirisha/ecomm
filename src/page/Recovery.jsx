import { useCallback } from "react";
// import Login from "./Login";
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const Recovery = () => {
  const onContinueClick = useCallback(() => {
    
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
        <div className="w-full w-[63px] h-[63px]">
          {/* <div className="absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[63px] h-[63px] border-[1px] border-solid border-gainsboro" /> */}
            <img
              className="mx-auto rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[63px] h-[63px] border-[1px] border-solid border-gainsboro w-[35px] h-[35px] overflow-hidden "
              alt=""
              src="/heroiconsoutlinemailopen.svg"/>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="w-full m-auto" style={{ maxWidth: "319px" }}>
              <h4 className="pb-10 text-center text-4xl">Password Recovery</h4>
                <div className="w-full">
                  <p className="pb-2 leading-none text-center">
                      We sent a code to your Email</p>
                </div>
                <div className="absolute top-[350px] left-[325px] bg-white box-border w-[50px] h-[50px] border-b-[5px] border-solid border-[#173767]">
                  <input
                    type="text"
                    maxLength="1"
                    placeholder="0"
                    className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                </div>
                <div className="absolute top-[350px] left-[390px] bg-white box-border w-[50px] h-[50px] border-b-[5px] border-solid border-[#173767]" >
                 <input
                    type="text"
                    maxLength="1"
                    placeholder="0"
                    className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                </div>
                <div className="absolute top-[350px] left-[455px] bg-white box-border w-[50px] h-[50px] border-b-[5px] border-solid border-[#173767]" >
                 <input
                    type="text"
                    maxLength="1"
                    placeholder="0"
                    className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                </div>
                <div className="absolute top-[350px] left-[520px] bg-white box-border w-[50px] h-[50px] border-b-[5px] border-solid border-[#173767]" >
                 <input
                    type="text"
                    maxLength="1"
                    placeholder="0"
                    className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                </div>
            
                {/* <div className="absolute m-auto top-[405px] left-[300px] w-[293px] h-[40px]">      */}
                <div className="w-full pt-10">
                    <button
                      style={{ background: "#173767"}}
                      className="w-full bg-[#173767] text-white p-2 rounded-xl outline-none border-none font-semibold"
                    onClick={onContinueClick}>
                    <Link to="/setpassword">Continue</Link>
                    </button>
                </div>
              
              <div className="w-full ">
                    Didn't receive the Email?<span className="w-full cursor-pointer [text-decoration:underline] font-medium text-[#173767]">
                    Click to resend</span>
              </div>
             
              <div className="w-full">
                <p className="mx-auto w-[164px] h-[30px] cursor-pointer text-center font-semibold text-darkslateblue"
                  onClick={handleBacktoLogin} style={backtoLogin}>
                         
                  <Link to="" ><span>&#8701; </span> Back to Login</Link>
              </p>
                <div className="absolute top-[600px] left-[330px] rounded-8xs  bg-[#173767] w-[70px] h-1.5" />
                <div className="absolute top-[600px] left-[410px] rounded-8xs  bg-[#173767] w-[70px] h-1.5" />
                <div className="absolute top-[600px] left-[490px] rounded-8xs  bg-[#B3B3B3] w-[70px] h-1.5" />
              </div>
            </div>
          </div>
        </div> 
      <div className="w-2/6 right"></div>
    </div>
</div>

);
};

export default Recovery;
