import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <>
            <div className="fixed z-[15] w-full bg-[#fff] flex justify-between items-baseline border-b lg:px-10 px-5  ">
                <a href="/"><img src="./loomis_logo.svg" className="lg:w-60 w-48 translate-y-2" /></a>

                <div className="lg:space-x-10 space-x-4 lg:text-xl text-md md:flex items-center hidden">
                    <a href="/#about" data-scroll-to data-scroll-to-href="#about" className="block leading-[60px] xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">About</a>
                    <a href="/#service"  data-scroll-to data-scroll-to-href="#service"  className="block leading-[60px] xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">Services</a>
                    <a href="/track"  className="block leading-[60px] xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">Track</a>
                    <a href="/#faq"  data-scroll-to data-scroll-to-href="#faq"  className="block leading-[60px] xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">FAQ</a>
                </div>

                <div className="flex items-center gap-3 ">
                    <Sheet>
                        <SheetTrigger>
                            <Button className="uppercase hidden sm:block bg-[#036a51] hover:bg-[#036a51]/90 font-semibold">
                                Contact Us
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Contact Us</SheetTitle>
                                <SheetDescription>
                                    Please fill out the form below to get in touch with us.
                                </SheetDescription>
                            </SheetHeader>
                            <form className="flex flex-col gap-4 mt-5">
                                <Input name="fullname" placeholder="Your FullName" />
                                <Input name="email" placeholder="Your Email" />
                                <Textarea placeholder="Type your message here." name="message" />
                                <Button type="submit" className="bg-[#036a51] hover:bg-[#036a51]/90 font-semibold">
                                    Send Message
                                </Button>
                            </form>
                        </SheetContent>
                    </Sheet>
                    <div className="md:hidden block">
                        <Sheet>
                            <SheetTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetDescription>
                                        <a href="/#about" className="block leading-[60px] text-xl xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">About</a>
                                        <a href="/#service" className="block leading-[60px] text-xl xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">Services</a>
                                        <a href="/track" className="block leading-[60px] text-xl xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">Track</a>
                                        <a href="/#faq"   className="block leading-[60px] text-xl xl:px-6 px-3 border-b-2 border-transparent hover:text-emerald-700 hover:border-emerald-900">FAQ</a>

                                        <Sheet>
                                            <SheetTrigger className="w-full">
                                                <Button className="uppercase bg-[#036a51] w-full mt-6 hover:bg-[#036a51]/90 font-semibold hover:bg">Contact Us</Button>
                                            </SheetTrigger>
                                            <SheetContent>
                                                <SheetHeader>
                                                    <SheetTitle>Contact Us</SheetTitle>
                                                    <SheetDescription>
                                                        Please fill out the form below to get in touch with us.
                                                    </SheetDescription>
                                                </SheetHeader>
                                                <form className="flex flex-col gap-4 mt-5">
                                                    <Input name="fullname" placeholder="Your FullName" />
                                                    <Input name="email" placeholder="Your Email" />
                                                    <Textarea placeholder="Type your message here." name="message" />
                                                    <Button type="submit" className="bg-[#036a51] hover:bg-[#036a51]/90 font-semibold">
                                                        Send Message
                                                    </Button>
                                                </form>
                                            </SheetContent>
                                        </Sheet>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div >
        </>
    )
}