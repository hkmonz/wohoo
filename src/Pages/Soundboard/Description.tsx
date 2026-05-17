import React from "react";

const specificationRows = [
  {
    label: "Speaker Drivers",
    specs: [
      { name: "Audio Channel", value: "2 Channel Stereo" },
      { name: "Drivers", value: "2x2.75 Full Range (66mm), 60Hz - 20 KHz" },
      { name: "Bass Reflection", value: "Port Tube" },
      {
        name: "Sound Effect",
        value: "RAYLEIGH LABS Stereo Widening",
      },
      {
        name: "Audio Sense",
        value: "Audio Switch Sound Setting H/V",
      },
    ],
  },
  {
    label: "EE Performance",
    specs: [
      {
        name: "Output Power",
        value: "2x15W(RMS)",
      },
      { name: "THD", value: "<1%" },
      {
        name: "S/N",
        value: ">70db",
      },
      { name: "Max SPL", value: "90db" },
    ],
  },
  {
    label: "Audio Source",
    specs: [
      { name: "HDMI", value: "ARC" },
      { name: "USB", value: "WAV, WMA, MP3" },
      { name: "Optical", value: "1" },
      {
        name: "Bluetooth",
        value: "V4.2 A2DP1.3 AVRCP 1.5, Volume Sync AAC Decode",
      },
      { name: "AUX", value: "3.5mm" },
    ],
  },
  {
    label: "Audio Decoder",
    specs: [
      {
        name: "NA",
        value: "NA",
      },
    ],
  },
  {
    label: "Buttons",
    specs: [
      {
        name: "5 Buttons",
        value: "Power, Volume +/-, Source, Virtual Surround, On/Off",
      },
    ],
  },
  {
    label: "Display",
    specs: [{ name: "5 LEDS", value: "1 RGB, 4 white" }],
  },
  {
    label: "Material",
    specs: [{ name: "NA", value: "ABS Box, Fabric Grille" }],
  },
  {
    label: "Dimensions",
    specs: [{ name: "WxHxD", value: "450x73x122mm" }],
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
          SparkleHaze SoundBoard : Sound That Thrills. Audio That Heals. <br />{" "}
          Experience your favorite movies and music with breathtaking,
          room-filling sound. But the SparkleHaze Sound Board is designed for
          more. When the action is over, it becomes your personal tool for
          tranquility. Its advanced audio technology is perfectly tuned to
          create a calming atmosphere, helping you de-stress and unwind. From
          powerful entertainment to peaceful mindfulness, this is the one audio
          solution that serves both your excitement and your serenity. One
          soundbar. A world of experiences.
        </p>
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
                      className="border-b border-[#f3f3f3] text-left "
                    >
                      {specIdx === 0 && (
                        <td
                          rowSpan={row.specs.length}
                          className="py-3 px-4 font-normal  font-inter text-base text-[#606060] bg-[#ECF0F6] w-[220px]  align-middle border border-[#EEF2F6]"
                        >
                          {row.label}
                        </td>
                      )}
                      <td className="py-3 px-4 align-top  font-normal font-inter text-base text-[#606060] bg-[#ECF0F6] w-[180px] border border-[#EEF2F6]">
                        {spec.name}
                      </td>

                      <td className="py-3 px-4 align-top bg-[#ECF0F6] font-normal font-inter text-base text-[#606060]">
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