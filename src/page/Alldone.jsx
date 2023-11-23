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
        <div className="absolute top-[120px] left-[420px] w-[63px] h-[63px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[63px] h-[63px] border-[1px] border-solid border-gainsboro" />
            <img
              className="absolute top-[15px] left-[15px] w-[35px] h-[35px] overflow-hidden "
              alt=""
              src="/tick.svg"/>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="w-full m-auto" style={{ maxWidth: "293px" }}>
              <h4 className="absolute pb-10 top-[240px] left-[370px] text-4xl justify-center">All Done !</h4>
                <div className="absolute top-[310px] left-[345px] justify-center">
                  <p className="pb-2 leading-none">
                      Your password has been reset.
                  </p>
                  <p className="pb-2 leading-none">
                      Now you can go to Login Page</p>
                </div>
            </div>
            <div className="absolute top-[350px] left-[380px] w-[120px] cursor-pointer text-center pt-10">
                <button
                    style={{ background: "#173767" }}
                    className="w-full bg-[#173767] text-white p-2 rounded-xl outline-none border-[1px] font-semibold"
                    onClick={handleOkClicked}>
                   <Link to="/">Ok</Link>
                </button>
            </div>
          </div>
        </div>         
      <div className="w-2/6 right"></div>
    </div>
  </div>
  );
};

export default Alldone;
