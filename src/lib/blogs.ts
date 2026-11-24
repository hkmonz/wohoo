import blog1Featured from "../assets/blogs/blog1.0.jpg";
import blog1Inline from "../assets/blogs/blog1.1.png";
import blog2Featured from "../assets/blogs/blog2.0.png";
import blog2Inline from "../assets/blogs/blog2.1.png";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: { title: string; text?: string }[] }
  | { type: "faq"; items: { question: string; answer: string }[] };

export interface Blog {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featuredImage: string;
  content: BlogBlock[];
}

export const blogs: Blog[] = [
  {
    slug: "hotel-pbx-phones-the-future-of-smart-hotels",
    metaTitle: "Hotel PBX Phones: The Future of Smart Hotels",
    metaDescription:
      "Discover how AI-powered Hotel PBX Phones use voice commands to automate room controls, simplify guest requests, and improve hotel communication.",
    title:
      "Hotel PBX Phones: How Voice-Controlled AI Is Changing Hotel Communication",
    excerpt:
      "Discover how AI-powered Hotel PBX Phones use voice commands to automate room controls, simplify guest requests, and improve hotel communication.",
    category: "Hospitality",
    date: "November 04, 2026",
    readTime: "7 min read",
    featuredImage: blog1Featured,
    content: [
      {
        type: "paragraph",
        text: "Hotels are constantly searching for the new method to make their guests feel more relaxed– perhaps even more comfortable than home. And technology is opening up new doors all the time, particularly in the way hotels communicate. For instance, that room phone has been collecting dust for years. However, thanks to voice-activated AI, those PBX telephones have become something entirely different – They're virtual assistants waiting to be activated.",
      },
      {
        type: "paragraph",
        text: 'Imagine this: You\'re lying in bed and say, "A little cold tonight." You don\'t get up, search for a thermostat, call the front desk. Instead, your hotel\'s AI hears what you\'re saying, understands it, and solves the problem. Easy, quick, and frankly, you wonder why it took so long to reach this point.',
      },
      { type: "heading", text: "What Are Hotel PBX Phones, Really?" },
      {
        type: "paragraph",
        text: "Central to that communication system is a hotel PBX phone system, which links all of the guest rooms to hotel departments such as front desk, housekeeping, and room service through a single network. Old systems were simple: you dialed, you were connected, that was about it.",
      },
      {
        type: "paragraph",
        text: "Now it's different. PBX phones of today connect to AI and offer: talk, tap, or Both. Don't just pop a call through on that tiny box by your bed.",
      },
      { type: "heading", text: "How Do Voice-Controlled PBX Phones Work?" },
      {
        type: "paragraph",
        text: "AI minds, learns and runs. Forget codes, menus and awkward phrases. Just tell them how you're feeling and this tech will.",
      },
      { type: "paragraph", text: "Here's what it actually means in real life:" },
      {
        type: "list",
        items: [
          'You mumble, "It\'s cold." The heater turns on.',
          '"More towels, please" Housekeeping is informed immediately.',
          '"Can I order dinner?" It\'s already happening.',
          '"What is the time of my breakfast?"you now know, no having to find the answer.',
          '"Help!" An alarm sounds for the right personnel.',
        ],
      },
      {
        type: "paragraph",
        text: "AI isn't fussing over keywords. It understands all the ways we can ask for the same thing and simply delivers. No uncertainty.",
      },
      { type: "heading", text: "Why Voice-Controlled PBX Phones Matter" },
      {
        type: "numbered",
        items: [
          {
            title: "Hands-Free Comfort",
            text: "Speak up and let the system do it for you. No more searching for tiny buttons or scrolling through dodgy menus.",
          },
          {
            title: "Advanced Room Management",
            text: "Lights, temperature, curtains-adjust anything, just by talking.",
          },
          {
            title: "Quicker Service",
            text: "Gets you onto the right team quickly. Don't have to keep moving around the same question.",
          },
          {
            title: "Staff Can Focus",
            text: "AI can take care of the small stuff, freeing up the hotel staff to focus on the guest and the bigger issues.",
          },
          {
            title: "Personalized Stays",
            text: "AI remembers guest habits & preferences. And the more they return, the more personalized each visit becomes.",
          },
        ],
      },
      { type: "image", src: blog1Inline, alt: "WooHoo guest room assistant" },
      { type: "heading", text: "Meet the Woo Hoo® X-Series: Next-Level PBX" },
      {
        type: "paragraph",
        text: "The Woo Hoo® X Series takes things to the next level. This version is smaller, has a touchscreen, voice control, and more hotel system integrations. From the screen or voice command, anything can be done!",
      },
      {
        type: "paragraph",
        text: 'Suppose the guest says, "It\'s hot, and I\'d like a cheeseburger." And the result is:',
      },
      {
        type: "list",
        items: [
          "Cooking up the heat with Lutron controls.",
          "Sandwich order is entered into Simphony POS.",
          "Housekeeping receives notification for meal delivery through HotSOS.",
          "OPERA PMS tracks it all, and it all goes on your bill.",
        ],
      },
      {
        type: "paragraph",
        text: "Just one request and it's handled-no phone menus, no chasing down staff. Woo Hoo® X-Series does without a camera to make privacy a top priority, provides excellent JBL quality sound, and interfaces with more than 50 hotel systems. Let the guest talk, touch, or combine the two-we make it easy.",
      },
      { type: "heading", text: "What's Next for Hotel PBX Phones?" },
      {
        type: "paragraph",
        text: "Hotel tech is evolving fast. In the near future, a simple press of a handset to ask for more towels will be just as quaint as a rotary dial. Meet the all-in-one wizard: your phone, your assistant, your dashboard. Your guests get immediate service. Your staff get big tasks to do.",
      },
      {
        type: "paragraph",
        text: "Hotels aren't just replacing their phones-they're reinventing the guest experience from the ground up.",
      },
      { type: "heading", text: "Final Thoughts" },
      {
        type: "paragraph",
        text: "These aren't your traditional hotel phones. They're smarter now-very smart. This next-generation of PBX hotel phones does more than establish a call; it hears, it learns, and it responds. Powered by artificial intelligence and intelligent technology- like Woo Hoo® X-Series- guestrooms are becoming more of a bespoke, immersive space.",
      },
      { type: "heading", text: "Commonly Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "What are Hotel PBX Phones?",
            answer:
              "They're the hotel room phones that are supposed to connect you to various departments, but with AI, they can do much more-control the room, order room service, and more-all through your voice.",
          },
          {
            question: "How do Voice-Controlled PBX Phones Work?",
            answer:
              "It's easy. You tell us what you need and the AI takes care of it, whether you want something in your room, to know more, or to get some assistance.",
          },
          {
            question: "Are these phones voice controlled to adjust room temperature?",
            answer: "Yes-just tell them what you want and you're good to go.",
          },
          {
            question: "How do these new models enhance the guest journey?",
            answer:
              "They speed up everything. It's easy and fast to get things done. No waiting, no needing to figure out what they want, just tell them!",
          },
          {
            question: "How do old and AI based PBX phones compare?",
            answer:
              "Old ones only connect you with someone. AI ones hear you say what you want, make adjustments, and do something about it.",
          },
          {
            question: "Do these systems link up with hotel management software?",
            answer:
              "They do. The best AI PBX systems can integrate with hotel management, POS, and all the other apps that you use to make it easier to keep things running seamlessly.",
          },
          {
            question: "What is the Woo Hoo® X-Series?",
            answer:
              "Not just a desk assistant. Smart Beings in-room Assistant with all the bells and whistles: Touchscreen, voice, loud audio, and loads of integration with hotel software.",
          },
          {
            question: "So what does it all mean?",
            answer:
              "Hotels are jumping on the voice AI and smart bandwagon. Bookings will only get easier, more streamlined and a lot more intuitive.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-powered-hotel-automation-for-smarter-guest-rooms",
    metaTitle: "AI-Powered Hotel Automation for Smarter Guest Rooms",
    metaDescription:
      "Discover how AI-powered hotel automation uses voice control to connect room devices, simplify guest requests and create smarter hotel experiences.",
    title: "AI-powered hotel automation: voice control for guest rooms",
    excerpt:
      "Discover how AI-powered hotel automation uses voice control to connect room devices, simplify guest requests and create smarter hotel experiences.",
    category: "Hospitality",
    date: "November 18, 2026",
    readTime: "5 min read",
    featuredImage: blog2Featured,
    content: [
      {
        type: "paragraph",
        text: "Guests arrive expecting the convenience they have at home: a quick answer, a light that responds, a request that reaches someone. AI-powered hotel automation connects room technology, hotel services and the systems the hotel runs on, so a guest can speak to change the room or ask for something instead of working through switches, apps and phone menus.",
      },
      { type: "heading", text: "What it is" },
      {
        type: "paragraph",
        text: "AI-powered hotel automation combines AI, voice assistants, connected devices and software integrations. A guest asks for the lights to dim, the temperature to drop, fresh towels, or the restaurant hours. The assistant reads the request and, where the integration exists, carries it out or passes it to the department that handles it.",
      },
      { type: "heading", text: "Voice control" },
      {
        type: "paragraph",
        text: 'Voice is the part guests notice. A guest says "the room is too cold" and the system reaches the climate control and moves the setpoint within the limits the hotel has set. Lights, curtains, entertainment and housekeeping requests work the same way once they are connected. Speaking is easier than switching when you are unpacking, holding a bag, or already lying down.',
      },
      { type: "image", src: blog2Inline, alt: "Voice controlled guest room" },
      { type: "heading", text: "The room and the rest of the hotel" },
      {
        type: "paragraph",
        text: "A voice assistant gives guests one entry point for room controls, entertainment, guest directories, digital menus and requests to other departments. Where the hotel has integrated its property management system (PMS), point-of-sale (POS) software or other hospitality tools, the assistant can reach those too, which shortens the distance between what a guest asks for and what the hotel does about it. A guest can look up a service and place a request through the same interface, and the details arrive in the system or with the team that owns the task. Which actions are available depends on a hotel's integrations and how they are configured.",
      },
      { type: "heading", text: "Preferences and access" },
      {
        type: "paragraph",
        text: "Connected rooms make preferences easier to keep. With the right integrations and permissions, a guest can set lighting and temperature the way they like it and find dining, wellness and other services in a digital menu instead of a printed guide or a call to the desk. Services are easier to find, and staff spend less time answering questions a screen could have answered.",
      },
      { type: "heading", text: "What it does for hotel teams" },
      {
        type: "paragraph",
        text: "Requests that arrive digitally and route to the right department are easier to track than ones taken by phone and written on a pad. Repetitive jobs shrink, teams hand work to each other with fewer gaps, and staff get time back for the parts of service that need a person. Where the integrations allow it, staff can also see service requests, device status and usage patterns, which helps them spot recurring problems and plan maintenance. Not every interaction needs automating, but most of the routine ones can go.",
      },
      { type: "heading", text: "Why a voice platform such as WooHoo" },
      {
        type: "paragraph",
        text: "SmartBeings builds WooHoo, a voice-enabled system for guest rooms and hotel services that puts room controls, service requests and hotel systems in one place. The room phone, the speaker, the display and the service menu become parts of one interface rather than four separate things to learn. WooHoo works with hospitality systems and voice-led interaction, so guests can ask for information or a service without going looking for it. Guests use this technology in a private room, so the platform has to be built with that in mind. It also has to be something guests can work out without instructions and staff can run without a training week, and it has to fit the technology the hotel already installed.",
      },
      { type: "heading", text: "Where this is going" },
      {
        type: "paragraph",
        text: "Guests will keep expecting hotel technology to be simple and quick. Voice gives them one way to reach a connected room, and integrations do the rest out of sight. Hotel systems that talk to each other matter more than another screen on the wall. With voice at the front and integrations behind it, a stay takes less effort to manage, and a request spends less time waiting for someone to notice it.",
      },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            question: "What is AI-powered hotel automation?",
            answer:
              "It uses AI, voice assistants, connected devices and software integrations to simplify guest interactions and support hotel operations.",
          },
          {
            question: "How does voice-controlled hotel automation work?",
            answer:
              "A guest speaks a request. The system interprets it and, when it is connected to the relevant device or hotel platform, performs the action or forwards the request to the team that handles it.",
          },
          {
            question: "What can guests control with a hotel voice assistant?",
            answer:
              "Depending on the setup: lighting, room temperature, curtains and entertainment, plus dining information, housekeeping, room service and other hotel services.",
          },
          {
            question: "Can it connect to the systems a hotel already runs?",
            answer:
              "Yes, with supported property management systems, POS software and other hotel technology. Which functions work depends on compatibility and configuration.",
          },
          {
            question: "Does automation replace hotel staff?",
            answer:
              "No. It takes repetitive work off them and routes requests, but personal service, complicated requests and the parts of a stay people remember still need people.",
          },
          {
            question: "How does WooHoo fit in?",
            answer:
              "WooHoo, from SmartBeings, brings voice interaction and connected guest room technology together so guests can reach room controls and hotel services through one platform.",
          },
          {
            question: "Can it handle room service requests on its own?",
            answer:
              "A guest asks by voice, and the integrated system reads the request and sends it to the department that fulfils it.",
          },
          {
            question: "How does voice control improve the stay?",
            answer:
              "Guests control the room, find services and make requests in ordinary language, which saves them a walk to the desk or a search for the right app.",
          },
        ],
      },
    ],
  },
];

export const getBlogBySlug = (slug?: string): Blog | undefined =>
  blogs.find((blog) => blog.slug === slug);

export const getRelatedBlogs = (slug: string, limit = 2): Blog[] =>
  blogs.filter((blog) => blog.slug !== slug).slice(0, limit);
