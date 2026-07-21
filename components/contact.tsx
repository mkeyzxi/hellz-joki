"use client"

import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { Button } from './ui/button'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-(--background)">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-(--surface) border border-(--border) rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide mb-4">
            Siap Push Rank Sekarang?
          </h2>
          <p className="text-(--text-secondary) mb-10 max-w-2xl mx-auto">
            Jangan biarkan tier stuck. Hubungi admin kami sekarang dan capai rank impianmu secepatnya dengan aman.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/62895326945192" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" size={20} />
                Chat WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <a href="https://instagram.com/_ahaldif" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="mr-2" size={20} />
                Follow Instagram
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
