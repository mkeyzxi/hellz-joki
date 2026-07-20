"use client"

import { motion } from 'framer-motion'
import { IdCard, Target, CreditCard, Loader, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const steps = [
  { icon: FaWhatsapp, title: "Hubungi WhatsApp", desc: "Chat admin kami" },
  { icon: IdCard, title: "Kirim ID Game", desc: "Berikan data akun ML" },
  { icon: Target, title: "Diskusikan Target", desc: "Tentukan rank tujuan" },
  { icon: CreditCard, title: "Pembayaran", desc: "Transfer sesuai harga" },
  { icon: Loader, title: "Proses Joki", desc: "Akun sedang dikerjakan" },
  { icon: CheckCircle2, title: "Selesai", desc: "Rank naik, akun aman!" },
]

export function HowToOrder() {
  return (
    <section className="py-24 bg-(--background) border-t border-(--border)/30">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide">
            Cara Order
          </h2>
        </motion.div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-(--border) -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4"
              >
                {/* Step Circle with Icon */}
                <div className="w-20 h-20 rounded-full bg-(--surface) border-2 border-(--primary) flex items-center justify-center shrink-0 shadow-glow relative z-10">
                  <step.icon size={32} className="text-(--primary)" />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-heading text-xl text-(--text-primary) tracking-wide mb-1">
                    <span className="text-(--primary) mr-2 lg:hidden">{idx + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-(--text-secondary) text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
