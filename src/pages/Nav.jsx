import { FiPhoneCall } from "react-icons/fi";

function Nav() {
    return (
        <div className="flex items-center w-full h-[90px] bg-amber-100 px-8">
            <div className="flex-1">
                <p>SE</p>
            </div>
            <div className="flex flex-1 justify-center gap-25">
                <a href="#home" className="hover:text-gray-700">Home</a>
                <a href="#services" className="hover:text-gray-700">Services</a>
                <a href="#about" className="hover:text-gray-700">About</a>
            </div>
            <div className="flex-1 flex justify-end">
                <a
                    href="tel:+1234567890"
                    className="flex items-center bg-blue-300 px-4 py-2 rounded"
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