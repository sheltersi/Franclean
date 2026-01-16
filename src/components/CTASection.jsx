import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

import Bubble from "./Bubble";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-sky-500">
      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <Bubble size="xl" className="left-[5%] bottom-0" delay={0} duration={10} />
        <Bubble size="lg" className="left-[25%] bottom-0" delay={2} duration={8} />
        <Bubble size="md" className="left-[70%] bottom-0" delay={1} duration={9} />
        <Bubble size="lg" className="left-[90%] bottom-0" delay={3} duration={7} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Fresh, Clean Clothes?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of happy customers who trust us with their laundry. 
            First-time customers get 20% off!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/schedulePickup">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Schedule First Pickup
              <ArrowRight className="w-5 h-5" />
            </button></Link>
            <Link href="/contact">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white bg-transparent font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button></Link>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            No commitment required. Free pickup and delivery on all orders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
