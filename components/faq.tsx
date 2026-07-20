"use client"

import { motion } from 'framer-motion'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'
import { faqData } from '@/data/faq'

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-(--background) border-t border-(--border)/30">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide">
            FAQ
          </h2>
          <p className="text-(--text-secondary) mt-4">Pertanyaan yang sering diajukan</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg text-(--text-primary) hover:text-(--primary)">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-(--text-secondary) leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
