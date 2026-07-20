'use client'

import { motion } from 'framer-motion'
import { Tag, ShieldCheck, Zap } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-(--background)"
    >
      {/* Background Gradients (Subtle) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-(--primary) rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-start text-left pt-10 lg:pt-0">
            {/* Minimalist Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-(--border)/60 bg-(--surface)/50 backdrop-blur-sm shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-secondary)">
                Layanan Buka 24/7
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tight text-(--text-primary) leading-[1.05] mb-6 uppercase"
            >
              Push Rank <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-(--primary) to-purple-500">
                Tanpa Beban
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-(--text-secondary) max-w-md lg:max-w-lg mb-10 leading-relaxed font-medium"
            >
              Tinggalkan tim beban. Biarkan <strong className="text-(--text-primary)">HellZ Joki</strong> membawa akun Mobile Legends-mu ke rank tertinggi dengan cepat, aman, dan harga terbaik.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base font-bold group relative overflow-hidden shadow-xl shadow-(--primary)/20 hover:shadow-(--primary)/40 transition-all rounded-xl"
                asChild
              >
                <a href="https://wa.me/62895326945192" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <FaWhatsapp className="mr-2.5 relative z-10" size={20} />
                  <span className="relative z-10 tracking-wide">Pesan Sekarang</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-xl border border-(--border)/60 hover:bg-(--surface) hover:text-(--primary) transition-all shadow-sm"
                asChild
              >
                <Link href="#pricelist">
                  <Tag className="mr-2.5" size={20} />
                  <span className="tracking-wide">Lihat Harga</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Main Visual Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-(--border)/40 bg-(--surface)"
              style={{ perspective: 1000 }}
            >
              <Image
                src="/hero.png"
                alt="HellZ Joki Background"
                fill
                priority
                className="object-cover object-center hidden dark:block opacity-70 hover:scale-105 transition-transform duration-700"
              />
              <Image
                src="/hero_light.png"
                alt="HellZ Joki Background Light"
                fill
                priority
                className="object-cover object-center block dark:hidden opacity-80 hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-(--background)/90 via-(--background)/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="w-40 h-40 relative drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                    <Image src="/logo.png" alt="HellZ Joki Logo" fill className="object-contain" />
                 </div>
              </div>
            </motion.div>

            {/* Floating Glass Card 1 (Aman) */}
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 right-0 lg:-right-8 bg-(--surface)/70 backdrop-blur-xl border border-(--border)/50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div className="pr-2">
                <p className="text-sm font-bold text-(--text-primary)">100% Aman</p>
                <p className="text-xs text-(--text-secondary) font-medium">Tanpa Cheat/Bot</p>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 (Cepat) */}
            <motion.div
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-16 left-0 lg:-left-12 bg-(--surface)/70 backdrop-blur-xl border border-(--border)/50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-(--primary)/10 text-(--primary) border border-(--primary)/20 flex items-center justify-center">
                <Zap size={24} />
              </div>
              <div className="pr-2">
                <p className="text-sm font-bold text-(--text-primary)">Proses Cepat</p>
                <p className="text-xs text-(--text-secondary) font-medium">Selesai Tepat Waktu</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
