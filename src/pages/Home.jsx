import newIndustryImg from '../assets/newIndustry.png';
import { FaPhoneAlt } from 'react-icons/fa';
import amri from '../assets/clients/amri.jpeg';
import glenmark from '../assets/clients/glenmark.jpeg';
import harman from '../assets/clients/harman.webp';
import idmc from '../assets/clients/idmc.jpeg';
import interconveyers from '../assets/clients/interconveyers.webp';
import kaygaon from '../assets/clients/kaygaon.webp';
import sabmiller from '../assets/clients/sabmiller.webp';
import tbea from '../assets/clients/tbea.webp';
import tetrapak from '../assets/clients/tetrapak.webp';
import wockhardt from '../assets/clients/wockhardt.webp';
import HeroCanvas from '../components/HeroCanvas';


function Home({ onContactClick }) {
    return (
        <>
        <div>
            {/* <HeroCanvas /> */}
        </div>
        <section
            id="home"
            className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        >
            {/* Background Image */}
            <img
                src={newIndustryImg}
                alt="Industrial Plant"
                className="absolute inset-0 w-full h-full object-cover z-0"
                draggable={false}
            />

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* Text Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 space-y-4 max-w-3xl mx-auto">
                <h1 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl tracking-wide">
                    Sreyash Enterprises
                </h1>
                <h2 className="font-body text-gray-100 text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md">
                    Best Industrial Solutions with Precision and Trust
                </h2>

                <button
                    onClick={onContactClick}
                    className="flex items-center gap-2 mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                    <FaPhoneAlt className="text-white text-lg" />
                    <span className="font-body text-base md:text-lg">Contact Us</span>
                </button>
            </div>
        </section>
        </>
    );
}

export default Home;
