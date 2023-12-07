// import { useCallback } from "react";
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const Alldone = () => {
  // const onOkClick = useCallback(() => {navigate('/')
  // console.log('Ok clicked');

  // }, []);
  const navigate = useNavigate();
  const handleOkClicked = () => {
   navigate('/')
       console.log('Ok clicked');
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
              className="mx-auto  w-[63px] h-[63px] w-[35px] h-[35px] overflow-hidden"
              alt=""
              src="/tick.svg"/>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full m-auto" style={{ maxWidth: "293px" }}>
              <h4 className="pt-10 pb-2 text-4xl text-center">All Done !</h4>
                <div className="w-full">
                  <p className="leading-none text-center">
                      Your password has been reset.
                  </p>
                  <p className="leading-none text-center">
                      Now you can go to Login Page</p>
                
            <div className="cursor-pointer text-center pt-5">
                <button
                    style={{ background: "#173767" }}
                    className="w-[120px] h-[40px] bg-[#173767] text-white p-2 rounded-xl outline-none border-[1px] font-semibold"
                    onClick={handleOkClicked}>
                   <Link to="/" className="link-no-underline text-white">Ok</Link>
                </button>
            </div></div>
            </div>
          </div>
        </div>         
      <div className="w-2/6 right"></div>
    </div>
  </div>
  );
};

export default Alldone;
