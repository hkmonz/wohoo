import XSeriesCard from "../../Components/Commons/XSeriesCard";
import xseriessmall1 from "../../assets/Images/yseriessmall1.png";
import xseriessmall2 from "../../assets/Images/yseriessmall2.png";
import xseriessmall3 from "../../assets/Images/yseriessmall3.png";
import xserieslarge1 from "../../assets/Images/yserieslarge1.png";
import xserieslarge2 from "../../assets/Images/yserieslarge2.png";
import xserieslarge3 from "../../assets/Images/yserieslarge3.png";
import WoohooLogo from "../../assets/Icons/sound.svg";
import Wohoo from "../../assets/Icons/woohoo.svg";
function YSeriesHero() {
  const smallImages = [xseriessmall1, xseriessmall2, xseriessmall3];
  const largeImages = [xserieslarge1, xserieslarge2, xserieslarge3];

  const features = [

    "In-Room assistant (Phone, Clock, Speaker, Tablet)",
    "5MP HD camera with 330° rotation",
    "Help with telehealth consultations",
    "Gen AI based avatars with pill reminder",
    "Video conferencing with friends and families",
    "Meditative music helping with a sound sleep",
    "Virtual care giving & remote monitoring"

  ];
  return (
    <div>
      <section
        className="flex justify-center items-center  px-4 sm:px-8 pt-35 md:pt-20 h-auto lg:h-screen xl:h-90vh"
      >

        <XSeriesCard
          title="Y Series"
          largeImages={largeImages}
          smallImages={smallImages}
          features={features}
          soundLogo={WoohooLogo}
          brandLogo={Wohoo}
        />
      </section>
    </div>
  );
};

export default YSeriesHero;