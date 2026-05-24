import XSeriesCard from "../../Components/Commons/XSeriesCard";
import xseriessmall1 from "../../assets/Images/xseriessmall1.webp";
import xseriessmall2 from "../../assets/Images/xseriessmall2.webp";
import xseriessmall3 from "../../assets/Images/xseriessmall3.webp";
import xserieslarge1 from "../../assets/Images/xserieslarge1.webp";
import xserieslarge2 from "../../assets/Images/xserieslarge2.webp";
import xserieslarge3 from "../../assets/Images/xserieslarge3.webp";
import WoohooLogo from "../../assets/Icons/sound.svg";
import Wohoo from "../../assets/Icons/woohoo.svg";
function XSeriesHero() {
    const smallImages = [xseriessmall1, xseriessmall2, xseriessmall3];
  const largeImages = [xserieslarge1, xserieslarge2, xserieslarge3];
  
  const features = [
    "Enterprise Voice AI Assistant",
    "Immersive Audio with JBL by HARMAN",
    "7 inch interactive touch display",
    "Enterprise grade security with MDM",
    "Anti-Theft Locking system",
    "In-built Battery",
  ];
  return (
    <div>
      <section
        className="flex justify-center items-center  px-4 sm:px-8 pt-35 md:pt-30 h-auto lg:h-[80vh] xl:h-[90vh]"
      >

        <XSeriesCard
        title="X Series"
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

export default XSeriesHero;