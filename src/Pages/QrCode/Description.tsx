import React from "react";

const keyFeatures = [
  "Digital F&B menu, and Ordering",
  "Marketing Engine",
  "AI Based Recommendation Engine",
  "Realtime Content Management Platform",
  "4+ Integration with Industry Leaders",
];

const digitalFnbOrdering = [
  "Interactive in-room dining App (QR Code Based)",
  "Show videos/images of cooking",
  "Send promos & offers",
  "Realtime Content Management Platform",
  "Realtime updates to consumers about product whereabouts",
  "Schedule Notifications and Promotions",
];

const guestSafetyExperience = [
  "Contactless Service Requests",
  "Book Events, Tours & Amenities",
  "Hotel Information easily accessible (Automated FAQ)",
  "BYOD Support (QR Code Based)",
  "Book hotel pick-ups",
  "Reservation Management System",
];

const intelligentDataAnalytics = [
  "Valuable Insights from Guest Usage",
  "Generate daily reports",
  "Hints on Top Used Items, Top queries & more",
  "Generate Graphical representation of guest insights",
  "AI-based real-time graphical representation",
];

const marketingRevenueTools = [
  "Advanced Targeted Marketing Capabilities",
  "AI-based Automated recommendations",
  "Increase Hotel in-room revenue",
  "In-guest Guest Survey",
];

const saveOnStaffMinutes = [
  "Saves Staff Time – Service Requests fulfilled by WooHoo",
  "Reduces Guest Calls",
  "Easy to deploy and maintain",
  "Get Notifications & updates for service requests",
];

const integrations = [
  { label: "PMS", value: "Oracle Opera | WINs | Infor" },
  { label: "POS", value: "Agilysys | Infrasys | Lightspeed | Symphony" },
  { label: "PBX", value: "Alcatel Lucent | NetSapiens | Grandstream" },
  {
    label: "Room Automation",
    value:
      "INTEREL | Honeywell | iRIS | VDA | Schneider | AMX | Lutron | Schneider",
  },
  {
    label: "Housekeeping",
    value: "Messagebox | Amadeus HotSOS | Knowcross | FCS | Go tickin",
  },
  { label: "Table Management System", value: "Table check" },
];

const Description: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Description</h3>
        <p className="text-[#606060] text-base font-inter font-normal mb-6">
          WooHoo QR Code Platform takes care of Guest’s bookings & requests with extraordinary personalized user experience. Contactless. Customizable. Secure.
        </p>
        <div className="mb-8">

         {/* Desktop Table for Integrations */}
        <div className="hidden sm:block overflow-x-auto mb-6">
          <table className="min-w-full bg-white rounded-lg border border-[#f3f3f3]">
            <tbody>
              {integrations.map((item, idx) => (
                <tr key={idx} className="border-b border-[#f3f3f3] text-left">
                  <td className="py-3 px-4 font-normal font-inter text-base text-[#606060] bg-[#F9F9F9] w-[220px] border border-[#EEF2F6]">
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
        {/* Mobile Card View for Integrations */}
        <div className="sm:hidden flex flex-col gap-4 mb-6">
          {integrations.map((item, idx) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Key features</h4>
            <ul className="list-decimal pl-5 text-[#606060] text-base font-inter font-normal space-y-3">
              {keyFeatures.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Digital F&B Ordering</h4>
            <ul className="list-decimal pl-5 text-[#606060] text-base font-inter font-normal space-y-3">
              {digitalFnbOrdering.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <div>
            <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Guest Safety & Experience</h4>
            <ul className="list-decimal pl-5 text-[#606060] text-base font-inter font-normal space-y-3">
              {guestSafetyExperience.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Intelligent Data Analytics</h4>
            <ul className="list-decimal pl-5 text-[#606060] text-base font-inter font-normal space-y-3">
              {intelligentDataAnalytics.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Marketing & Revenue Tools</h4>
            <ul className="list-decimal pl-5 text-[#606060] text-base font-inter font-normal space-y-3">
              {marketingRevenueTools.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        <div className="mb-8">
          <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">Save on Staff Minutes</h4>
          <ul className="list-decimal pl-5 text-[#606060] text-base font-inter font-normal space-y-3">
            {saveOnStaffMinutes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Description;