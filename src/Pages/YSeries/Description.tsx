import React from "react";
import Blueprint from '../../assets/Images/print.webp'

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
    label: "Camera Configuration",
    specs: [
      { name: "Camera", value: "5 MP HD Camera with 110° Wide Angle" },
      {
        name: "",
        value: "330° Rotation for Camera to Cover Full Perimeter",
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
         Empowering Senior Care with the WooHoo® Y-Series <br />In response to the critical shortage of caregivers and the needs of a rapidly aging population, WooHoo® has developed the Y-Series, an AI-powered digital voice assistant featuring conversational AI and a voice recognition system, specifically designed to enhance safety, connectivity, and independence in senior care facilities and private homes. The Y-Series offers a compelling solution that balances patient safety with a personalized user experience.
 <br /> <br /> The WooHoo® Y-Series is an all-in-one device that acts as a lifeline for seniors and a powerful tool for caregivers, directly addressing the staffing shortage in healthcare.

        </p>
        <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Blueprints
        </h4>
        <div className="flex justify-center items-center my-6">
          <img src={Blueprint} alt="Blueprint" />
        </div>
        <h4 className="text-xl font-inter font-bold text-[#0F172A] mb-2">
          Specification
        </h4>
        {/* Desktop Table */}
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
                          className="py-3 px-4 font-normal font-inter text-base text-[#606060] bg-[#F9F9F9] w-[220px]  align-middle border border-[#EEF2F6]"
                        >
                          {row.label}
                        </td>
                      )}
                      <td className="py-3 px-4 align-top font-normal font-inter text-[#606060] bg-[#F9F9F9]  w-[180px] border border-[#EEF2F6]">
                        {spec.name}
                      </td>
                      <td className="py-3 px-4 align-top text-[#606060] bg-[#F9F9F9] font-normal font-inter text-base ">
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
              className="bg-[#ECF0F6] rounded-lg border border-[#EEF2F6] p-0"
            >
              <div className="px-4 py-3 border-b border-[#EEF2F6] font-inter font-bold text-[#606060] bg-[#F9F9F9] text-lg">
                {row.label}
              </div>
              <div className="divide-y divide-[#EEF2F6]">

              
              {row.specs.map((spec, specIdx) => (
                <div
                  key={specIdx}
                  className="flex flex-col px-4 pb-2 border-b border-[#EEF2F6] text-[#606060] bg-[#F9F9F9]"
                >
                  <div className="text-black font-inter text-sm font-medium mb-2 text-[#606060] bg-[#F9F9F9]">
                    {spec.name}
                  </div>
                  <div className="font-inter font-normal text-[#606060] bg-[#F9F9F9] text-sm">
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
