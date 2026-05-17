import React, { useState } from "react";
import BookDemo from "../../Components/Commons/BookDemo";

const Contact: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto bg-[#06413F] rounded-xl flex flex-col items-center justify-center text-center py-10 px-6 shadow">
                <h2 className="text-white font-inter font-semibold text-lg md:text-[35px] mb-4">
                    Contact us to learn how Verdant <br />
                    AI and our specialized agents can transform your city.
                </h2>
                <button onClick={() => setOpen(true)} className="bg-white font-inter !text-[#0F172A] px-6 py-3 hover:scale-105 rounded-full font-medium text-lg shadow  transition">
                    Request a Demo
                </button>
            </div>
            <BookDemo open={open} onClose={() => setOpen(false)} />

        </section>
    );
};

export default Contact;