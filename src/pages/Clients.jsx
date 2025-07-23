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
    return (
        <section id="clients" className="py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center max-w-5xl mx-auto">
                {[{src: amri, alt: 'amri'}, {src: glenmark, alt: 'glenmark'}, {src: harman, alt: 'harman'}, {src: idmc, alt: 'idmc'}, {src: interconveyers, alt: 'interconveyers'}, {src: kaygaon, alt: 'kaygaon'}, {src: sabmiller, alt: 'sabmiller'}, {src: tbea, alt: 'tbea'}, {src: tetrapak, alt: 'tetrapak'}, {src: wockhardt, alt: 'wockhardt'}].map(client => (
                    <img
                        key={client.alt}
                        src={client.src}
                        alt={client.alt}
                        className="object-contain h-28 w-44 rounded shadow-sm bg-white p-2"
                    />
                ))}
            </div>
        </section>
    );
} 