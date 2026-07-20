import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-(--surface) border-t border-(--border) pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <Image src="/logo.png" alt="HellZ Joki Logo" fill className="object-cover" />
            </div>
            <span className="font-heading text-2xl tracking-wide font-bold text-(--primary)">
              HellZ Joki
            </span>
          </Link>
          <p className="text-(--text-secondary) text-sm leading-relaxed max-w-sm">
            Jasa joki Mobile Legends profesional. Push rank cepat, aman, terpercaya dan dengan harga
            terjangkau.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg text-(--text-primary) tracking-wide">Menu</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#about"
                className="text-(--text-secondary) hover:text-(--primary) text-sm transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-(--text-secondary) hover:text-(--primary) text-sm transition-colors"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href="#pricelist"
                className="text-(--text-secondary) hover:text-(--primary) text-sm transition-colors"
              >
                Price List
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-(--text-secondary) hover:text-(--primary) text-sm transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg text-(--text-primary) tracking-wide">Kontak</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://wa.me/62895326945192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-(--text-secondary) hover:text-(--primary) transition-colors text-sm"
              >
                <FaWhatsapp size={18} />
                <span>0895 3269 45192</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/_ahaldif"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-(--text-secondary) hover:text-(--primary) transition-colors text-sm"
              >
                <FaInstagram size={18} />
                <span>@_ahaldif</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-8 border-t border-(--border)/50 flex flex-col md:flex-row items-center justify-between text-(--text-muted) text-xs">
        <p>&copy; 2026 HellZ Joki. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Muhammad Makbul N.</p>
      </div>
    </footer>
  )
}
