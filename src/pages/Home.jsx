import Nav from './Nav.jsx';

function Home() {
    return (
        <>
            <div className="w-full h-[400px] bg-[url('/assets/industry22.jpg')] bg-cover bg-center">
                <div className="flex flex-col items-start justify-center w-full h-full">
                    <p className="text-5xl">Sreyash Enterprises</p>
                    <h2 className="text-3xl">Best Industrail Services</h2>
                    <button
                        className="rounded-md text-xl mt-4 px-4 py-2"
                        style={{ backgroundColor: "hsl(37, 45%, 55%)", color: "white" }}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;