import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Services } from "@/components/services";
import { Pricelist } from "@/components/pricelist";
import { HowToOrder } from "@/components/how-to-order";
import { FAQ } from "@/components/faq";
import { Testimonial } from "@/components/testimonial";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Pricelist />
      <HowToOrder />
      <FAQ />
      <Testimonial />
      <Contact />
    </>
  );
}
