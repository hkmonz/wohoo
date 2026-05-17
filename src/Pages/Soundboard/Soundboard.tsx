import Design from "../../Components/Commons/Design"
import Description from "./Description"
import SoundboardHero from "./SoundboardHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import YSeriesImg from '../../assets/Images/healthcareyseries.png';
import WellnessDashboardImg from '../../assets/Images/healthcaredashboard.png';
import SoundbarImg from '../../assets/Images/healthcaresoundbar.png';
import ProductSection from "../../Components/Commons/ProductSection";
import InsightSection from "../../Components/Commons/InsightSection";

function Soundboard() {
    const sections = [
        {
            category: 'healthcare',
            label: 'Health Care',
            labelColor: 'text-[#6366F1]',
            mainTitle: [
                { text: 'The Future of ', highlight: false },
                { text: 'Connected Healthcare', highlight: true },
                { text: ' is an AI-Powered Experience.', highlight: false },
            ],
            logoUrl: woohooLogo,

            highlightText: { color: 'text-[#6366F1]' },
            description: '',
            buttonColor: 'bg-[#6366F1] !text-white',
            products: [
                {
                    image: YSeriesImg,
                    logo: woohooLogo,
                    title: 'Y-Series',
                    route: '/y-series',
                    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
                },
                {
                    image: WellnessDashboardImg,
                    logo: woohooLogo,
                    title: 'Wellness Dashboard',
                    route: '/wellness-dashboard',
                    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
                },
                {
                    image: SoundbarImg,
                    logo: woohooLogo,
                    title: 'Soundboard',
                    route: '/soundboard',
                    description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
                },
            ],
        },
    ];

    return (
        <div>
            <SoundboardHero />
            <Description />
            <Design />
            {sections.map((section, index) => (
                <ProductSection
                    // key={index}
                    category={section?.category}
                    label={section?.label}
                    labelColor={section?.labelColor}
                    mainTitle={section?.mainTitle}
                    highlightText={section?.highlightText}
                    description={section?.description}
                    buttonColor={section?.buttonColor}
                    products={section?.products}
                />
            ))}
            <InsightSection />
        </div>
    )
}

export default Soundboard
