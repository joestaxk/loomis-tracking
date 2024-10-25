
export default function Hero() {
    function redirectTo(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        if (form.track_id.value.length > 6) {
            location.href = form.getAttribute("action") + `?ref_no=${form.track_id.value}`
        }
    }
    return (
        <div>
            <div className="relative sm:h-[800px] h-[500px] w-full">
                <img src="./hero-imgw.jpeg" className="w-full h-full object-cover lg:object-left-bottom sm:object-right-bottom object-center" alt="hero-image" />

                <div className="absolute inset-0 flex flex-col items-center h-full justify-center px-3">
                    <div className="text-white text-center lg:text-[5.5rem] sm:text-[4.5rem] xs:text-[3rem] tiny:text-[2.4rem] text-[2rem]">
                        <h1 className="font-medium leading-[1] animate__animated  animate__slideInUp">
                            Advancing
                            <span className="italic font-normal font-raleway"> Smart</span>
                        </h1>
                        <h1 className="animate__animated animate__slideInUp">Logistics Solutions</h1>
                    </div>

                    <form action="/track" onSubmit={redirectTo} method="get">
                        <div className="bg-white flex rounded-full gap-2 items-center sm:py-2 py-1 px-2 mt-4 xs:w-auto w-full justify-between z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:size-6 size-5 sm:min-w-6 min-w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" name="track_id" className="outline-none font-semibold uppercase sm:text-base xs:text-sm text-xs w-full" placeholder="Enter Tracking ID" />
                            <button className="outline-none bg-emerald-700 hover:bg-emerald-700/90 sm:p-3 p-2 sm:text-base xs:text-sm text-xs whitespace-nowrap rounded-full text-white uppercase font-semibold font-raleway">Track Now</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
