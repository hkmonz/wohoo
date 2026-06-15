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
            description: "Building strategic collaborations with technology providers, system integrators, and global partners to expand intelligent solutions across hospitality, enterprise, and smart living ecosystems.",
            labelColor: "text-[#6F8EB9]",
            imgWidth: 'max-w-100'
        },
        {
            label: "Explore",
            title: "Sales & Marketing",
            image: ExploreCareer2,
            description: "Driving brand growth through data-driven campaigns, customer engagement strategies, and innovative digital experiences that connect products with the right audiences.",
            labelColor: "text-[#86C753]",
            imgWidth: 'max-w-65'
        },
        {
            label: "Explore",
            title: "AI Data Engineering",
            image: ExploreCareer3,
            description: "Transforming complex data into actionable intelligence through scalable AI pipelines, predictive analytics, and machine learning solutions designed for smarter decision-making.",
            labelColor: "text-[#6FB7C1]",
            imgWidth: 'max-w-80'
        },
        {
            label: "Explore",
            title: "Hardware Engineering",
            image: ExploreCareer4,
            description: "Designing and developing next-generation smart devices with a focus on performance, reliability, seamless integration, and human-centered innovation.",
            labelColor: "text-[#D670DE]",
            imgWidth: 'max-w-80'
        },
        {
            label: "Explore",
            title: "Interns",
            image: ExploreCareer5,
            description: "Empowering emerging talent through hands-on experience, mentorship, and real-world projects that inspire creativity, learning, and future innovation.",
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
