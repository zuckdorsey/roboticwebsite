# Struktur Komponen Website Robotik

```
src/
├── app/
│   ├── page.tsx              # Main page - menggunakan semua komponen
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/
│   ├── index.ts              # Export semua komponen (barrel export)
│   ├── Navbar.tsx            # ✅ Navigation bar (HOME, ABOUT, CURRICULUM, etc)
│   ├── HeroSection.tsx       # ✅ Landing section dengan judul besar
│   ├── AboutSection.tsx      # ✅ Section tentang program
│   ├── CurriculumSection.tsx # ✅ Daftar mata kuliah
│   ├── FacilitiesSection.tsx # ✅ Fasilitas yang tersedia
│   ├── FacultyMembersSection.tsx # ✅ Daftar dosen/pengajar
│   ├── StudentsSection.tsx   # ✅ Daftar mahasiswa aktif
│   ├── AlumniSection.tsx     # ✅ Daftar alumni sukses
│   └── Footer.tsx            # ✅ Footer dengan kontak & social media
│
└── types/
    └── index.ts              # TypeScript interfaces untuk semua data
```

## 🎯 Alur Data

```
page.tsx (Data Source)
    │
    ├── Navbar
    │
    ├── HeroSection
    │     └── Props: { title, subtitle }
    │
    ├── AboutSection
    │     └── Props: { description }
    │
    ├── CurriculumSection
    │     └── Props: { courses: Course[] }
    │
    ├── FacilitiesSection
    │     └── Props: { facilities: Facility[] }
    │
    ├── FacultyMembersSection
    │     └── Props: { members: FacultyMember[] }
    │
    ├── StudentsSection
    │     └── Props: { students: Student[], totalStudents }
    │
    ├── AlumniSection
    │     └── Props: { alumni: Alumni[] }
    │
    └── Footer
```

## 📋 Checklist Section (Sesuai Navbar)

Berdasarkan gambar navbar yang diberikan:

- ✅ **HOME** - HeroSection.tsx
- ✅ **ABOUT** - AboutSection.tsx
- ✅ **CURRICULUM** - CurriculumSection.tsx
- ✅ **FACILITIES** - FacilitiesSection.tsx
- ✅ **FACULTY MEMBERS** - FacultyMembersSection.tsx
- ✅ **STUDENTS** - StudentsSection.tsx
- ✅ **ALUMNI** - AlumniSection.tsx

## 🎨 Design Pattern

Setiap komponen mengikuti pattern yang sama:

1. **Menerima props** dengan TypeScript interface
2. **Reusable** - bisa digunakan dengan data yang berbeda
3. **Responsive** - mobile-first design
4. **Consistent styling** - menggunakan Tailwind CSS
5. **Type-safe** - menggunakan TypeScript types dari `/types`

## 🔄 Cara Update Konten

### Update Menu Navbar

```tsx
// Edit: src/components/Navbar.tsx
const menuItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  // Tambah menu baru di sini
];
```

### Update Data Section

```tsx
// Edit: src/app/page.tsx
const courses = [
  {
    title: "New Course",
    description: "Description...",
    duration: "Semester X",
  },
  // Tambah data baru di sini
];
```

### Tambah Section Baru

1. Buat komponen baru di `/components/NewSection.tsx`
2. Export di `/components/index.ts`
3. Tambahkan type baru di `/types/index.ts` (jika perlu)
4. Import dan gunakan di `/app/page.tsx`

## 🚀 Keuntungan Struktur Ini

1. **Easy Maintenance** - Setiap section terpisah dalam file sendiri
2. **Reusable** - Komponen bisa digunakan ulang dengan data berbeda
3. **Type Safety** - TypeScript mencegah error
4. **Scalable** - Mudah menambah section baru
5. **Clean Code** - page.tsx jadi lebih ringkas dan readable
6. **Testing** - Setiap komponen bisa di-test secara terpisah

## 📝 Example: Menambah Section Baru

```tsx
// 1. Buat komponen: src/components/ContactSection.tsx
export default function ContactSection({ email, phone }) {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </section>
  );
}

// 2. Export di src/components/index.ts
export { default as ContactSection } from "./ContactSection";

// 3. Gunakan di src/app/page.tsx
import { ContactSection } from "@/components";

<ContactSection email="info@polibatam.ac.id" phone="0778-1234567" />;
```
