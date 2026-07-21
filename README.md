# HellZ Joki - Jasa Joki Mobile Legends 🎮

HellZ Joki adalah platform penyedia jasa push rank Mobile Legends profesional yang menawarkan layanan pengerjaan cepat, aman, terpercaya, dan dengan harga yang sangat terjangkau. Website landing page ini dibangun menggunakan teknologi web modern untuk memberikan pengalaman pengguna yang responsif, sangat cepat, dan interaktif dengan desain visual yang *Eye-Catching*.

## 🚀 Fitur Utama

- **Desain Modern & Responsif**: Dibangun sepenuhnya dengan Tailwind CSS untuk tampilan yang memukau di seluruh perangkat (Desktop, Tablet, Mobile).
- **Animasi Halus & Dinamis**: Menggunakan pustaka *Framer Motion* untuk menghadirkan efek mikro-interaksi, transisi, dan *scroll animation* yang terasa premium.
- **Dukungan Dark / Light Mode**: Mendukung tema gelap dan terang (otomatis mengikuti sistem operasi pengguna).
- **SEO Optimized (Ramah Mesin Pencari)**: Konfigurasi *Metadata* yang lengkap (OpenGraph, Twitter Cards, Keywords), *Sitemap* dinamis, dan `robots.txt` agar mudah dikenali dan menempati ranking atas di Google.
- **Katalog Harga (*Pricelist*) Terstruktur**: Daftar harga joki lengkap dan interaktif untuk semua *tier* (dari Warrior hingga Mythical Immortal).
- **Testimoni Interaktif**: Menampilkan *slider carousel* berisi ulasan dari para pelanggan setia.
- **Integrasi Langsung WhatsApp**: Tersedia tombol mengambang (*Floating Action Button*) yang langsung mengarahkan pelanggan menuju *chat* WhatsApp admin tanpa harus menyimpan nomor.

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 14+](https://nextjs.org/) (Menggunakan fitur *App Router*)
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/)
- **Styling Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Library Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikonografi**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Komponen UI**: Konsep desain menggunakan pendekatan [shadcn/ui](https://ui.shadcn.com/) dengan kombinasi Radix UI primitif.

## 📦 Struktur Folder Penting

- `/app`: Direktori utama Next.js App Router. Berisi rute aplikasi, *layout* utama, *metadata* SEO, `robots.ts`, dan `sitemap.ts`.
- `/components`: Semua komponen *User Interface* (UI) yang bersifat independen (Navbar, Hero, Footer, Testimonial, dll).
- `/components/ui`: *Reusable Base Component* seperti tombol (Button), Carousel, dll.
- `/data`: Tempat penyimpanan konfigurasi data statis seperti harga joki (`pricelist.ts`) dan ulasan pelanggan (`testimonials.ts`).
- `/public`: Penyimpanan seluruh aset visual seperti *banner*, *hero image*, logo merek, dan direktori ikon rank (`/public/ranks`).

## 💻 Cara Menjalankan Proyek secara Lokal

1. Pastikan Node.js sudah terinstal di komputer Anda.
2. Unduh atau *clone* kode sumber dari *repository* ini.
3. Buka terminal pada folder utama proyek (`hellz-joki`).
4. **Install dependensi** menggunakan Node Package Manager (seperti `pnpm`, `npm`, atau `yarn`). Direkomendasikan menggunakan `pnpm`:
   ```bash
   pnpm install
   ```
5. **Jalankan server *Development***:
   ```bash
   pnpm dev
   ```
6. Buka aplikasi browser Anda dan navigasikan ke [http://localhost:3000](http://localhost:3000) untuk melihat pratinjau website lokal.

## ✏️ Panduan Modifikasi Konten Cepat

Jika Anda ingin mengubah isi konten di masa mendatang tanpa menyentuh struktur UI terlalu dalam:
- **Mengubah Harga Joki**: Silakan buka `data/pricelist.ts` dan ubah angka di properti `price`.
- **Menambah/Mengubah Testimoni**: Silakan buka `data/testimonials.ts`.
- **Mengganti Nomor Admin WhatsApp**: Cari URL `https://wa.me/...` pada komponen tombol di dalam `components/hero.tsx`, `components/navbar.tsx`, atau `components/whatsapp-float-button.tsx`.
- **Mengganti Logo / Gambar Utama**: Anda cukup menimpa (me-*replace*) file gambar yang ada di folder `/public/images` dan `/public/logo` dengan nama file yang sama persis.

---
*Dikembangkan secara khusus untuk HellZ Joki.*
