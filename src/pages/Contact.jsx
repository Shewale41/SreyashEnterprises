import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function Contact({ isVisible, onClose }) {
    if (!isVisible) return null;

    const email = import.meta.env.VITE_GMAIL;
    const phone = import.meta.env.VITE_PHONE_NO;
    const whatsappLink = phone ? `https://wa.me/${phone.replace(/[^\d]/g, '')}` : 'https://wa.me/';

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Get in Touch</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <MdClose size={24} />
                    </button>
                </div>
                <div className="mb-2">
                    <a href={`mailto:${email}`} className="flex items-center text-blue-600 hover:text-blue-800">
                        <FaEnvelope className="mr-2" />
                        Email
                    </a>
                </div>
                <div className="mb-2">
                    <a href={whatsappLink} className="flex items-center text-green-600 hover:text-green-800" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                    </a>
                </div>
                <div>
                    <a href={`tel:${phone}`} className="flex items-center text-red-600 hover:text-red-800">
                        <FaPhone className="mr-2" />
                        Direct Call
                    </a>
                </div>
            </div>
        </div>
    );
}
