import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface FooterSectionItem {
  label: string;
  href?: string;
  value?: string;
}

interface FooterSection {
  title: string;
  type: 'links' | 'contact';
  items: FooterSectionItem[];
}

interface SocialLink {
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface FooterProps {
  aboutText?: string;
  sections?: FooterSection[];
  newsletterTitle?: string;
  logoUrl?: string;
  socialLinks?: SocialLink[];
}

export default function Footer({
  aboutText = '',
  sections = [],
  newsletterTitle = 'Subscribe to our latest news',
  logoUrl = '',
  socialLinks = [],
}: FooterProps) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[v0] Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#0B0B0B] text-slate-300 pt-10 sm:pt-14 lg:pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* About Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About Us
          </h2>
          <p className="text-[#7C8A9F] leading-relaxed text-sm sm:text-base lg:text-lg">
            {aboutText ||
              "SmartBeings is a Silicon Valley-based company and the developer of WooHoo and Agentic AI operating system for the physical enterprise, powered by sound by JBL, an award-winning world’s first Generative AI Voice Assistant. Redefining the landscape of technology, SmartBeings brings the power of Voice-as-a-Service (VaaS), and a Cloud-based AI Platform to Hospitality Industry, Senior care and Enterprises alike, delivering unparalleled convenience through advanced voice AI technologies."}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {sections && sections.length > 0 ? (
            sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-white !font-normal mb-4 sm:mb-6 !text-lg sm:!text-xl lg:!text-2xl">
                  {section.title}
                </h3>
                {section.type === 'links' ? (
                  <ul className="space-y-2 sm:space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href={item.href || '#'}
                          className="text-[#7C8A9F] text-sm sm:text-base hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-2 sm:space-y-3 text-[#7C8A9F] text-sm sm:text-base">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        {item.label === 'email' && item.value ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="hover:text-white transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p>{item.value || item.label}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <>
              {/* What We Do */}
              <div>
                <h3 className="text-white !font-normal mb-4 sm:mb-6 !text-lg sm:!text-xl">
                  What We Do
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {['Hospitality', 'Healthcare', 'Workplace'].map((item) => {
                    const route = `/${item.toLowerCase()}`;
                    return (
                      <li key={item}>
                        <a
                          href={route}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(route);
                          }}
                          className="text-[#7C8A9F] text-sm sm:text-base lg:text-lg hover:text-white transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="text-white !font-normal mb-4 sm:mb-6 !text-lg sm:!text-xl">
                  Useful Links
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {['General Info', 'Resources', 'Privacy Policy', 'Terms Of Services', 'Contract & Payment'].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-[#7C8A9F] text-sm sm:text-base lg:text-lg hover:text-white transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Connect With Us */}
              <div className="sm:col-span-2 md:col-span-1">
                <h3 className="text-white !font-normal mb-4 sm:mb-6 !text-lg sm:!text-xl">
                  Connect With Us
                </h3>
                <div className="space-y-2 sm:space-y-3 text-[#7C8A9F] text-sm sm:text-base lg:text-lg">
                  <p>90 Middlefield Rd, Menlo Park, California-94025, United States of America</p>
                  <a
                    href="mailto:info@heywooohoo.com"
                    className="block hover:text-white transition-colors"
                  >
                    Info@smartbeings.com
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 sm:py-10 lg:py-12 border-b border-t border-slate-800">
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold !mb-4 sm:!mb-6">
            {newsletterTitle}
          </h3>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center max-w-2xl"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email here"
              className="w-full flex-1 rounded-full border border-slate-700 bg-white px-5 py-3 sm:py-4 !text-black text-sm sm:text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              required
            />
            <button
              type="submit"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#A081FF] px-6 sm:px-8 !text-white text-sm sm:text-base font-normal whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 sm:gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            {logoUrl ? (
              <img src={logoUrl} alt="WooHoo Logo" className="h-8 sm:h-10 w-auto" />
            ) : (
              <div className="text-white font-bold text-lg sm:text-xl">WooHoo®</div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-slate-400 text-sm sm:text-base">Follow Us</span>
            <div className="flex items-center gap-4">
              {socialLinks && socialLinks.length > 0 ? (
                socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-white"
                    aria-label={social.label}
                  >
                    {social.icon || social.label}
                  </a>
                ))
              ) : (
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}