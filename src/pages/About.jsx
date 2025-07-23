import { GrUserWorker, GrStatusGood } from "react-icons/gr";
import { PiTimerDuotone } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";

function About() {
    return (
        <>
            <div className="px-4 sm:px-8 py-6">
                {/* Heading */}
                <div className="flex justify-center items-center text-2xl sm:text-3xl text-amber-500 mb-4">
                    About Us
                </div>

                {/* Paragraph */}
                <div className="text-sm sm:text-base text-justify leading-relaxed">
                    Sreyash Enterprises is a leading provider of industrial and commercial services, committed to quality and customer satisfaction. Founded and led by Mr. Rohit Gude, our company has built a reputation for reliability and excellence across a wide range of projects. We specialize in hot and cold insulation, ducting, fall ceiling, painting, and partition solutions, serving clients from diverse industries. Our experienced team uses the latest techniques and premium materials to deliver results that stand the test of time. At Sreyash Enterprises, we believe in transparent communication, timely project completion, and long-term client relationships. Under the guidance of Mr. Rohit Gude, we continuously strive to exceed expectations and set new standards in our field. Your trust is our greatest asset, and we work hard every day to earn it. Choose Sreyash Enterprises for dependable service and outstanding results.
                </div>

                {/* Why Us Section */}
                <div className="mt-10">
                    <div className="flex justify-center items-center text-2xl sm:text-4xl text-amber-400 mb-6">
                        Why Us
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-10">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center text-amber-400">
                            <GrUserWorker className="w-16 h-16 sm:w-20 sm:h-20 text-amber-300 mb-2" />
                            <div className="text-xs sm:text-sm font-medium">Expert Team</div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center text-amber-400">
                            <GrStatusGood className="w-16 h-16 sm:w-20 sm:h-20 text-amber-300 mb-2" />
                            <div className="text-xs sm:text-sm font-medium">Quality Material</div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center text-amber-400">
                            <PiTimerDuotone className="w-16 h-16 sm:w-20 sm:h-20 text-amber-300 mb-2" />
                            <div className="text-xs sm:text-sm font-medium">On-Time Delivery</div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center text-amber-400">
                            <FaHelmetSafety className="w-16 h-16 sm:w-20 sm:h-20 text-amber-300 mb-2" />
                            <div className="text-xs sm:text-sm font-medium">Safety First</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
