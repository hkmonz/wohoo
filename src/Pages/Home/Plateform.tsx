import { useState } from "react";
import Button from "../../Components/Commons/Button";
import BookDemo from "../../Components/Commons/BookDemo";

const systems = [
    {
        number: 1,
        name: "Lutron",
        description: "adjusts the room thermostat.",
    },
    {
        number: 2,
        name: "Simphony POS",
        description: "fires the in-room dining order.",
    },
    {
        number: 3,
        name: "HotSOS",
        description: "dispatches housekeeping for delivery.",
    },
    {
        number: 4,
        name: "Opera PMS",
        description: "bills the folio automatically.",
    },
];

export default function Plateform() {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16 sm:py-10 lg:py-20 text-center">
                <span className="inline-block text-xs sm:text-sm font-normal tracking-[0.2em] text-[#7D58EE] uppercase mb-6">
                    A Real Moment
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium leading-tight lg:leading-[1.2] mb-10 sm:mb-12">
                    One sentence.{" "}
                    <span className="text-[#7D58EE]">Four systems.</span>
                    <br />
                    Zero staff time.
                </h2>

                <div className="rounded-2xl bg-zinc-900/80 border border-white/5 px-6 sm:px-10 pt-8 sm:pt-10 text-left shadow-xl">
                    <blockquote className="border-l-4 border-[#7D58EE] pl-5 sm:pl-6 mb-8 sm:mb-10">
                        <p className="text-lg sm:text-xl lg:text-2xl text-white italic font-serif leading-snug">
                            &ldquo;Room too cold, and could you send up a sandwich?&rdquo;
                        </p>
                    </blockquote>

                    <ul className="space-y-5 sm:space-y-6">
                        {systems.map((item) => (
                            <li key={item.number} className="flex items-start gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7D58EE] text-sm font-medium text-white">
                                    {item.number}
                                </span>
                                <p className="text-base sm:text-lg leading-relaxed pt-0.5">
                                    <span className="font-semibold text-white">{item.name}</span>{" "}
                                    <span className="text-gray-400">{item.description}</span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex   lg:flex-row flex-col justify-center text-center gap-3 lg:justify-between items-center  py-10  border-t border-white/10 ">
                        <div>

                            <Button
                                size="lg"
                                onClick={() => setOpen(true)}
                                className="!rounded-full !px-10 !py-4"
                            >
                                Book a demo
                            </Button>
                        </div>
                        <div>

                            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] text-[#7D58EE] uppercase">
                                No phone call. No front desk. No friction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <BookDemo open={open} onClose={() => setOpen(false)} />
        </section>
    );
}
