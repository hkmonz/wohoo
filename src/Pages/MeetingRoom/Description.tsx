import React from "react";

const Specification = [
  { label: "Size (Main Display)", value: "22.05cm (8.7”)" },
  { label: "Resolution (Main Display)", value: "1280 × 800 IPS Display" },
  { label: "Technology (Main Display)", value: "10-Point Capacitive Touch" },
  { label: "Processor", value: "Quad-Core ARM Processor" },
  { label: "Memory (RAM)", value: "4 GB" },
  { label: "Internal Storage", value: "64 GB" },
  { label: "Operating System", value: "WooHoo RoomOS" },
  { label: "Calendar Integration", value: "Google Calendar, Outlook, Microsoft 365" },
  { label: "Meeting Platforms", value: "Zoom, Microsoft Teams, Google Meet" },
  { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.1" },
  { label: "Ethernet Support", value: "Gigabit Ethernet (PoE Supported)" },
  { label: "Camera Support", value: "Optional External Camera Integration" },
  { label: "Location Technology", value: "Optional External Camera Integration" },
  { label: "Audio Support", value: "Built-in Microphone & Speaker" },
  { label: "NFC Support", value: "Yes" },
  { label: "Room Status Indicators", value: "LED Availability Lighting" },
  { label: "Remote Management", value: "Cloud Device Management" },
  { label: "Multi-User Support", value: "Yes" },
  { label: "Dimensions", value: "245 × 165 × 18 mm" },
  { label: "Weight", value: "620 g" },
  { label: "Color Options", value: "Matte Black / Silver" },
  { label: "Mounting Options", value: "Wall Mount & Glass Mount" },
];


const Description: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Description
        </h3>
        <p className="text-[#606060] text-base font-inter font-normal mb-6">
          The WooHoo® Meeting Room Tablet is a smart scheduling and collaboration display built to simplify workplace communication and meeting room management. Designed for modern offices, corporate environments, co-working spaces, and enterprise facilities, the tablet provides real-time room availability, meeting schedules, calendar synchronization, and instant booking functionality through a clean and intuitive interface.
<br /> <br />
With seamless integration into platforms such as Microsoft Teams, Google Calendar, and Zoom Rooms, users can efficiently manage meetings, reduce scheduling conflicts, and improve workspace utilization. The sleek touchscreen display offers quick access to upcoming meetings, room status indicators, attendee information, and booking controls all from a single centralized device.
Powered by enterprise-grade hardware and secure cloud connectivity, the WooHoo® Meeting Room Tablet enhances productivity while maintaining a professional and streamlined meeting experience.
        </p>

       
        <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Specification
        </h4>
        {/* Desktop Table */}
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