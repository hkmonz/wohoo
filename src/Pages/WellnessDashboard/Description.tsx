import React from "react";

const Specification = [
  { label: "Size (Main Display)", value: "22.05cm (8.7”)" },
  { label: "Resolution (Main Display)", value: "1340 × 800 (WXGA+)" },
  { label: "Technology (Main Display)", value: "TFT" },
  { label: "Colour Depth (Main Display)", value: "16M" },
  { label: "Rear Camera - Resolution", value: "8.0 MP" },
  { label: "Front Camera - Resolution", value: "2.0 MP" },
  { label: "Battery Capacity (mAh, Typical)", value: "5100" },
  { label: "Dimension (HxWxD, mm)", value: "212.5 × 124.7 × 8.0" },
  { label: "Weight (g)", value: "366" },
  { label: "Available Storage (GB)", value: "19.5" },
  { label: "External Storage Support", value: "MicroSD (Up to 1TB)" },
  { label: "USB Version", value: "USB 2.0" },
  { label: "Location Technology", value: "GPS, Glonass, Beidou, Galileo" },
  { label: "Wi-Fi", value: "802.11 A/B/G/N/AC 2.4G+5GHz, VHT80" },
  { label: "Wi-Fi Direct", value: "Yes" },
  { label: "Bluetooth Version", value: "Bluetooth v5.0" },
  { label: "Bluetooth Profiles", value: "A2DP, AVRCP, DI, HID, HOGP, HSP, OPP, PAN" },
  { label: "PC Sync.", value: "SMART SWITCH (PC VERSION)" },
  { label: "Video Playing Resolution", value: "FHD (1920 × 1080) @30fps" },
  { label: "Video Playing Format", value: "MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM" },
  { label: "Audio Playing Format", value: "MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA" },
  { label: "Earjack", value: "3.5mm Stereo" },
];

const integrations = [
  { label: "PMS", value: "Oracle Opera | WINs | Info | MEWS etc." },
  { label: "POS", value: "Agilysys | Infrasys | Lightspeed | Symphony etc." },
  { label: "PBX", value: "Alcatel Lucent | NetSapiens | Grandstream  etc." },
  {
    label: "Room Automation",
    value:
      "INTEREL | Honeywell | iRIS | VDA | Schneider | AMX | Lutron | Schneider etc.",
  },
  {
    label: "Housekeeping",
    value: "Messagebox | Amadeus HotSOS | Knowcross | FCS | Go tickin  etc.",
  },
  { label: "Table Management System", value: "Table check etc." },
];

const Description: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Description
        </h3>
        <p className="text-[#606060] text-base font-inter font-normal mb-6">
          Transform your guest experience with the WooHoo Tablet by Samsung.
          This powerful in-room tablet serves as an all-in-one AI assistant,
          putting modern, contactless convenience at your guests' fingertips.
          They can place orders, manage room settings, and connect with staff
          using simple voice or touch commands. Reinforce your brand with a
          fully customizable interface and benefit from deep integration with
          over 40+ property management and POS systems to simplify operations and
          deliver a truly luxurious stay.
        </p>
         <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Integrations
        </h4>
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