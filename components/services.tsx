"use client"

import { motion } from 'framer-motion'

const services = [
  { title: "Push Rank", desc: "Naik rank sesuai target rank impianmu." },
  { title: "Per Bintang", desc: "Pembayaran hemat berdasarkan jumlah bintang." },
  { title: "Rank Up", desc: "Naik divisi secara instan hingga level Mythic." },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-(--background) border-t border-(--border)/30">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide">
            Layanan Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-(--surface) border border-(--border) rounded-2xl p-8 hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-card transition-all duration-300"
            >
              <h3 className="font-heading text-2xl text-(--primary) tracking-wide mb-3">{srv.title}</h3>
              <p className="text-(--text-secondary)">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
