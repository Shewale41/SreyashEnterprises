

function Nav() {
    return (
        <div className="flex items-center w-full h-[90px] bg-amber-100 px-8">
            <div className="flex-1">
                <p>SE</p>
            </div>
            <div className="flex flex-1 justify-center gap-25">
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Services</h2>
            </div>
            <div className="flex-1 flex justify-end">
                <button className='bg-blue-300 px-4 py-2 rounded'
                style={{ backgroundColor: "hsl(37, 45%, 55%)", color: "white" }}
                >Contact Us</button>
            </div>
        </div>
    );
}

export default Nav;