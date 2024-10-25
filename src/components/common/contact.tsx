import { API } from "@/utils/request";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { useState } from "react";

export default function ContactUs() {
    const [l, sl] = useState(false)
    function submitForm(ev:any) {
        // Prevent the default form submission behavior
        ev.preventDefault();

        const form = ev.target;
        sl(true)

        const formData = new FormData();
        formData.append('name', form.fullname.value);
        formData.append('email', form.email.value);
        formData.append('message', form.message.value);

        // Send data to the backend PHP script
        axios.post(`${API}/admin/api/ajax.php?v1=contact_us`, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((resp: any) => {
                if(resp) {
                    console.log(resp);
                    sl(false)
                alert("Submitted Successfully");
                }
            })
            .catch((err) => {
                sl(false)
                console.error(err); // Log any errors
            });
    }

    return (
        <div>
            <form onSubmit={submitForm} className="flex flex-col gap-4 mt-5">
                <Input name="fullname" placeholder="Your FullName" />
                <Input name="email" placeholder="Your Email" />
                <Textarea placeholder="Type your message here." name="message" />
                <Button disabled={l} type="submit" className="bg-[#036a51] hover:bg-[#036a51]/90 font-semibold disabled:opacity-60">
                    Send Message
                </Button>
            </form>
        </div>
    )
}
