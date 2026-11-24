import { blogs } from "./blogs";
import homeHeroImage from "../assets/Images/homehero.webp";
import hospitalityImage from "../assets/Images/x-series.webp";
import healthcareImage from "../assets/Images/healthcareyseries.webp";
import workplaceImage from "../assets/Images/workplacekingdom.webp";
import xSeriesImage from "../assets/Images/xseriesproduct.webp";
import ySeriesImage from "../assets/Images/yseriesproduct.webp";
import zSeriesImage from "../assets/Images/zseriesproduct.webp";
import tabletImage from "../assets/Images/tablet.webp";
import qrCodeImage from "../assets/Images/qrcodes.webp";
import wellnessImage from "../assets/Images/healthcaredashboard.webp";
import soundboardImage from "../assets/Images/healthcaresoundbar.webp";
import meetingRoomImage from "../assets/Images/meetingroom.webp";
import avatarImage from "../assets/Images/genai.webp";
import careersImage from "../assets/Images/explorecareer1.webp";

export interface SeoEntry {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}

export const SITE_NAME = "SmartBeings";

const withSiteName = (title: string) =>
  title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

export const seoRoutes: Record<string, SeoEntry> = {
  "/": {
    title: `Next-Generation Agentic AI Assistants for a Smarter World`,
    description:
      "Discover next-generation Agentic AI Assistants powered by Generative AI and Voice AI for intelligent automation and seamless experiences.",
    image: homeHeroImage,
    type: "website",
  },
  "/hospitality": {
    title: `AI Agents for Hotels & Agentic AI | ${SITE_NAME}`,
    description:
      "Explore AI Agents for Hotels powered by Agentic AI to streamline hotel operations automation, enhance guest experiences, and simplify daily tasks.",
    image: hospitalityImage,
    type: "website",
  },
  "/products": {
    title: `AI Agents for Hotels & Agentic AI | ${SITE_NAME}`,
    description:
      "Explore AI Agents for Hotels powered by Agentic AI to streamline hotel operations automation, enhance guest experiences, and simplify daily tasks.",
    image: hospitalityImage,
    type: "website",
  },
  "/healthcare": {
    title: `Agentic AI for Healthcare | ${SITE_NAME}`,
    description:
      "Explore Agentic AI and advanced voice recognition systems that simplify healthcare workflows, support medical staff, and enhance patient experiences.",
    image: healthcareImage,
    type: "website",
  },
  "/workplace": {
    title: `AI Copilot & Voice Recognition Technology | ${SITE_NAME}`,
    description:
      "Explore AI Copilot and voice recognition technology that simplify workplace tasks, improve team productivity, and enable smarter workplace experiences.",
    image: workplaceImage,
    type: "website",
  },
  "/blogs": {
    title: `SmartBeings Blog | AI Insights, Trends & Updates`,
    description:
      "Explore the SmartBeings blog for the latest AI insights, industry trends, expert perspectives, and innovations in hospitality, healthcare, and workplace technology.",
    type: "website",
  },
  "/careers": {
    title: `Careers at SmartBeings | Explore Job Opportunities`,
    description:
      "Explore career opportunities at SmartBeings and join a team building innovative AI solutions that transform hospitality, healthcare, and workplace experiences.",
    image: careersImage,
    type: "website",
  },
  "/x-series": {
    title: `AI Technology in Hospitality Industry | SmartBeings`,
    description:
      "Explore AI technology in the hospitality industry with intelligent voice assistants that streamline hotel operations and improve guest experiences.",
    image: xSeriesImage,
    type: "website",
  },
  "/y-series": {
    title: `Conversational AI for Healthcare Industry | SmartBeings`,
    description:
      "Enhance patient experiences and simplify healthcare workflows with conversational AI solutions designed for modern healthcare environments.",
    image: ySeriesImage,
    type: "website",
  },
  "/z-series": {
    title: `Voice Activated Technology for Workplace | SmartBeings`,
    description:
      "Transform workplace productivity with voice-activated technology and AI assistants that simplify everyday tasks and improve employee experiences.",
    image: zSeriesImage,
    type: "website",
  },
  "/tablet": {
    title: `AI for Hospitality Industry | SmartBeings`,
    description:
      "Discover AI solutions for the hospitality industry that streamline operations, personalize guest services, and support smarter hotel experiences.",
    image: tabletImage,
    type: "website",
  },
  "/qrcode": {
    title: `AI for Hotels | SmartBeings`,
    description:
      "Improve hotel guest experiences with ai that simplify requests, deliver personalized recommendations, and support hotel services.",
    image: qrCodeImage,
    type: "website",
  },
  "/wellness-dashboard": {
    title: `Voice Activated Technology for Healthcare Industry | SmartBeings`,
    description:
      "Explore voice activated technology for healthcare to streamline workflows, support staff, and deliver smarter, more personalized patient experiences.",
    image: wellnessImage,
    type: "website",
  },
  "/soundboard": {
    title: `AI Assistant for Healthcare Industry | SmartBeings`,
    description:
      "Simplify healthcare workflows with AI assistants that support staff, improve communication, and enhance patient experiences.",
    image: soundboardImage,
    type: "website",
  },
  "/meeting-room-tablet": {
    title: `Voice Recognition Technology for Workplace | SmartBeings`,
    description:
      "Boost workplace efficiency with voice recognition technology that simplify daily tasks, provide instant information, and enhance employee productivity.",
    image: meetingRoomImage,
    type: "website",
  },
  "/avatar": {
    title: `Generative AI for Workplace | SmartBeings`,
    description:
      "Discover generative AI for the workplace with intelligent assistants that deliver instant answers, streamline tasks, and support better decision-making.",
    image: avatarImage,
    type: "website",
  },
};

export const blogSeoRoutes: Record<string, SeoEntry> = blogs.reduce(
  (acc, blog) => {
    acc[`/blogs/${blog.slug}`] = {
      title: withSiteName(blog.metaTitle),
      description: blog.metaDescription,
      image: blog.featuredImage,
      type: "article",
    };
    return acc;
  },
  {} as Record<string, SeoEntry>
);

export const allSeoRoutes: Record<string, SeoEntry> = {
  ...seoRoutes,
  ...blogSeoRoutes,
};

export const DEFAULT_SEO: SeoEntry = seoRoutes["/"];

export const getSeo = (pathname: string): SeoEntry => {
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return allSeoRoutes[normalized] ?? DEFAULT_SEO;
};
