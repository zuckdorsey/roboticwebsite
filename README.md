# 🤖 Robotics Technology Website - Polibatam

Website untuk program studi Teknologi Robotika di Politeknik Negeri Batam. Dibuat dengan Next.js 16, React 19, TypeScript, dan Tailwind CSS.

## ✨ Fitur

- ✅ **Modular Components** - Setiap section dalam komponen terpisah
- ✅ **TypeScript** - Type-safe development
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI** - Clean dan professional design
- ✅ **Easy Maintenance** - Struktur yang terorganisir
- ✅ **SEO Friendly** - Next.js App Router

## 📁 Struktur Project

```
roboticwebsite/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   │
│   ├── components/           # Semua komponen UI
│   │   ├── index.ts          # Barrel export
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CurriculumSection.tsx
│   │   ├── FacilitiesSection.tsx
│   │   ├── FacultyMembersSection.tsx
│   │   ├── StudentsSection.tsx
│   │   ├── AlumniSection.tsx
│   │   └── Footer.tsx
│   │
│   └── types/
│       └── index.ts          # TypeScript interfaces
│
├── public/                   # Static files
├── COMPONENTS.md             # Dokumentasi komponen
├── STRUCTURE.md              # Dokumentasi struktur
└── README.md                 # File ini
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd roboticwebsite

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📋 Sections

Website ini terdiri dari section-section berikut (sesuai navbar):

1. **HOME** - Hero section dengan judul program
2. **ABOUT** - Informasi tentang program robotik
3. **CURRICULUM** - Daftar mata kuliah dan kurikulum
4. **FACILITIES** - Fasilitas laboratorium dan penelitian
5. **FACULTY MEMBERS** - Daftar dosen dan pengajar
6. **STUDENTS** - Informasi mahasiswa aktif
7. **ALUMNI** - Profil alumni yang sukses

## 🎨 Teknologi

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Linter**: ESLint

## 📝 Cara Update Konten

### 1. Update Data Section

Edit file `src/app/page.tsx` dan ubah data di dalam component:

```tsx
const courses = [
  {
    title: "Nama Mata Kuliah",
    description: "Deskripsi...",
    duration: "Semester X",
  },
  // Tambah course baru
];
```

### 2. Update Menu Navbar

Edit file `src/components/Navbar.tsx`:

```tsx
const menuItems = [
  { label: "HOME", href: "#home" },
  { label: "NEW MENU", href: "#new" },
  // Tambah menu baru
];
```

### 3. Tambah Section Baru

1. Buat file komponen baru di `src/components/`
2. Export di `src/components/index.ts`
3. Import dan gunakan di `src/app/page.tsx`

Lihat [STRUCTURE.md](./STRUCTURE.md) untuk detail lengkap.

## 📚 Dokumentasi

- **[COMPONENTS.md](./COMPONENTS.md)** - Dokumentasi lengkap setiap komponen
- **[STRUCTURE.md](./STRUCTURE.md)** - Struktur project dan design pattern

## 🎯 Komponen Utama

Setiap komponen menerima props untuk data yang ditampilkan:

```tsx
// Example usage
<HeroSection
  title="Learn Robotics Technology"
  subtitle="Future of Innovation"
/>

<CurriculumSection courses={coursesData} />

<FacilitiesSection facilities={facilitiesData} />
```

Semua komponen fully typed dengan TypeScript untuk type safety.

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Responsive Design

Website ini responsive untuk semua ukuran layar:

- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🎨 Customization

### Warna Theme

Edit di `src/app/globals.css` atau langsung di komponen dengan Tailwind:

- Primary: `orange-500` / `orange-600`
- Background: `gray-50`
- Text: `gray-900`
- Accent: `blue-500`

### Typography

Menggunakan font default Tailwind. Bisa diganti di `src/app/layout.tsx`.

## 📄 License

MIT License - Feel free to use for your projects

## 👨‍💻 Maintenance

Website ini dirancang untuk mudah di-maintenance:

- ✅ Komponen modular dan reusable
- ✅ TypeScript untuk type safety
- ✅ Dokumentasi lengkap
- ✅ Clean code structure
- ✅ Easy to scale

## 🤝 Contributing

Contributions are welcome! Please read the documentation first.

## 📧 Contact

Untuk pertanyaan atau support, hubungi:

- Email: info@polibatam.ac.id
- Website: https://polibatam.ac.id

---

**Built with ❤️ for Politeknik Negeri Batam**
