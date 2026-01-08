import GetQuoteClient from "@/components/GetQuoteClient";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata ={
  title:"Get a Quote | Franclean Laundry Service",
  description:"Get a personalized quote for your laundry needs. Fast, free estimates for wash & fold, dry cleaning, and more."
}

const GetQuote = () => {
  return(
 <>
<GetQuoteClient />
<WhatsAppButton />
  </>
  )
 
}

export default GetQuote;
