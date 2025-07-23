import serviceL from './../assets/servicesList.js';

function Services() {
    return (
        <>
            {/* Section Title */}
            <div className='text-xl sm:text-2xl md:text-3xl flex justify-center p-4 sm:p-6 md:p-8 text-center'>
                Our Services
            </div>

            {/* Grid Layout */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-4'>
                {serviceL.map((ele, idx) => (
                    <div
                        key={idx}
                        className='rounded-md flex flex-col bg-white shadow-md p-3'
                    >
                        <div className="w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] mb-3 flex items-center justify-center">
                            <img
                                src={ele.image}
                                alt={ele.name}
                                className="object-cover h-full w-full rounded"
                            />
                        </div>
                        <div className="font-semibold text-sm sm:text-base mb-1">
                            {ele.name}
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                            {ele.info}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Services;
