'use client'

import {motion} from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24 bg-(--background)">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.5, ease: 'easeOut'}}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) mb-8 tracking-wide">
            Tentang HELLZ JOKI
          </h2>

          <div className="bg-(--surface) border border-(--border) rounded-2xl p-8 md:p-12 shadow-card hover:-translate-y-1 transition-transform duration-300">
            <p className="text-lg text-(--text-secondary) leading-relaxed">
              HellZ Joki merupakan jasa push rank Mobile Legends yang melayani berbagai tier mulai
              dari Warrior hingga Mythical Immortal. Kami mengutamakan keamanan akun, proses cepat,
              dan pelayanan yang ramah agar pelanggan mendapatkan pengalaman terbaik. Dikerjakan
              langsung oleh pro player berpengalaman yang mengerti rotasi dan makro game dengan
              sempurna.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
