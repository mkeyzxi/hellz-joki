"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { testimonials } from '@/data/testimonials'

export function Testimonial() {
  return (
    <section className="py-24 bg-(--surface) border-y border-(--border)/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide">
            Testimoni Pelanggan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testi) => (
                <CarouselItem key={testi.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="bg-(--background) border border-(--border) rounded-2xl p-6 h-full flex flex-col">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testi.rating ? "fill-(--primary) text-(--primary)" : "text-(--border)"} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-(--text-secondary) mb-6 flex-grow line-clamp-3">
                        &quot;{testi.comment}&quot;
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 relative rounded-full overflow-hidden bg-(--surface-elevated)">
                          <Image src={testi.avatar} alt={testi.name} fill className="object-cover" />
                        </div>
                        <h4 className="font-semibold text-(--text-primary)">{testi.name}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="bg-(--surface-elevated) hover:bg-(--primary) hover:text-black border-(--border)" />
              <CarouselNext className="bg-(--surface-elevated) hover:bg-(--primary) hover:text-black border-(--border)" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
