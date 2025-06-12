import serviceL from './../assets/servicesList.js';

function Services() {
    return (
        <>

        <div className='text-3xl flex justify-center  p-8 '> Our Services </div>
        <div className='w-full flex flex-wrap gap-8 pt-2 p-5'>
            {serviceL.map((ele, idx) => (
                <div key={idx} className='w-[300px] h-[400px] rounded-md flex flex-col bg-white shadow-lg p-4'>
                    <div className="w-full h-[180px] mb-4 flex items-center justify-center">
                        <img src={ele.image} alt={ele.name} className="object-cover h-full w-full rounded" />
                    </div>
                    <div className="font-bold text-lg mb-2">{ele.name}</div>
                    <div className="text-gray-600 text-sm">{ele.info}</div>
                </div>
            ))}
        </div>

        </>
    );
}

export default Services;