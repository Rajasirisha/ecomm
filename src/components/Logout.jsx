import { useCallback } from "react";

const Logout = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "welcome Login page" to the project
  }, []);

  return (
    <div className="relative w-[418px] h-64 max-w-full max-h-full overflow-auto text-left text-xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[418px] h-64 text-center text-darkslateblue">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[418px] h-64" />
        <div className="absolute top-[70px] left-[75px] leading-[25px] font-semibold flex items-center w-[265px]">
          <span className="[line-break:anywhere] w-full">
            <span>{`Are you sure you want to `}</span>
            <span className="text-red-100">{`Logout `}</span>
            <span>?</span>
          </span>
        </div>
      </div>
      <div
        className="absolute top-[168px] left-[225px] w-[99px] h-[35px] cursor-pointer"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-red-200 w-[99px] h-[35px]" />
        <div className="absolute top-[2px] left-[17px] font-medium">Logout</div>
      </div>
      <div className="absolute top-[168px] left-[96px] w-[99px] h-[35px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkslateblue w-[99px] h-[35px]" />
        <div className="absolute top-[2px] left-[17px] font-medium">Cancel</div>
      </div>
    </div>
  );
};

export default Logout;
