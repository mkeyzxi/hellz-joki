"use client"

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Gamepad2, BadgeDollarSign, MessageCircleMore, Clock } from 'lucide-react'

const features = [
  { icon: Zap, title: "Fast Process", desc: "Proses secepat kilat tanpa menunda." },
  { icon: ShieldCheck, title: "Aman", desc: "100% manual tanpa cheat/bot." },
  { icon: Gamepad2, title: "Player Berpengalaman", desc: "Dikerjakan oleh pro player Mythical Glory." },
  { icon: BadgeDollarSign, title: "Harga Terjangkau", desc: "Kualitas premium dengan harga merakyat." },
  { icon: MessageCircleMore, title: "Fast Response", desc: "Admin siap menjawab semua pertanyaanmu." },
  { icon: Clock, title: "Online 24 Jam", desc: "Kapanpun butuh push, kami siap sedia." },
]

export function Features() {
  return (
    <section className="py-24 bg-(--background)">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide">
            Kenapa Memilih Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-(--surface) border border-(--border) rounded-2xl p-6 md:p-8 flex items-start gap-4 hover:-translate-y-1 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-(--primary-muted) flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <feat.icon size={28} className="text-(--primary)" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-(--text-primary) tracking-wide mb-2">{feat.title}</h3>
                <p className="text-(--text-secondary) text-sm">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
