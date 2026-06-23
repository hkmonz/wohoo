import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../../assets/Icons/logo.svg";
import WhiteLogo from "../../assets/Icons/whitelogo.svg";
import BookDemo from "../Commons/BookDemo";
import { FaCaretDown } from "react-icons/fa";
import Button from "../Commons/Button";

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selected, setSelected] = useState("Hospitality");

    const navigate = useNavigate();
    const location = useLocation();

    const isSimpleNav = location.pathname === "/" || location.pathname === "/careers";
    const shouldShowWhiteLogo = location.pathname.includes("/healthcare") || location.pathname.includes("/workplace");

    const currentLogo = shouldShowWhiteLogo && !isScrolled ? WhiteLogo : Logo;

    const handleSelect = (label: string, path: string) => {
        setSelected(label);
        setOpenDropdown(false);
        navigate(path);
    };

    const tabs = [
        { name: "Hospitality", path: "/hospitality" },
        { name: "Healthcare", path: "/healthcare" },
        { name: "Workplace", path: "/workplace" },
    ];

    const tabRoutes: Record<string, string[]> = {
        "Hospitality": ["/hospitality", "/x-series", "/tablet", "/qrcode", "/products"],
        "Healthcare": ["/healthcare", "/y-series", "/wellness-dashboard", "/soundboard"],
        "Workplace": ["/workplace", "/z-series", "/meeting-room-tablet", "/avatar"],
    };

    const getActiveTabFromPath = (pathname: string) => {
        const match = tabs.find((tab) =>
            tabRoutes[tab.name]?.includes(pathname)
        );
        return match?.name ?? "";
    };

    useEffect(() => {
        const active = getActiveTabFromPath(location.pathname);
        setActiveTab(active);
        if (active) setSelected(active);
        setMenuOpen(false);
    }, [location.pathname]);

    const menuLinks = [
        { name: "Home", to: "/" },
        { name: "Products", to: "/products" },
        { name: "Careers", to: "/careers" },
    ];

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    const handleDemo = () => {
        setOpen(true);
        setMenuOpen(false);
    };

    const handleProductsClick = () => {
        navigate("/products");
    };

    return (
        <>
            {isSimpleNav && (
                <section className="relative min-h-20 ">
                    <header
                        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                            ? "bg-white/80 backdrop-blur-md shadow-lg"
                            : "bg-transparent"
                            }`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-16 md:h-20">
                                <div className="flex-shrink-0">
                                    <Link to="/">
                                        <img src={Logo} alt="Logo" className="" />
                                    </Link>
                                </div>
                                {/* Desktop Navigation */}
                                <nav className="hidden md:flex items-center gap-8">
                                    {menuLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.to}
                                            className="font-inter font-normal text-[19.2px] transition text-black"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Button
                                        size="lg"
                                        onClick={() => setOpen(true)}
                                        className="
        bg-gradient-to-r from-[#7D58EE] to-[#2B117E]  !text-[19.2px]
        duration-500 hover:scale-105 !text-white !font-normal 
        !px-6 !py-3 !rounded-[16px] shadow transition
    "
                                    >
                                        Contact Us
                                    </Button>
                                </nav>
                                <div className="md:hidden flex items-center">
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="focus:outline-none"
                                        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                                    >
                                        {menuOpen ? (
                                            <svg
                                                className="h-9 w-9 text-black"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="h-9 w-9 text-black"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {menuOpen && (
                                <div className="md:hidden fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 overflow-y-auto">
                                    <div className="flex flex-col items-start justify-start w-full gap-4 pt-6 pl-4 pb-8">
                                        {menuLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.to}
                                                className="font-inter font-normal text-lg text-black w-full text-left pl-2"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                        <div className="w-full flex justify-start pl-2">
                                            <Button
                                                size="lg"
                                                className="
    bg-gradient-to-r from-[#7D58EE] to-[#2B117E] !text-[19.2px]
    duration-500 hover:scale-105 !text-white !font-normal 
    !px-6 !py-3 !rounded-[16px] shadow transition
  "
                                            >
                                                Contact Us
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </header>
                    <BookDemo open={open} onClose={() => setOpen(false)} />
                </section>)}

            {!isSimpleNav && (<header className={`fixed productNavbar top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex  justify-between items-center  h-16 md:h-20">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                {/* Logo changes based on scroll state and route */}
                                <img
                                    src={currentLogo}
                                    alt="Logo"
                                    className="md:w-50 lg:w-auto transition-all duration-300"
                                />
                            </Link>
                        </div>
                        <nav className="hidden md:flex flex-1 items-center justify-center">
                            <div className="flex space-x-1 rounded-full bg-black p-1 flex-shrink-0">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        onClick={() => { setActiveTab(tab.name); navigate(tab.path); }}
                                        className={`px-4 py-2 !text-base lg:!text-lg !font-normal rounded-full 
    font-clash-display transition-all duration-200 whitespace-nowrap
    ${activeTab === tab.name
                                                ? "bg-white text-[#181A1B] shadow-sm"
                                                : "!text-white hover:bg-white/20"
                                            }`}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </nav>
                        <div className="flex items-center space-x-6">
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setMenuOpen((prev) => !prev)}
                                    className="inline-flex items-center justify-center p-2 rounded-md  hover:bg-white/10 focus:outline-none "
                                    aria-label="Open menu"
                                    type="button"
                                >
                                    {menuOpen ? (
                                        <svg
                                            className="h-9 w-9"
                                            fill="none"
                                            stroke="black"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-9 w-9"
                                            fill="none"
                                            stroke="black"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                                {menuOpen && (
                                    <>
                                        <div className="absolute hidden md:block  right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#e6f4ef] py-3 z-50 animate-fadeIn">
                                            <ul className="flex flex-col gap-1">
                                                {menuLinks.map((link) => (
                                                    <li key={link.name}>
                                                        {link.name === "Products" ? (
                                                            <button
                                                                type="button"
                                                                onClick={handleProductsClick}
                                                                className="block w-full text-left px-5 py-2 font-inter text-base font-normal rounded-lg hover:bg-[#e6f4ef] text-black transition"
                                                            >
                                                                {link.name}
                                                            </button>
                                                        ) : (
                                                            <Link
                                                                to={link.to}
                                                                className="block px-5 py-2 font-inter text-base font-normal rounded-lg hover:bg-[#e6f4ef] text-black transition"
                                                                onClick={() => setMenuOpen(false)}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                                <li className="flex w-auto justify-center px-4">
                                                    <button
                                                        className="
        bg-gradient-to-r from-[#7D58EE] to-[#2B117E]  !text-[19.2px]
        duration-500 hover:scale-105 !text-white !font-normal 
        !px-6 !py-3 !rounded-[16px] shadow transition
    "
                                                        onClick={handleDemo}
                                                    >
                                                        Contact Us
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                                {menuOpen && (
                                    <div
                                            className="fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-white 
                    shadow-lg border-t border-[#e6f4ef] z-50 md:hidden animate-fadeIn"
                                        >
                                            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-start">
                                                <ul className="flex flex-col items-start w-full !mb-0">
                                                    {menuLinks.map((link) => (
                                                        <li key={link.name} className="w-full">
                                                            {link.name === "Products" ? (
                                                                <button
                                                                    type="button"
                                                                    onClick={handleProductsClick}
                                                                    className="block w-full text-left px-5 py-3 font-inter text-lg font-normal rounded-lg hover:bg-[#e6f4ef] !text-[#17423b] transition pl-2"
                                                                >
                                                                    {link.name}
                                                                </button>
                                                            ) : (
                                                                <Link
                                                                    to={link.to}
                                                                    className="block w-full text-left px-5 py-3 font-inter text-lg font-normal rounded-lg hover:bg-[#e6f4ef] !text-[#17423b] transition pl-2"
                                                                    onClick={() => setMenuOpen(false)}
                                                                >
                                                                    {link.name}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="flex flex-col items-start w-full ">
                                                    {tabs.map((link) => (
                                                        <li key={link.name} className="w-full">
                                                            <Link
                                                                to={link.path}
                                                                className="block w-full text-left px-5 py-3 
                                font-inter text-lg font-normal rounded-lg 
                                hover:bg-[#e6f4ef] text-[#17423b] transition pl-2"
                                                                onClick={() => setMenuOpen(false)}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="w-full flex justify-start pl-2 pt-2">
                                                    <button
                                                        className="
            bg-gradient-to-r from-[#7D58EE] to-[#2B117E]  !text-[19.2px]
            duration-500 hover:scale-105 !text-white !font-normal 
            !px-6 !py-3 !rounded-[16px] shadow transition
        "
                                                        onClick={handleDemo}
                                                    >
                                                        Book a Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>)}
            <BookDemo open={open} onClose={() => setOpen(false)} />

            {!isSimpleNav && (<header className={`fixed onlyMobile top-17 left-0 right-0 z-10 transition-all duration-300
                ${isScrolled ? "" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="
            flex items-center justify-between
            w-64 h-14 px-6 rounded-full
            bg-black/80 backdrop-blur-md
            text-white text-xl font-inter font-medium
            border border-white/10
            shadow-xl
            transition-all duration-300
            hover:shadow-2xl hover:bg-black/90
            focus:outline-none focus:ring-none focus:ring-white/40
            "
                        >
                            <span className="block px-5 py-3 text-white text-lg font-inter font-medium
                hover:bg-white/10 transition-colors duration-200">{selected}</span>
                            <FaCaretDown
                                className={`transition-transform duration-300 text-white ${openDropdown ? "rotate-180" : ""}`}
                            />
                        </button>

                        <div
                            className={`
            absolute top-full mt-2 w-64 rounded-xl
            bg-black/80 backdrop-blur-md
            border border-white/10
            shadow-2xl
            overflow-hidden
            transition-all duration-300
            ${openDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}
                        >
                            {tabs.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSelect(item.name, item.path)
                                    }}
                                    className="
                block px-5 py-3
                text-white text-lg font-inter font-medium
                hover:bg-white/10
                transition-colors duration-200
                "
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>)}
        </>
    );
};

export default Header;