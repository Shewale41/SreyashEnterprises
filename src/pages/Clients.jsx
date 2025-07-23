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

export default function Clients() {
    const clients = [
        { src: amri, alt: 'amri' },
        { src: glenmark, alt: 'glenmark' },
        { src: harman, alt: 'harman' },
        { src: idmc, alt: 'idmc' },
        { src: interconveyers, alt: 'interconveyers' },
        { src: kaygaon, alt: 'kaygaon' },
        { src: sabmiller, alt: 'sabmiller' },
        { src: tbea, alt: 'tbea' },
        { src: tetrapak, alt: 'tetrapak' },
        { src: wockhardt, alt: 'wockhardt' },
    ];

    return (
        <section id="clients" className="py-10 bg-gray-50">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-amber-600">Our Clients</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
                {clients.map((client) => (
                    <img
                        key={client.alt}
                        src={client.src}
                        alt={client.alt}
                        className="object-contain h-16 sm:h-20 w-auto max-w-[100px] rounded bg-white shadow-md p-1 sm:p-2"
                    />
                ))}
            </div>
        </section>
    );
}
