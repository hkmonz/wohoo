import React from 'react';
import Team1 from '../../assets/Images/team1.webp'
import Team2 from '../../assets/Images/team2.webp'
import Team3 from '../../assets/Images/team3.webp'
import Team4 from '../../assets/Images/team4.webp'
import Team5 from '../../assets/Images/team5.webp'
interface TeamMember {
    id: number;
    name: string;
    title: string;
    bio: string;
    image: string;
    alignment: 'left' | 'right';
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'KIRTI CHANDEL',
        title: 'Chief Product Officer',
        bio: 'A United Nations Award Winner and Masters in Electronics. 12+ years building Hardware & Software Products with HARMAN, SAMSUNG, and for Smart City projects like ELISIUM, PIF, and NEOM.',
        image: Team1,
        alignment: 'left',
    },
    {
        id: 2,
        name: 'SHARAN BHINDER',
        title: 'Chief Success Officer',
        bio: 'Award-winning Travel, Tourism and Hospitality leader, working closely with Dubai, Saudi, and Singapore Tourism, and Hospitality clients like ACCOR, Hyatt, and Millennium Hotels. 15+ years working at major Airlines.',
        image: Team2,
        alignment: 'right',
    },
    {
        id: 3,
        name: 'SURBHI SHARMA',
        title: 'Chief Experience Officer',
        bio: 'Electronics Engg with 12+ years in Design & Quality. Worked with HAVELLS, HARMAN, SAMSUNG, and built experiences for Dubai Tourism, POSTILLION Hotels, PARK ROYAL etc.',
        image: Team3,
        alignment: 'left',
    },
    {
        id: 4,
        name: 'ADIL KHALID',
        title: 'Chief Operations Officer',
        bio: 'Masters in Network & Security and 15+ years in IT Operations, Infrastructure & Security for major hospitality projects, working with renowned brands like IHG, Accor, and Marriott.',
        image: Team4,
        alignment: 'right',
    },
    {
        id: 5,
        name: 'SAYALEE BELUSE',
        title: 'Chief of Staff',
        bio: 'Electronics Eng with 10+ years in Project Management. Experience with Airlines (Air India, Jet Airways) and Hospitality Groups (Millennium Hotels, ELISIUM)',
        image: Team5,
        alignment: 'left',
    },
];

const Leadership: React.FC = () => {
    return (
        <div className="w-full bg-white">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
                <div className="text-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#C75B66] uppercase tracking-widest !mb-1 ">
                        Leadership
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl !font-normal text-[#000000] !mb-4 tracking-tight">
                        Meet the team
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#5A5C5D] max-w-4xl mx-auto">
                        Working at smartbeings means collaborating with a diverse collective of
                        engineers and designers who value craft above all else.          </p>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
                <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className={`flex flex-col ${member.alignment === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center gap-6 sm:gap-8 lg:gap-12`}
                        >
                            {/* Image */}
                            <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 order-1 lg:order-none">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className=" object-cover  hover:shadow-xl transition-shadow duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className={`${member.alignment === 'left' ? 'lg:text-left' : 'lg:text-right'
                                } flex-1 text-center order-2 lg:order-none max-w-2xl space-y-12`}>
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl !mb-2 !font-medium text-[#140D2D] tracking-tight">
                                    {member.name}
                                </p>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl !mb-3 !font-normal text-[#815BF3]">
                                    {member.title}
                                </p>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leadership;
