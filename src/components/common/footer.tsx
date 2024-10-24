export default function Footer() {
    return (
        <>
            <div className="min-h-[350px] bg-black flex flex-col items-center pb-5 lg:px-10 sm:px-5 px-3">
                <div className="xl:w-[1300px]  w-[1024px] max-w-full ">
                    <div className="lg:grid grid-cols-6 gap-5 w-full items-center text-white md:pt-10 pt-5 space-y-5 pb-5">
                        <div className="col-span-2 xl:text-[2.2rem] md:text-[2rem] sm:text-[1.7rem] text-[1.4rem] uppercase">
                            <h2>Your trusted</h2>
                            <h2>partner in logistics</h2>
                        </div>
 
                        <div className="col-span-4 flex flex-wrap lg:justify-around justify-between gap-4">
                            <div className="">
                                <h3 className="uppercase md:text-lg text-sm font-semibold text-gray-300">Quick Links</h3>
                                <ul className="md:text-sm text-xs space-y-2 sm:mt-4 mt-2">
                                    <li><a href="/#about" data-scroll-to data-scroll-to-href="#about">About Us</a></li>
                                    <li><a href="/#service" data-scroll-to data-scroll-to-href="#service">Services</a></li>
                                    <li><a href="/#faq" data-scroll-to data-scroll-to-href="#faq">Help & FAQ</a></li>
                                </ul>
                            </div>

                            <div className="">
                                <h3 className="uppercase md:text-lg text-sm font-semibold text-gray-300">LEGAL</h3>
                                <ul className="md:text-sm text-xs space-y-2 sm:mt-4 mt-2">
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="">
                                <h3 className="uppercase md:text-lg text-sm font-semibold text-gray-300">Contact Us</h3>
                                <ul className="md:text-sm text-xs space-y-2 sm:mt-4 mt-2">
                                    <li>+1(348)-898-091</li>
                                    <li><a href="mailto:info@loomiscourierintl.com">info@loomiscourierintl.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow"></div>

                    <div className="text-white w-full border-t border-gray-50/20 sm:text-base text-sm pt-3 text-center">
                        Copyright © {(new Date()).getFullYear()} Loomiscourierintl
                    </div>
            </div>
        </>
    )
}