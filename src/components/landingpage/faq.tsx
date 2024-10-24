import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <div className="flex justify-center mb-10">
            <div className="xl:w-[1300px]  w-[1024px] max-w-full px-4">
                {/* faq */}
                <div id="faq" className="sm:grid grid-cols-5 items-start  sm:space-y-0 space-y-3 sm:mt-20 mt-10">
                    <div className="text-2xl font-light uppercase sm:col-span-2 mt-5">
                        <h3>Faq</h3>
                    </div>
                    <div className="sm:col-span-3 ">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="md:text-xl text-md text-left">What types of freight do you transport?</AccordionTrigger>
                                <AccordionContent>
                                    We transport a wide variety of freight including general cargo, hazardous materials, and temperature-sensitive goods.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="md:text-xl text-md text-left">What should I do if my shipment is delayed?</AccordionTrigger>
                                <AccordionContent>
                                    If your shipment is delayed, please contact our customer service team for updates and assistance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="md:text-xl text-md text-left">How can I get a quote for shipping my freight?</AccordionTrigger>
                                <AccordionContent>
                                    You can request a quote through our website by filling out the quote form, or by contacting our sales team directly.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="md:text-xl text-md text-left">How do you ensure the safety of my freight?</AccordionTrigger>
                                <AccordionContent>
                                    We utilize advanced tracking systems and work with experienced personnel to ensure the safety and security of all shipments.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="md:text-xl text-md text-left">Do you offer insurance for my shipments?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we provide insurance options to cover potential losses or damages during transit for added peace of mind.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="md:text-xl text-md text-left">What are your operating hours?</AccordionTrigger>
                                <AccordionContent>
                                    Our customer service team is available Monday to Friday, 8 AM to 6 PM, and we operate 24/7 for freight shipping services.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}