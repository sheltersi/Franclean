export const metadata = {
title:"FAQ - Franclean | Frequently Asked Questions",
description:"Find answers to common questions about Franclean laundry services, pricing, turnaround times, and more."
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
