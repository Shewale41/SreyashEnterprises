
import { GrUserWorker } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import { PiTimerDuotone } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";

function About(){

    return(
        <>
        <div>
            <div className="flex justify-center items-center text-3xl text-amber-500">About Us</div>
            <div className="text-2xl pl-8 pr-8 p-5 ">
                Sreyash Enterprises is a leading provider of industrial and commercial services, committed to quality and customer satisfaction. Founded and led by Mr. Rohit Gude, our company has built a reputation for reliability and excellence across a wide range of projects. We specialize in hot and cold insulation, ducting, fall ceiling, painting, and partition solutions, serving clients from diverse industries. Our experienced team uses the latest techniques and premium materials to deliver results that stand the test of time. At Sreyash Enterprises, we believe in transparent communication, timely project completion, and long-term client relationships. Under the guidance of Mr. Rohit Gude, we continuously strive to exceed expectations and set new standards in our field. Your trust is our greatest asset, and we work hard every day to earn it. Choose Sreyash Enterprises for dependable service and outstanding results.
            </div>
            <div>
                <div className="flex justify-center items-center text-4xl text-amber-400">Why Us</div>
                <div className="flex  items-center  gap-60 pl-20 pr-8  ">
                    <div className="w-[100px] h-[200px] text-amber-400  rounded-md border-amber-50 ">
                        <GrUserWorker className="w-full h-[150px] text-amber-200" />
                        <div className="flex justify-center items-center text-xl pl-4 ">Expert Team</div>
                    </div>

                    <div className="w-[100px] h-[200px] text-amber-400 text-xl rounded-md border-amber-50-2 ">
                        <GrStatusGood className="w-full h-[150px] text-amber-200" />
                        <div className="flex justify-center items-center text-xl pl-4 ">Quality Material</div>
                    </div>

                    <div className="w-[100px] h-[200px] text-amber-400 text-xl rounded-md border-amber-50-2 ">
                        <PiTimerDuotone className="w-full h-[150px] text-amber-200" />
                        <div className="flex justify-center items-center text-xl pl-4 ">On-Time Delivery</div>
                    </div>

                    <div className=" container w-[100px] h-[200px] text-amber-400 text-xl rounded-md border-amber-50-2 ">
                        <FaHelmetSafety className="w-full h-[150px] text-amber-200" />
                        <div className="flex justify-center items-center text-xl pl-4 ">Safety First</div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default About;