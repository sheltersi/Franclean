export const metadata = {
title:"FAQ - FreshWash | Frequently Asked Questions",
description:"Find answers to common questions about FreshWash laundry services, pricing, turnaround times, and more."
}

import { WhatsAppButton } from "@/components/WhatsAppButton";
import FaqClient from "@/components/faqClient";

const FAQ = () =>{
return(
    <>
    <FaqClient />
    <WhatsAppButton />
    </>

)


}


export default FAQ;
