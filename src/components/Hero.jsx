import Button from "@/components/Button";

export default function Hero() {
  return (
    // min-h-[85vh] md:min-h-[90vh]
    <section className="relative h-[110vh] md:h-[90vh] bg-gradient-to-br from-[#43C59E] via-[#4A8F83] to-[#14453D] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div
          className="absolute -top-40 -right-40 w-[950px] h-[950px] rounded-full bg-[#68edc6]/20 flex items-center justify-center
                   shadow-[0_20px_40px_rgba(15,76,92,0.25)]"
        >
          <img
            src="/assets/hero/hero-laundry.jpg"
            alt="Decorative"
            className="max-w-[70%] max-h-[70%] object-contain rounded-xl border-8 border-white/30 shadow-[0_20px_40px_rgba(15,76,92,0.25)]"
          />
        </div>
      </div>

      {/* Mobile Decorative Image */}
{/* <div className="mt-0 flex justify-center lg:hidden">
  <div
    className="w-[280px] h-[280px] rounded-full bg-[#68edc6]/20 flex items-center justify-center
               shadow-[0_16px_32px_rgba(15,76,92,0.25)]"
  >
    <img
      src="/assets/hero/image3.jpg"
      alt="Laundry service"
      className="max-w-[65%] max-h-[65%] object-contain rounded-xl
                 border-4 border-white/25 shadow-md"
    />
  </div>
</div> */}


      {/* Hero Content */}
      <div className=" mx-auto px-4 md:px-[200px]">
        <div className=" text-white md:w-[400px]">
          <h1 className="text-[40px] md:text-[70px] font-bold pb-4">Laundry, done right.</h1>
          <p className=" md:text-xl pb-4">
            Professional cleaning with convenient pickup and delivery — so you
            can focus on what matters.
          </p>

          <div className="flex flex-wrap gap-3 mb-4 mt-4">
            {/* <button href="/quote" className="bg-[#0f4c5c] text-white p-4 rounded-2xl">Schedule a Pickup</button> */}
            <button
              className="
  bg-[#0f4c5c] 
  text-white 
  px-6 py-4 
  rounded-2xl 
  font-semibold
  shadow-md
  hover:bg-[#14453D]
  hover:-translate-y-0.5
  transition-all
"
            >
              Schedule a Pickup
            </button>
            <button
              className="
  bg-[#68edc6] 
  text-[#1f3a4a]
  px-6 py-4 
  rounded-2xl 
  font-semibold
  border border-white/30
  hover:bg-[#90f3ff]
  transition-all
"
            >
              Contact Us
            </button>
          </div>
        </div>
        <ul className="text-white pt-4 md:text-xl">
          <li>Professionally cleaned & handled with care.</li>  
          <li>Reliable pickup & on-time delivery</li>
        </ul>
      </div>
    </section>
  );
}
