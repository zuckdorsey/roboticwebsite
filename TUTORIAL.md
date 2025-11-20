# Tutorial: Menambah Section Baru

Panduan step-by-step untuk menambahkan section baru ke website.

## Contoh: Menambah "Contact Section"

### Step 1: Buat Type (Opsional)

Jika section butuh data kompleks, tambahkan type di `src/types/index.ts`:

```typescript
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapUrl?: string;
}
```

### Step 2: Buat Komponen

Buat file baru `src/components/ContactSection.tsx`:

```tsx
import { ContactInfo } from "@/types";

interface ContactSectionProps {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">📧 Email</h3>
            <p className="text-gray-600">{contact.email}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">📞 Phone</h3>
            <p className="text-gray-600">{contact.phone}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">📍 Address</h3>
            <p className="text-gray-600">{contact.address}</p>
          </div>
        </div>

        {contact.mapUrl && (
          <div className="mt-8">
            <iframe
              src={contact.mapUrl}
              width="100%"
              height="400"
              className="rounded-2xl"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
```

### Step 3: Export Komponen

Tambahkan export di `src/components/index.ts`:

```typescript
export { default as Navbar } from "./Navbar";
export { default as HeroSection } from "./HeroSection";
// ... exports lainnya ...
export { default as ContactSection } from "./ContactSection"; // ← Tambah ini
export { default as Footer } from "./Footer";
```

### Step 4: Tambah Menu di Navbar

Edit `src/components/Navbar.tsx`:

```typescript
const menuItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "CURRICULUM", href: "#curriculum" },
  { label: "FACILITIES", href: "#facilities" },
  { label: "FACULTY MEMBERS", href: "#faculty" },
  { label: "STUDENTS", href: "#students" },
  { label: "ALUMNI", href: "#alumni" },
  { label: "CONTACT", href: "#contact" }, // ← Tambah ini
];
```

### Step 5: Gunakan di Page

Edit `src/app/page.tsx`:

```tsx
import {
  Navbar,
  HeroSection,
  AboutSection,
  CurriculumSection,
  FacilitiesSection,
  FacultyMembersSection,
  StudentsSection,
  AlumniSection,
  ContactSection, // ← Import komponen baru
  Footer,
} from "@/components";

export default function Home() {
  // ... data lainnya ...

  // Data untuk Contact
  const contactInfo = {
    email: "robotics@polibatam.ac.id",
    phone: "+62 778 123 4567",
    address: "Jl. Ahmad Yani, Batam Center, Batam 29461",
    mapUrl: "https://maps.google.com/embed?...",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection title="..." subtitle="..." />
      <AboutSection description="..." />
      <CurriculumSection courses={courses} />
      <FacilitiesSection facilities={facilities} />
      <FacultyMembersSection members={facultyMembers} />
      <StudentsSection students={students} totalStudents={150} />
      <AlumniSection alumni={alumni} />

      {/* ← Tambah section baru di sini */}
      <ContactSection contact={contactInfo} />

      <Footer />
    </div>
  );
}
```

### Step 6: Test

```bash
npm run dev
```

Buka http://localhost:3000 dan scroll ke section Contact.

## Template Komponen Section

Gunakan template ini untuk membuat section baru:

```tsx
// src/components/YourNewSection.tsx

interface YourNewSectionProps {
  // Definisikan props di sini
  title?: string;
  data?: any[];
}

export default function YourNewSection({ title, data }: YourNewSectionProps) {
  return (
    <section id="your-section" className="max-w-7xl mx-auto px-6 py-16">
      <div>
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}

        {/* Konten section Anda di sini */}
        <div className="grid md:grid-cols-3 gap-8">
          {data?.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
              {/* Card content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Styling Guidelines

Ikuti pattern ini untuk konsistensi:

### Section Container

```tsx
<section
  id="section-id"
  className="max-w-7xl mx-auto px-6 py-16"
>
```

### Alternating Background

- Odd sections: `bg-gray-50` (default body background)
- Even sections: `bg-white`

### Heading

```tsx
<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
  Section Title
</h2>
```

### Grid Layout

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{/* items */}</div>
```

### Card

```tsx
<div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
  {/* card content */}
</div>
```

## Checklist

Sebelum push code, pastikan:

- [ ] Komponen dibuat di `/src/components/`
- [ ] Type ditambahkan di `/src/types/` (jika perlu)
- [ ] Export ditambahkan di `/src/components/index.ts`
- [ ] Menu ditambahkan di `Navbar.tsx` (jika perlu)
- [ ] Komponen digunakan di `page.tsx`
- [ ] ID section sesuai dengan href di navbar
- [ ] Styling konsisten dengan section lain
- [ ] Responsive di mobile, tablet, desktop
- [ ] No TypeScript errors
- [ ] Tested di browser

## Tips

1. **Gunakan TypeScript** - Selalu define types untuk props
2. **Responsive First** - Test di mobile terlebih dahulu
3. **Consistent Spacing** - Gunakan py-16 untuk vertical spacing
4. **Reusable** - Buat komponen yang bisa digunakan ulang
5. **Props Over Hardcode** - Jangan hardcode data, gunakan props
6. **Semantic HTML** - Gunakan tag HTML yang sesuai (section, article, etc)

## Troubleshooting

### Error: Cannot find module

```bash
# Pastikan import path benar
import ContactSection from "@/components/ContactSection";
```

### Section tidak muncul

- Check apakah komponen di-import di page.tsx
- Check apakah komponen di-render dalam return statement

### Styling tidak apply

- Check class name typo
- Restart dev server: `npm run dev`

### Menu tidak scroll ke section

- Pastikan ID section sama dengan href di navbar
- Example: `id="contact"` dan `href="#contact"`
