import React from "react";

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

const specificationRows = [
  {
    label: "Speaker Configuration",
    specs: [
      { name: "Audio Drivers", value: "2pcs x 43×45mm Woofer (JBL by Harman)" },
      {
        name: "Passive Radiator",
        value: "2pcs * 56 mm Round passive radiator (JBL by Harman)",
      },
      {
        name: "Acoustic Chamber",
        value: "Custom build JBL by Harman acoustic chamber (0.4 L)",
      },
    ],
  },
  {
    label: "EE Specifications",
    specs: [
      {
        name: "Input",
        value: "4 MICS, Voice Process (DSPC), Noise/Echo Cancellation",
      },
      { name: "Memory", value: "4 GB RAM. EMMC, 16GB memory" },
      { name: "Battery", value: "1X 3SIP@2000mAh 18650 Battery" },
      {
        name: "Power Adapter",
        value: "1X Adaptor, 15V/2A, 100-240 V AC, 50/60Hz",
      },
      { name: "Ports", value: "1X USB, 1X AUX, 1X SUSB, 1X Locking System" },
      { name: "Dimensions", value: "W 130mm X D 91mm X H 230 mm" },
    ],
  },
  {
    label: "Display",
    specs: [
      { name: '7" with Touch Display', value: "800X1280, RGB" },
      { name: "", value: "IPS" },
      { name: "", value: "MIPI interface for Display" },
      { name: "", value: "12C Interface for Touch" },
    ],
  },
  {
    label: "Buttons",
    specs: [
      {
        name: "4 Buttons",
        value: "Vol up, Vol down, Power on/off/, Screen on/off, Mic mute",
      },
    ],
  },
  {
    label: "LED",
    specs: [{ name: "4 RGB LED", value: "Vol+, Vol-,Power on/off, Mic mute" }],
  },
  {
    label: "Bluetooth Spec",
    specs: [
      { name: "Version", value: "V5.0 SBC/AAC" },
      {
        name: "4 Buttons",
        value: "Vol up, Vol down, Power on/off/, Screen on/off, Mic mute",
      },
    ],
  },
  {
    label: "Wi-Fi spec",
    specs: [
      { name: "Standard", value: "IEEE 802.11a/b/g/n/ac" },
      { name: "Bands", value: "2.4GHz and 5GHz" },
    ],
  },
];

const Description: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Description
        </h3>
        <p className="text-[#606060] text-base font-inter font-normal mb-6">
          The WooHoo® X Series is an award-winning, enterprise-grade AI assistant designed for the luxury hospitality industry. This all-in-one device combines a phone, alarm clock, smart hub, and a premium speaker powered by JBL, offering voice activated technology for business, concierge automation, guest data, and service digital menus for hotels. The X Series offers third-party integration support to enable guest controls, automation, menus, data, and beverage digital menus. For hotels, the X Series offers the complete solution for AI for hotels including personalized branding and voice menus and seamless integration with over 40+ hospitality systems to streamline operations.
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
        {/* Responsive Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg border border-[#f3f3f3]">
            <tbody>
              {specificationRows.map((row, idx) => (
                <React.Fragment key={idx}>
                  {row.specs.map((spec, specIdx) => (
                    <tr
                      key={specIdx}
                      className="border-b border-[#f3f3f3] text-left"
                    >
                      {specIdx === 0 && (
                        <td
                          rowSpan={row.specs.length}
                          className="py-3 px-4 font-normal font-inter text-base text-[#606060] bg-[#F9F9F9] w-[220px] align-middle border border-[#EEF2F6]"
                        >
                          {row.label}
                        </td>
                      )}
                      <td className="py-3 px-4 align-top font-normal font-inter text-base text-[#606060] bg-[#F9F9F9] w-[180px] border border-[#EEF2F6]">
                        {spec.name}
                      </td>
                      <td className="py-3 px-4 align-top bg-[#F9F9F9] font-normal font-inter text-base text-[#606060]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Card View */}
        <div className="sm:hidden flex flex-col gap-4">
          {specificationRows.map((row, idx) => (
            <div
              key={idx}
              className="bg-[#F9F9F9] rounded-lg border border-[#EEF2F6] p-0"
            >
              <div className="px-4 py-3 border-b border-[#EEF2F6] font-inter font-semibold text-[#0F172A] text-base">
                {row.label}
              </div>
              <div className="divide-y divide-[#EEF2F6]">
                {row.specs.map((spec, specIdx) => (
                  <div key={specIdx} className="flex flex-col px-4 py-2">
                    {spec.name && (
                      <div className="text-black font-inter text-sm font-medium mb-1">
                        {spec.name}
                      </div>
                    )}
                    <div className="text-[#606060] font-inter text-sm">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;