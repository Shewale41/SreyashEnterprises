import { FiPhoneCall } from "react-icons/fi";
import srLogo from '../assets/srLogo.jpg';

function Nav() {
    const phoneNumber = import.meta.env.VITE_PHONE_NO;

    return (
        <div className="w-full h-[70px] md:h-[90px] bg-amber-100 px-4 md:px-8 flex items-center justify-between">
            
            {/* Left: Logo Image */}
            <div className="flex-1 flex items-center">
                <img
                    src={srLogo}
                    alt="SE Logo"
                    className="h-10 md:h-14 w-10 md:w-14 rounded-full object-cover border border-gray-300"
                />
            </div>

            {/* Center: Links */}
            <div className="flex-[2] flex justify-center gap-6 md:gap-12 text-sm md:text-base">
                <a href="#home" className="hover:text-gray-700">Home</a>
                <a href="#services" className="hover:text-gray-700">Services</a>
                <a href="#about" className="hover:text-gray-700">About</a>
            </div>

            {/* Right: Call Button */}
            <div className="flex-1 flex justify-end">
                <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded text-sm md:text-base"
                    style={{ backgroundColor: "hsl(37, 45%, 55%)", color: "white" }}
                >
                    <FiPhoneCall className="mr-2" />
                    Call
                </a>
            </div>
        </div>
    );
}

export default Nav;
