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
    CardDescription,
} from "@/components/ui/card"

export default function WhyUsSection() {
    const content = [
        {
            heading: "Freight Shipping",
            paragraph: "We offer comprehensive FTL and LTL freight shipping solutions to meet all of your needs."
        },
        {
            heading: "Express Freight Services",
            paragraph: "We offer fast and reliable service for urgent freight shipments, whether it's same-day."
        },
        {
            heading: "Specialized Logistics",
            paragraph: "We provide specialized transportation for perishable, temperature-sensitive materials."
        },
        {
            heading: "Customs Brokerage",
            paragraph: "Our experienced team handles customs clearance and documentation to ensure smooth international shipping."
        },
        {
            heading: "Warehousing Solutions",
            paragraph: "We provide secure and efficient warehousing services, tailored to your inventory management needs."
        }
    ];

    const other_brand = [
        "alea.png",
        "creati.png",
        "land.png",
        "logis.png",
        "saltos.png",
        "truck.png"
    ]
    return (
        <div className="translate-y-[-4rem] md:pt-[4.5rem] pt-[2rem] min-h-[500px] bg-white rounded-tl-[2rem] rounded-tr-[2rem] flex flex-col items-center">
            <div id="service" className="xl:w-[1300px]  w-[1024px] max-w-full sm:px-4 px-3 items-start">
                <div className="sm:grid grid-cols-5 items-start  sm:space-y-0 space-y-3">
                    <div className="md:text-2xl sm:text-xl text-lg font-light uppercase col-span-2 mt-2">
                        <h3>where reliability</h3>
                        <h3>meet innovation</h3>
                    </div>
                    <div data-scroll data-scroll-speed="0.06" className="col-span-3 2xl:text-[4rem] xl:text-[3.7rem] lg:text-[3.5rem] md:text-[3rem] sm:text-[2.1rem] xs:text-[2rem] text-[1.8rem] font-medium font-raleway">
                        <h1 className="leading-[1.2] ">
                            More than logistics - we provide reliable, efficient deliveries
                            with <span className='text-emerald-700 italic'>advanced</span> technology Solutions
                        </h1>
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
                                                    <img src={`/whyus${index + 1}.jpg`} alt="why us" className="w-full h-full object-cover rounded-md" />
                                                </div>
                                            </CardContent>
                                            <CardDescription className="py-2 px-2 space-y-2">
                                                <h1 className="text-lg text-black">{content[index].heading}</h1>
                                                <p className="font-raleway text-sm">{content[index].paragraph}</p>
                                            </CardDescription>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    </Carousel>
                </div>

                <div className="mt-16">
                    <div className="h-[450px] w-full rounded-lg">
                        <img src="./truck.jpg" className="h-full object-cover object-center w-full rounded-lg" alt="" />
                    </div>
                    <div className="lg:flex justify-around items-center py-3 hidden">
                        {
                            other_brand.map((el) => (
                                <img src={`./other-brand/${el}`} className="object-contain grayscale w-[120px]" alt={el.replace(".png", "")} />
                            ))
                        }
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full lg:hidden block"
                    >
                        <CarouselContent className="flex items-center pt-2">
                            {other_brand.map((_, index) => (
                                <CarouselItem key={index} className="basis-1/5">
                                    <img src={`./other-brand/${_}`} className="object-contain grayscale w-[120px]" alt={_.replace(".png", "")} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    </Carousel>
                </div>

                {/*  */}
                <div className="divide-y mt-10 lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                    <div data-scroll data-scroll-speed="0.02" className="md:py-10 py-5 flex items-center lg:gap-[15rem] md:gap-[10rem] sm:gap-[5rem] gap-[2rem] hover:bg-black hover:italic hover:text-white rounded-lg pl-5">
                        <h2 className="">01</h2>

                        <h2 className="">Reliable freight transport</h2>
                    </div>

                    <div data-scroll data-scroll-speed="0.04" className="md:py-10 py-5 flex items-center lg:gap-[15rem] md:gap-[10rem] sm:gap-[5rem] gap-[2rem] hover:bg-black hover:italic hover:text-white rounded-lg pl-5">
                        <h2 className="">02</h2>

                        <h2 className="">Customized delivery</h2>
                    </div>

                    <div data-scroll data-scroll-speed="0.06" className="md:py-10 py-5 flex items-center lg:gap-[15rem] md:gap-[10rem] sm:gap-[5rem] gap-[2rem] hover:bg-black hover:italic hover:text-white rounded-lg pl-5">
                        <h2 className="">03</h2>

                        <h2 className="">Real-time shipment tracking</h2>
                    </div>

                    <div data-scroll data-scroll-speed="0.08" className="md:py-10 py-5 flex items-center lg:gap-[15rem] md:gap-[10rem] sm:gap-[5rem] gap-[2rem] hover:bg-black hover:italic hover:text-white rounded-lg pl-5">
                        <h2 className="">04</h2>

                        <h2 className="">Innovative logistics solutions</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
