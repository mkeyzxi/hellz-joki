'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {Menu, X, Sun, Moon} from 'lucide-react'
import {Button} from './ui/button'
import {useTheme} from 'next-themes'
import {motion, AnimatePresence} from 'framer-motion'
import {cn} from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  {name: 'Home', href: '#home'},
  {name: 'Tentang', href: '#about'},
  {name: 'Layanan', href: '#services'},
  {name: 'Pricelist', href: '#pricelist'},
  {name: 'FAQ', href: '#faq'},
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}} // Springy easeOut
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center',
          isScrolled ? 'pt-4 px-4' : 'pt-6 px-6 md:px-12',
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between transition-[background-color,padding,max-width,box-shadow,width] duration-500 ease-out w-full rounded-full',
            isScrolled
              ? 'max-w-5xl bg-(--background)/80 backdrop-blur-xl px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.15)]'
              : 'max-w-7xl bg-transparent py-2',
          )}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 relative rounded-full overflow-hidden transition-colors">
              <Image src="/logo/logo.png" alt="HellZ Joki Logo" fill className="object-cover" />
            </div>
            <span
              className={cn(
                'font-heading tracking-wide font-bold transition-colors',
                isScrolled
                  ? 'text-xl text-(--text-primary) group-hover:text-(--primary)'
                  : 'text-2xl text-(--primary)',
              )}
            >
              HELLZ JOKI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'relative z-10 px-4 py-2 text-sm font-medium transition-colors block',
                      hoveredIndex === idx
                        ? 'text-black'
                        : isScrolled
                          ? 'text-(--text-secondary) hover:text-(--text-primary)'
                          : 'text-(--text-primary) hover:text-(--primary)',
                    )}
                  >
                    {link.name}
                  </Link>
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-(--primary) rounded-full z-0"
                      initial={{opacity: 0, scale: 0.8}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0.8}}
                      transition={{type: 'spring', bounce: 0.2, duration: 0.5}}
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="ml-4 pl-4 flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={cn(
                    "transition-colors p-2 rounded-full",
                    isScrolled ? "text-(--text-primary) hover:bg-(--surface-elevated)" : "text-(--text-primary) hover:bg-(--text-primary)/10"
                  )}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              <Button
                className={cn(
                  'rounded-full font-medium transition-all shadow-glow',
                  isScrolled ? 'h-10 px-5 text-sm' : 'h-11 px-6 text-base',
                )}
                asChild
              >
                <Link href="#pricelist">Order Sekarang</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Nav Toggle & Theme */}
          <div className="flex items-center gap-1 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(
                  "transition-colors p-2 rounded-full",
                  isScrolled ? "text-(--text-primary) hover:bg-(--surface-elevated)" : "text-(--text-primary) hover:bg-(--text-primary)/10"
                )}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              className={cn(
                "hover:text-(--primary) transition-colors p-2",
                "text-(--text-primary)"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, y: -20, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: -20, scale: 0.95}}
            transition={{duration: 0.2, ease: 'easeOut'}}
            className="fixed top-24 inset-x-4 z-50 md:hidden bg-(--surface) rounded-3xl overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{opacity: 0, x: -10}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: i * 0.05 + 0.1}}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-lg font-medium text-zinc-300 hover:text-(--primary) hover:bg-white/5 rounded-2xl transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: navLinks.length * 0.05 + 0.1}}
                className="mt-4 p-4"
              >
                <Button
                  className="w-full h-14 rounded-2xl text-lg font-semibold"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="#pricelist">Order Sekarang</Link>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
