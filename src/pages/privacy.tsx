const PrivacyPolicy = () => {
    return (
        <div className="flex justify-center py-10 font-raleway">
            <div className="xl:w-[1300px] lg:w-[1024px] space-y-5">
                <h1 className="text-3xl mb-3 font-semibold">Privacy Policy</h1>
                <p className="mb-2">Last updated: <b>14th jan 2024</b></p>

                <h2 className="text-xl">Introduction</h2>
                <p>
                    This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services. By accessing or using our application, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2 className="text-2xl">Information We Collect</h2>
                <h3  className="text-xl">Personal Information</h3>
                <p>
                    We may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, including but not limited to:
                </p>
                <ul className="pl-5 font-medium list-disc">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Postal address</li>
                </ul>

                <h3  className="text-xl">Usage Data</h3>
                <p>
                    We may also collect information on how the application is accessed and used. This usage data may include:
                </p>
                <ul className="pl-5 font-medium list-disc">
                    <li>Your device's Internet Protocol address (IP address)</li>
                    <li>Browser type and version</li>
                    <li>Pages of our application that you visit</li>
                    <li>Date and time of your visit</li>
                    <li>Time spent on those pages</li>
                    <li>Other diagnostic data</li>
                </ul>

                <h2 className="text-xl">How We Use Your Information</h2>
                <p>We use the collected data for various purposes, including:</p>
                <ul className="pl-5 font-medium list-disc">
                    <li>To provide and maintain our service</li>
                    <li>To notify you about changes to our service</li>
                    <li>To allow you to participate in interactive features when you choose to do so</li>
                    <li>To process and deliver your orders efficiently, ensuring that your goods arrive on time.</li>
                    <li>To communicate with you regarding your order status, including shipping updates and delivery notifications.</li>
                    <li>To improve our delivery services by analyzing shipping data and customer feedback.</li>
                </ul>
            </div>
        </div>
    );
};


export default PrivacyPolicy