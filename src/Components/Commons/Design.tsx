import Logo from "../../assets/Icons/smartbeings.svg";
import Sound from "../../assets/Icons/sound.svg";
function Design() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center items-center md:justify-start pb-4 md:pb-0" >
          <div>

          <img src={Logo} alt="logo img" className="w-auto h-auto" />
          </div>
        </div>
        <div className="flex justify-center items-center text-center md:text-center">
          <div>
            <h1 className="text-[#606060] font-inter font-medium text-xl">
              Design in California, USA
            </h1>
            <p className="text-[#606060] font-inter font-normal text-base">
              info@smartbeings.com | www.smartbeings.com
            </p>
          </div>
        </div>
        <div className=" flex justify-center md:justify-end  items-center ">
          <img src={Sound} alt="sound by ubl" className="w-28 md:w-36" />
        </div>
      </div>
    </div>
  );
}

export default Design;