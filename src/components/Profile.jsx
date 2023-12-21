import { useState, useCallback } from "react";
import Logout from "./Logout";
import PortalPopup from "./PortalPopup";

const Profile = () => {
  const [isLogoutOpen, setLogoutOpen] = useState(false);

  const openLogout = useCallback(() => {
    setLogoutOpen(true);
  }, []);

  const closeLogout = useCallback(() => {
    setLogoutOpen(false);
  }, []);

  return (
    <>
      <div className="relative rounded-xl bg-white w-[1084px] h-[1010px] overflow-y-auto max-w-full max-h-full overflow-auto text-left text-base text-black font-poppins">
        <div className="absolute top-[60.5px] left-[-0.5px] box-border w-[1085px] h-px border-t-[1px] border-solid border-darkgray" />
        <div className="absolute top-[15px] left-[21px] w-[122px] h-9 text-xl">
          <div className="absolute top-[0px] left-[47px] font-medium">
            Profile
          </div>
          <img
            className="absolute h-[94.44%] w-[34.43%] top-[2.78%] right-[65.57%] bottom-[2.78%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/-icon-arrow-ios-back.svg"
          />
        </div>
        <div className="absolute top-[12px] left-[926px] w-[99px] h-[35px] text-xl text-red-400">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[99px] h-[35px] cursor-pointer border-[1px] border-solid border-red-400"
            onClick={openLogout}
          />
          <button
           className="absolute top-[2px] left-[17px] font-medium">
            Logout
          
          </button>
        </div>
        {/* <div className="absolute top-[12px] left-[817px] w-[99px] h-[35px] text-xl text-white">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-darkslateblue w-[99px] h-[35px]" />
          <button className="absolute top-[2px] left-[25px] font-medium">Save</button>
        </div> */}
        <div className="absolute top-[12px] left-[817px] w-[99px] h-[35px] text-xl text-darkslateblue">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-darkslateblue box-border w-[99px] h-[35px] cursor-pointer border-[1px] border-solid"
          />
          <button
           className="absolute top-[2px] left-[25px] font-medium">
            Save
          
          </button>
        </div>
        <div className="absolute top-[111px] left-[60px] rounded-lg bg-white box-border w-[965px] h-[347px] border-[1px] border-solid border-darkslateblue" />
        <img
          className="absolute top-[156px] left-[94px] w-[250px] h-[250px]"
          alt=""
          src="/group-1000003442.svg"
        />
        <div className="absolute top-[120px] left-[363px] text-3xl font-medium">
          Manager Name
        </div>
        <div className="absolute top-[125px] left-[600px] w-[90px] h-[30px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-olivedrab box-border w-[90px] h-[30px] border-[1px] border-solid border-olivedrab" />
          <div className="absolute top-[2px] left-[21px] font-medium">
            Active
          </div>
        </div>
        <div className="absolute top-[391px] left-[363px] font-medium text-darkslategray-100">
          Company :
        </div>
        <div className="absolute h-[1.9%] w-[12.73%] top-[39.34%] left-[45.3%] leading-[17.17px] font-medium flex items-center">
          Krz Technologies
        </div>
        <div className="absolute top-[473px] left-[60px] w-[516px] h-[202px] text-xl">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[516px] h-[202px] border-b-[1px] border-solid border-darkslateblue" />
          <div className="absolute top-[7px] left-[1px] text-5xl font-medium">
            Basic Information
          </div>
          <div className="absolute top-[61px] left-[20px] font-medium">
            Onboarding :
          </div>
          <div className="absolute top-[61px] left-[196px] w-[172px] h-[35px] text-base">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[172px] h-[35px] border-[1px] border-solid border-darkslateblue" />
            <div className="absolute top-[22.86%] left-[19.77%] leading-[17.17px] font-medium">
              18-01-2021
            </div>
          </div>
          <div className="absolute top-[111px] left-[20px] font-medium">
            Worked for :
          </div>
          <div className="absolute top-[161px] left-[20px] font-medium">
            Office Mode :
          </div>
          <div className="absolute top-[111px] left-[196px] w-[172px] h-[35px] text-base">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[172px] h-[35px] border-[1px] border-solid border-darkslateblue" />
            <div className="absolute top-[22.86%] left-[9.88%] leading-[17.17px] font-medium">
              10 years, 7 months
            </div>
          </div>
          <div className="absolute top-[161px] left-[196px] w-[172px] h-[35px] text-base">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkslateblue" />
            <div className="absolute top-[25.71%] left-[18.02%] leading-[17.17px] font-medium">
              In-Office
            </div>
            <img
              className="absolute h-[30.07%] w-[9.99%] top-[34.22%] right-[4.56%] bottom-[35.71%] left-[85.45%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-9.svg"
            />
          </div>
        </div>
        <div className="absolute top-[697px] left-[61px] text-xl font-medium">
          Add Skills
        </div>
        <div className="absolute top-[757px] left-[74px] w-[83px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[83px] h-[30px]" />
        </div>
        <div className="absolute top-[812px] left-[74px] w-[83px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[83px] h-[30px]" />
          <div className="absolute top-[3px] left-[18px] font-semibold">
            PPT
          </div>
        </div>
        <div className="absolute top-[759px] left-[90px] font-semibold">
          UI/UX
        </div>
        <div className="absolute top-[757px] left-[173px] w-[83px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[83px] h-[30px]" />
          <div className="absolute top-[2px] left-[16px] font-semibold">
            HTML
          </div>
        </div>
        <div className="absolute top-[812px] left-[173px] w-[83px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[83px] h-[30px]" />
          <div className="absolute top-[2px] left-[16px] font-semibold">
            Word
          </div>
        </div>
        <div className="absolute top-[757px] left-[272px] w-[83px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[83px] h-[30px]" />
          <div className="absolute top-[2px] left-[20px] font-semibold">
            Forms
          </div>
        </div>
        <div className="absolute top-[812px] left-[272px] w-[83px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[83px] h-[30px]" />
          <div className="absolute top-[2px] left-[25px] font-semibold">
            Excel
          </div>
        </div>
        <div className="absolute top-[695px] left-[168px] w-[215px] h-[35px] text-gray-100">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white box-border w-[215px] h-[35px] border-[1px] border-solid border-gray-100" />
          <div className="absolute top-[4px] left-[14px]">Enter Skills</div>
        </div>
        <div className="absolute top-[872px] left-[61px] text-5xl font-medium">
          Occupation Information
        </div>
        <div className="absolute top-[867.44px] left-[59.46px] box-border w-[517.07px] h-px border-t-[1px] border-solid border-darkslateblue" />
        <div className="absolute top-[932px] left-[125px] text-xl font-semibold">
          Full-Time
        </div>
        <img
          className="absolute top-[923px] left-[63px] w-[48.41px] h-11"
          alt=""
          src="/group-1000003446.svg"
        />
        <div className="absolute top-[929px] left-[320px] text-xl font-semibold">
          Dissertation
        </div>
        <div className="absolute top-[928px] left-[522px] text-xl font-semibold">
          India
        </div>
        <img
          className="absolute top-[921px] left-[451.02px] w-[48.4px] h-11"
          alt=""
          src="/group-1000003448.svg"
        />
        <img
          className="absolute top-[922px] left-[258px] w-[48.4px] h-11"
          alt=""
          src="/group-1000003447.svg"
        />
        <div className="absolute top-[482px] left-[591px] rounded-lg bg-white box-border w-[434px] h-[485px] border-[1px] border-solid border-darkslateblue" />
        <div className="absolute top-[496.25px] left-[611px] text-xl font-medium text-darkslategray-100">
          Upload Doc :
        </div>
        <div className="absolute top-[499px] left-[744px] w-[57px] h-[24.25px] text-darkslateblue">
          <img
            className="absolute top-[1.25px] left-[0px] w-[57px] h-[23px]"
            alt=""
            src="/rectangle-5796.svg"
          />
          <div className="absolute top-[0px] left-[7px] font-medium">Add +</div>
        </div>
        <img
          className="absolute h-[2.48%] w-[2.31%] top-[7.13%] right-[5.44%] bottom-[90.4%] left-[92.25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-289412.svg"
        />
        <div className="absolute top-[550px] left-[624px] w-[369px] h-[395px] overflow-y-auto">
          <div className="absolute h-[179.75%] w-full top-[0%] right-[0%] bottom-[-79.75%] left-[0%]">
            <div className="absolute h-[11.27%] w-[99.46%] top-[0%] right-[0%] bottom-[88.73%] left-[0.54%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[41.25%] right-[7.11%] bottom-[45.1%] left-[89.92%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[32.43%] top-[18.75%] right-[58.31%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[28.01%] top-[0%] right-[71.99%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1000004007.svg"
                />
                <div className="absolute top-[26.4%] left-[44.54%] font-medium">
                  Resume
                </div>
              </div>
            </div>
            <div className="absolute h-[11.27%] w-[99.46%] top-[44.37%] right-[0%] bottom-[44.37%] left-[0.54%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[435%] right-[7.11%] bottom-[-348.65%] left-[89.92%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[23.16%] top-[18.75%] right-[67.57%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[39.22%] top-[0%] right-[60.78%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1000004007.svg"
                />
                <div className="absolute top-[26.4%] left-[62.35%] font-medium">
                  SSC
                </div>
              </div>
            </div>
            <div className="absolute h-[11.27%] w-[99.46%] top-[14.79%] right-[0.54%] bottom-[73.94%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[172.5%] right-[7.65%] bottom-[-86.15%] left-[89.37%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[35.42%] top-[18.75%] right-[55.31%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[25.64%] top-[0%] right-[74.36%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1000004007.svg"
                />
                <div className="absolute top-[26.4%] left-[40.77%] font-medium">
                  PAN Card
                </div>
              </div>
            </div>
            <div className="absolute h-[11.27%] w-[99.46%] top-[59.15%] right-[0.54%] bottom-[29.58%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[41.25%] right-[7.65%] bottom-[45.1%] left-[89.37%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[43.05%] top-[18.75%] right-[47.68%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[21.1%] top-[0%] right-[78.9%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/evaarrowupfill02.svg"
                />
                <div className="absolute top-[26.4%] left-[33.54%] font-medium">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="absolute h-[11.27%] w-[99.46%] top-[29.58%] right-[0%] bottom-[59.15%] left-[0.54%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[303.75%] right-[7.11%] bottom-[-217.4%] left-[89.92%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[46.05%] top-[18.75%] right-[44.69%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[19.73%] top-[0%] right-[80.27%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1000004007.svg"
                />
                <div className="absolute top-[26.4%] left-[31.36%] font-medium">
                  Aadhaar Card
                </div>
              </div>
            </div>
            <div className="absolute h-[11.27%] w-[99.46%] top-[73.94%] right-[0%] bottom-[14.79%] left-[0.54%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[41.25%] right-[7.65%] bottom-[45.1%] left-[89.37%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[39.78%] top-[18.75%] right-[50.95%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[22.83%] top-[0%] right-[77.17%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/evaarrowupfill02.svg"
                />
                <div className="absolute top-[26.4%] left-[36.3%] font-medium">
                  Graduation
                </div>
              </div>
            </div>
            <div className="absolute h-[11.27%] w-[99.46%] top-[88.73%] right-[0%] bottom-[0%] left-[0.54%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray" />
              <img
                className="absolute h-[13.65%] w-[2.98%] top-[41.25%] right-[7.65%] bottom-[45.1%] left-[89.37%] max-w-full overflow-hidden max-h-full hidden"
                alt=""
                src="/evaarrowupfill02.svg"
              />
              <div className="absolute h-[52.08%] w-[20.44%] top-[18.75%] right-[70.3%] bottom-[29.17%] left-[9.26%]">
                <img
                  className="absolute h-full w-[44.44%] top-[0%] right-[55.56%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/evaarrowupfill02.svg"
                />
                <div className="absolute top-[26.4%] left-[70.67%] font-medium">
                  PG
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[179px] left-[659px] w-[227px] h-6 text-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Email Id :
          </div>
          <div className="absolute top-[11.52%] left-[40.53%] leading-[17.17px] font-medium text-black">
            abc@gmail.com
          </div>
        </div>
        <div className="absolute top-[288px] left-[363px] w-[273px] h-6 text-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Position :
          </div>
          <div className="absolute top-[11.86%] left-[46.89%] leading-[17.17px] font-medium text-black">
            Director/Manager
          </div>
        </div>
        <div className="absolute top-[234px] left-[363px] w-[225px] h-6 text-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Department :
          </div>
          <div className="absolute top-[16.67%] left-[56.89%] leading-[17.17px] font-medium text-black">
            Dissertation
          </div>
        </div>
        <div className="absolute top-[234px] left-[659px] w-[189px] h-6 text-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Role :
          </div>
          <div className="absolute top-[16.67%] left-[48.68%] leading-[17.17px] font-medium text-black">
            Dissertation
          </div>
        </div>
        <div className="absolute top-[179px] left-[363px] w-[163px] h-[25px] text-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Employee ID :
          </div>
          <div className="absolute top-[4%] left-[78.53%] font-medium text-black">
            1234
          </div>
        </div>
        <div className="absolute top-[342px] left-[363px] w-[230px] h-[26px] text-darkslategray-100">
          <div className="absolute top-[2px] left-[0px] font-medium">
            Phone No :
          </div>
          <div className="absolute top-[0px] left-[128px] font-medium text-black">
            9999999999
          </div>
        </div>
        <div className="absolute top-[288px] left-[659px] w-[188px] h-[95px]">
          <div className="absolute top-[0px] left-[0px] font-medium text-darkslategray-100">
            Address :
          </div>
          <div className="absolute top-[3px] left-[95px] font-medium">{`6391 `}</div>
          <div className="absolute top-[37px] left-[95px] font-medium">
            Vellore
          </div>
          <div className="absolute top-[71px] left-[95px] font-medium">
            Tamil Nadu
          </div>
        </div>
      </div>
      {isLogoutOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogout}
        >
          <Logout onClose={closeLogout} />
        </PortalPopup>
      )}
    </>
  );
};

export default Profile;
