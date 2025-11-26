# Footer & Blog Carousel Documentation

## Komponen Baru

### 1. Footer Component (`src/components/Footer.tsx`)

Footer yang dibuat sesuai dengan style UI website Anda:

#### Fitur:

- ✅ Dominan putih dengan soft shadow
- ✅ Border-radius: `rounded-3xl`
- ✅ Spacing yang longgar dan tipografi minimalis
- ✅ Logo dan deskripsi brand
- ✅ Social media icons menggunakan `lucide-react`:
  - Twitter
  - Instagram
  - LinkedIn
  - GitHub
- ✅ 3 kolom navigasi:
  - **Product**: Features, Pricing, Integrations, Changelog
  - **Resources**: Documentation, Tutorials, Blog, Support
  - **Company**: About, Careers, Contact, Partners
- ✅ Copyright © 2025 Robotika Polibatam
- ✅ Legal links: Privacy Policy – Terms of Service – Cookies Settings
- ✅ Fully responsive

#### Warna yang Digunakan:

- Background: `bg-white`
- Text primary: `text-polibatam-navy`
- Text secondary: `text-gray-600`
- Hover color: `hover:text-polibatam-orange`
- Social icon backgrounds: `bg-polibatam-light` → `hover:bg-polibatam-peach`

---

### 2. Blog Carousel Component (`src/components/BlogCarousel.tsx`)

Carousel blog dengan auto-slide untuk menggantikan section "Ready to transform your data?".

#### Fitur:

- ✅ Container besar dengan `rounded-3xl`
- ✅ Gradient background: `bg-linear-to-b from-white via-polibatam-light/30 to-white`
- ✅ Gradient dekoratif dalam card: `bg-linear-to-br from-polibatam-light/50 via-transparent to-polibatam-peach/30`
- ✅ Auto-slide setiap 5 detik
- ✅ Navigasi kiri/kanan (desktop & mobile)
- ✅ Pagination dots (indicator slide)
- ✅ Card blog minimalis dengan:
  - Category badge
  - Title (bold, 2xl-4xl)
  - Excerpt (1-2 kalimat)
  - Tombol "Read more" dengan arrow icon
- ✅ Dummy data siap koneksi backend
- ✅ Fully responsive

#### Warna yang Digunakan:

- Section background: `bg-linear-to-b from-white via-polibatam-light/30 to-white`
- Card container: `bg-white` dengan `shadow-lg`
- Heading: `text-polibatam-navy`
- Category badge: `bg-polibatam-peach` + `text-polibatam-orange`
- Button: `bg-polibatam-orange` → `hover:bg-polibatam-navy`
- Navigation buttons: `bg-white` dengan `hover:bg-polibatam-light`

#### Data Structure:

```typescript
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
}
```

---

## Cara Menggunakan

### Import Komponen

```typescript
import BlogCarousel from "@/components/BlogCarousel";
import Footer from "@/components/Footer";

// Atau gunakan named import dari index.ts:
import { BlogCarousel, Footer } from "@/components";
```

### Implementasi di Page

```tsx
export default function Home() {
  return (
    <div>
      {/* ... komponen lainnya ... */}

      <AlumniSection />

      {/* Blog Carousel - sebelum Footer */}
      <BlogCarousel />

      {/* Footer - paling bawah */}
      <Footer />
    </div>
  );
}
```

---

## Technical Stack

- **Framework**: Next.js 16 (dengan Turbopack)
- **Styling**: Tailwind CSS v4
- **Icons**: `lucide-react` (Twitter, Instagram, Linkedin, Github, ChevronLeft, ChevronRight, ArrowRight)
- **Color Palette**: Polibatam theme
  - Orange: `#EB6D11`
  - Peach: `#FDD7BB`
  - Light: `#F9ECE3`
  - Navy: `#1E293B`

---

## Konsistensi Design

✅ **Tidak ada warna baru** - semua warna mengikuti palette Polibatam yang sudah ada
✅ **Typography konsisten** - font weight, size, dan spacing sesuai komponen lainnya
✅ **Gradient pattern** - menggunakan pattern yang sama dengan AboutSection dan CurriculumSection
✅ **Spacing longgar** - padding dan margin yang generous untuk tampilan clean
✅ **Rounded corners** - konsisten menggunakan `rounded-3xl` untuk container utama
✅ **Soft shadows** - `shadow-lg` untuk depth yang subtle

---

## Customization

### Mengubah Blog Data

Edit array `blogPosts` di `src/components/BlogCarousel.tsx`:

```typescript
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Your Blog Title",
    excerpt: "Short description...",
    slug: "your-blog-slug",
    category: "Your Category",
  },
  // ... tambahkan lebih banyak
];
```

### Mengubah Navigation Links di Footer

Edit object `navigation` di `src/components/Footer.tsx`:

```typescript
const navigation = {
  product: [
    { name: "Your Link", href: "/your-path" },
    // ...
  ],
  // ...
};
```

### Mengubah Auto-slide Duration

Di `BlogCarousel.tsx`, ubah nilai timeout di `useEffect`:

```typescript
const interval = setInterval(() => {
  setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
}, 5000); // Ubah 5000 (5 detik) sesuai kebutuhan
```

---

## Status

✅ Footer Component - **Complete**
✅ Blog Carousel Component - **Complete**
✅ Responsive Design - **Complete**
✅ Color Consistency - **Complete**
✅ Icon Integration (lucide-react) - **Complete**
✅ Auto-slide Functionality - **Complete**
✅ Export to index.ts - **Complete**
✅ Integration to page.tsx - **Complete**

---

_Dibuat tanggal: 27 November 2025_
