'use client'

import {motion} from 'framer-motion'
import {Tag} from 'lucide-react'
import {FaWhatsapp} from 'react-icons/fa'
import {Button} from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const StarSVG = ({className}: {className?: string}) => (
  <svg
    viewBox="0 0 100 100"
    className={`overflow-visible ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#A16207" />
      </linearGradient>
    </defs>
    <path
      d="M50 5 L61.8 35.5 L94.5 37.8 L69 58 L77.5 89.5 L50 72 L22.5 89.5 L31 58 L5.5 37.8 L38.2 35.5 Z"
      fill="url(#goldGradient)"
      stroke="#FEF08A"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M50 5 L61.8 35.5 L94.5 37.8 L69 58 L77.5 89.5 L50 72 Z" fill="#FEF08A" opacity="0.4" />
  </svg>
)

const MVPSVG = ({className}: {className?: string}) => (
  <svg
    viewBox="0 0 270 95"
    className={`overflow-visible ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="mvpFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#854D0E" />
      </linearGradient>
      <linearGradient id="mvpStroke" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FACC15" />
      </linearGradient>
      <filter id="mvpGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g transform="translate(10, 10) skewX(-12)" filter="url(#mvpGlow)">
      {/* M */}
      <path
        d="M 0 75 L 0 0 L 25 0 L 45 40 L 65 0 L 90 0 L 90 75 L 70 75 L 70 30 L 45 75 L 20 30 L 20 75 Z"
        fill="url(#mvpFill)"
        stroke="url(#mvpStroke)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* V */}
      <path
        d="M 95 0 L 120 0 L 140 60 L 160 0 L 185 0 L 152 85 L 128 85 Z"
        fill="url(#mvpFill)"
        stroke="url(#mvpStroke)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* P */}
      <path
        d="M 190 0 L 235 0 C 265 0 265 45 235 45 L 210 45 L 210 75 L 190 75 Z M 210 15 L 210 32 L 232 32 C 242 32 242 15 232 15 Z"
        fill="url(#mvpFill)"
        stroke="url(#mvpStroke)"
        strokeWidth="3"
        strokeLinejoin="round"
        fillRule="evenodd"
      />
    </g>
  </svg>
)

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-(--background)"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="HellZ Joki Background"
          fill
          priority
          className="object-cover object-center hidden dark:block opacity-30"
        />
        <Image
          src="/images/hero_light.webp"
          alt="HellZ Joki Background Light"
          fill
          priority
          className="object-cover object-center block dark:hidden opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-(--background)/30 via-(--background)/80 to-(--background)" />
      </div>

      {/* Background Gradients (Subtle) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-(--primary) rounded-full blur-[150px] opacity-[0.07] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-[0.05] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-8 items-center ">
          {/* Left Column: Typography & CTAs */}
          <div className=" flex flex-col items-start text-left pt-10 lg:pt-0">
            {/* Minimalist Badge */}

            {/* Main Headline */}
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.1}}
              className=" font-heading text-8xl sm:text-7xl md:text-8xl lg:text-[5rem] tracking-tight text-(--text-primary) leading-[1.05] mb-6 uppercase"
            >
              Push Rank <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-(--primary) to-purple-500">
                Tanpa Beban
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="text-lg md:text-xl text-(--text-secondary) max-w-md lg:max-w-lg mb-10 leading-relaxed font-medium"
            >
              Tinggalkan tim beban. Biarkan{' '}
              <strong className="text-(--text-primary)">HellZ Joki</strong> membawa akun Mobile
              Legends-mu ke rank tertinggi dengan cepat, aman, dan harga terbaik.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3, duration: 0.5}}
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
                variant="secondary"
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
              initial={{opacity: 0, scale: 0.9, rotateY: -10}}
              animate={{opacity: 1, scale: 1, rotateY: 0}}
              transition={{duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.3}}
              className="relative w-full max-w-[320px] lg:max-w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-(--border)/40 bg-(--surface)"
              style={{perspective: 1000}}
            >
              <Image
                src="/images/banner.webp"
                alt="HellZ Joki Banner"
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-(--background)/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Star 1 */}
            <motion.div
              animate={{y: [-15, 15, -15], rotate: [0, 10, -10, 0]}}
              transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}
              className="absolute top-4 right-0 lg:-right-12 z-20 w-16 h-16 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
            >
              <StarSVG className="w-full h-full" />
            </motion.div>

            {/* Floating Star 2 */}
            <motion.div
              animate={{y: [15, -15, 15], rotate: [0, -10, 10, 0]}}
              transition={{duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1}}
              className="absolute bottom-32 left-0 lg:-left-8 z-20 w-12 h-12 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
            >
              <StarSVG className="w-full h-full" />
            </motion.div>

            {/* Floating MVP */}
            <motion.div
              animate={{y: [10, -10, 10]}}
              transition={{duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2}}
              className="absolute bottom-8 right-10 lg:-right-10 z-20 w-32 md:w-40 drop-shadow-xl"
            >
              <MVPSVG className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
