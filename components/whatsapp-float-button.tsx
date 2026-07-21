"use client"

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href="https://wa.me/62895326945192"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  )
}
