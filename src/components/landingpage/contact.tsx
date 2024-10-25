import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
    return (
        <div id="about" className="flex justify-center mb-10">
            <div className="xl:w-[1300px]  w-[1024px] max-w-full px-4">
                <div className=" items-start grid sm:grid-cols-4 sm:grid-rows-1 grid-rows-3 rounded-lg overflow-hidden">
                    <div id="contact" className="lg:col-span-2 sm:col-span-3  sm:row-auto row-span-1 sm:order-1 order-2 bg-emerald-600 h-full lg:p-10 sm:p-5 p-3">
                        <div className="flex flex-col h-full xs:space-y-4 space-y-2">
                            <h3 className="font-raleway text-gray-50 text-2xl">Partner with us</h3>
                            <h2 className="xl:text-[3.5rem] lg:text-[3rem] sm:text-[2.6rem] xs:text-[2.4rem] text-[2rem] leading-[1] font-raleway font-medium text-white">Choose us for reliable, efficient logistics support</h2>

                            <div className="flex-grow"></div>

                            <div className="flex gap-2 xs:flex-row flex-col xs:items-center font-raleway">
                                <div className="w-full rounded-full bg-white">
                                    <input type="text" className="w-full py-3 pl-3 outline-none bg-transparent " placeholder="Enter your email" />
                                </div>
                                <Sheet>
                                    <SheetTrigger className="">
                                        <Button className="xs:w-auto w-full rounded-full py-6 px-6 hover:bg-black/90 bg-black">Contact us</Button>
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
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 sm:col-span-1 sm:row-auto row-span-3 w-full h-full sm:order-2 order-1">
                        <img src="./delivery.jpeg" className="h-full object-cover w-full" alt="delivery" />
                    </div>
                </div>

                {/* about */}
                <div className="sm:grid grid-cols-5 items-start  sm:space-y-0 xs:space-y-3 space-y-2 mt-20">
                    <div className="md:text-2xl text-xl font-light uppercase col-span-2 mt-5">
                        <h3>About</h3>
                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="md:text-[2.4rem] sm:text-[2.1rem] text-[1.8rem] font-raleway font-medium leading-[1.2]">Our commitment to excellence</h2>
                        <p className="leading-[1.5] text-gray-700 text-md font-raleway">
                            Loomis courier intl is a leader in logistics, dedicated to deliver reliable and effiecient services,
                            With advanced technology and a skilled team, we ensure timely and secure transportation. Our services and tailored to your specific needs,
                            making us your trusted partner. Customer satisfactory is our top priority, and we strive to exceed expectations with every shipment.
                        </p>
                    </div>
                </div>

                <div className="relative w-full mt-[6rem]">
                    <Carousel
                        opts={{
                            align: "end",
                        }}
                        className="w-full "
                    >
                        <div className="mb-5">
                            <div className="absolute right-12 -top-10">
                                <CarouselPrevious />
                                <CarouselNext />
                            </div>
                        </div>
                        <CarouselContent className="">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="xl:basis-1/4 sm:basis-1/3 xs:basis-1/2">
                                    <div className="p-1">
                                        <Card className="border-0">
                                            <CardContent className="p-0 border-0 h-[200px]">
                                                <div className="h-full">
                                                    <img src={`/delivery${index + 1}.jpeg`} alt="why us" className="w-full h-full object-cover rounded-md" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    </Carousel>
                </div>
            </div>
        </div>
    )
}
