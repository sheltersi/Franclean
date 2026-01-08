import { Award, Eye, Heart, Leaf, Target, Users } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title:"About Us - FreshWash | Our Story & Mission",
    description: "Learn more about Franclean Laundry, our mission, and our commitment to quality laundry services."
}

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We treat every garment as if it were our own."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "We use environmentally responsible detergents and energy-efficient equipment."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Proudly serving our local community with jobs and quality service."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We maintain the highest standards in fabric care, using premium products and proven techniques."
    }
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500K+", label: "Items Cleaned" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "Satisfaction Rate" }
  ];

    const team = [
    {
      name: "Francis Odims",
      role: "Founder & CEO",
      description: "With 15 years in the textile industry, Francis founded Franclean to bring professional laundry care to every home.",
    },
    {
      name: "Christ U",
      role: "Operations Director",
      description: "Christ ensures every garment receives meticulous care through our quality-focused processes.",
    },
    {
      name: "Shelter Sibanda",
      role: "Customer Experience Lead",
      description: "Shelter leads our customer success team, ensuring every interaction exceeds expectations.",
    },
  ];

  return (
    <>
      <main className="">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff]">
          <div className="container mx-auto px-4 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Our 
              <span className="text-gradient"> Story</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Founded with a simple mission: to give you back your time while keeping your clothes looking their best.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It All Started</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Franclean began in 2024 when our founder, tired of spending weekends at the laundromat, 
                  envisioned a better way. What if laundry could be effortless? What if someone could 
                  pick up your clothes, clean them professionally, and return them fresh and folded?
                </p>
                <p>
                  Starting with just a small facility and a delivery van, we've grown into a 
                  full-service laundry company serving thousands of customers. But our core values 
                  remain the same: quality, convenience, and care.
                </p>
                <p>
                  Today, our team of laundry experts handles everything from everyday wash-and-fold 
                  to delicate dry cleaning. We've invested in the best equipment and eco-friendly 
                  products because we believe you deserve nothing less.
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-10">
                <div className="h-14 w-14 rounded-2xl bg-mint-leaf-100 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-mint-leaf-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional laundry services that save time, reduce stress, and deliver impeccably clean clothes to every customer. We strive to make professional garment care accessible, convenient, and affordable for all.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-10">
                <div className="h-14 w-14 rounded-2xl bg-mint-leaf-100 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-mint-leaf-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and loved laundry service in the region, known for our reliability, quality, and commitment to customer satisfaction. We envision a future where laundry is never a burden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        {/* Stats */}
        <section className="py-16 bg-sky-500">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sky-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-sky-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-lg">
              The dedicated team behind Franclean's success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-sky-700/20 to-mint-leaf-700/20" />
                <CardContent className="p-6 text-center -mt-12 relative">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-sky-500 to-mint-leaf-500 mx-auto border-4 border-card" />
                  <h3 className="text-xl font-semibold mt-4 text-[#0F1924]">{member.name}</h3>
                  <p className="text-[#0EA5E9] font-medium mb-3">{member.role}</p>
                  <p className="text-[#627384] text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton/>
      </main>

x    </>
  );
};

export default About;
