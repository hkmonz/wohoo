import Leadership from './Leadership'
import Hero from './Hero'
import ExploreCard from '../../Components/Commons/ExploreCard'
import AwardCarousel from '../../Components/Commons/AwardCarousel'
import InsightSection from '../../Components/Commons/InsightSection'
import ExploreCareer1 from '../../assets/Images/explorecareer1.webp'
import ExploreCareer2 from '../../assets/Images/explorecareer2.webp'
import ExploreCareer3 from '../../assets/Images/explorecareer3.webp'
import ExploreCareer4 from '../../assets/Images/explorecareer4.webp'
import ExploreCareer5 from '../../assets/Images/explorecareer5.webp'
function Careers() {
    const ExploreCardData = [
        {
            label: "Explore",
            title: "Channels & Partners",
            image: ExploreCareer1,
            description: "We're curating the future of digital art through high-precision engineering and human-centric product design.",
            labelColor: "text-[#6F8EB9]",
            imgWidth: 'max-w-100'
        },
        {
            label: "Explore",
            title: "Sales & Marketing",
            image: ExploreCareer2,
            description: "We're curating the future of digital art through high-precision engineering and human-centric product design.",
            labelColor: "text-[#86C753]",
            imgWidth: 'max-w-65'
        },
        {
            label: "Explore",
            title: "AI Data Engineering",
            image: ExploreCareer3,
            description: "We're curating the future of digital art through high-precision engineering and human-centric product design.",
            labelColor: "text-[#6FB7C1]",
            imgWidth: 'max-w-80'
        },
        {
            label: "Explore",
            title: "Hardware Engineering",
            image: ExploreCareer4,
            description: "We're curating the future of digital art through high-precision engineering and human-centric product design.",
            labelColor: "text-[#D670DE]",
            imgWidth: 'max-w-80'
        },
        {
            label: "Explore",
            title: "Interns",
            image: ExploreCareer5,
            description: "We're curating the future of digital art through high-precision engineering and human-centric product design.",
            labelColor: "text-[#5A5DC3]",
            imgWidth: 'w-80'
        },
    ]
    return (
        <div>
            <Hero />
            {ExploreCardData.map((card, index) => (
                <ExploreCard
                    key={index}
                    label={card.label}
                    title={card.title}
                    description={card.description}
                    labelColor={card.labelColor}
                    image={card.image}
                    imgWidth={card.imgWidth}
                />
            ))}
            <Leadership />
            <AwardCarousel/>
            <InsightSection/>
        </div>
    )
}

export default Careers
