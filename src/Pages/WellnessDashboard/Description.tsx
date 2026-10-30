import React from "react";

const Specification = [
  { label: "Display Size", value: '15.6 Full HD Touch Display' },
  { label: "Resolution (Main Display)", value: "1920 × 1080 (FHD)" },
  { label: "Technology (Main Display)", value: "IPS LCD Panel" },
  { label: "Touch Support", value: "10-Point Multi-Touch" },
  { label: "Processor", value: "Quad-Core AI Optimized Processor" },
  { label: "Memory (RAM)", value: "8 GB" },
  { label: "Internal Storage", value: "128 GB SSD" },
  { label: "Operating System", value: "WooHoo® Wellness OS" },
  { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.2" },
  { label: "Smart Integration", value: "Apple Health, Google Fit, Fitbit" },
  { label: "Health Monitoring", value: "Sleep, Activity, Heart Rate, Hydration" },
  { label: "AI Wellness Insights", value: "Personalized Recommendations" },
  { label: "Voice Assistant Support", value: "Yes" },
  { label: "Camera", value: "5 MP HD Front Camera" },
  { label: "Audio System", value: "Dual Stereo Speakers" },
  { label: "Privacy Features", value: "Local Data Encryption" },
  { label: "Power Supply", value: "USB-C Power Delivery" },
  { label: "Mounting Options", value: "Desktop & Wall Mount" },
  { label: "Dimension", value: "355 × 220 × 18 mm" },
  { label: "Weight (g)", value: "1.4 kg" },
];

const Description: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Description
        </h3>
        <p className="text-[#606060] text-base font-inter font-normal mb-6">
          The WooHoo® Wellness Dashboard is a modern all-in-one personal wellness hub designed to help users monitor, manage, and improve their daily health routines from a single intuitive interface. Built for smart homes, hospitality spaces, wellness centers, and premium living environments, the dashboard combines real-time health insights, sleep tracking, activity monitoring, hydration reminders, and personalized wellness recommendations into a seamless digital experience. 
          With an elegant touchscreen interface, voice activated technology, and AI-powered analytics, users can easily track wellness goals, monitor daily performance, review sleep quality, and access actionable insights tailored to their lifestyle. The platform integrates smoothly with wearable devices, smart home ecosystems, and health applications to provide a connected wellness experience with an intelligent AI assistant.

<br /> <br />
Designed with simplicity and personalization in mind, the WooHoo® Wellness Dashboard empowers users to build healthier habits while maintaining privacy, comfort, and convenience in everyday life.
        </p>
        <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Specification
        </h4>
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg border border-[#f3f3f3]">
            <tbody>
              {Specification.map((item, idx) => (
                <tr key={idx} className="border-b border-[#f3f3f3] text-left">
                  <td className="py-3 px-4 font-normal font-inter text-base text-[#606060] bg-[#F9F9F9] w-[320px] border border-[#EEF2F6]">
                    {item.label}
                  </td>
                  <td className="py-3 px-4 font-normal font-inter text-base text-[#606060] bg-[#F9F9F9] border border-[#EEF2F6]">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Card View */}
        <div className="sm:hidden flex flex-col gap-4">
          {Specification.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F9F9F9] rounded-lg border border-[#EEF2F6] p-0"
            >
              <div className="px-4 py-3 border-b border-[#EEF2F6] font-inter font-semibold text-[#0F172A] text-base">
                {item.label}
              </div>
              <div className="px-4 py-2">
                <div className="text-[#606060] font-inter text-sm">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
