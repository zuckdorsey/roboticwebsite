# Robotics Website Components

Website ini telah dipecah menjadi komponen-komponen modular yang mudah di-maintenance.

## 📁 Struktur Komponen

### 1. **Navbar.tsx**

Navigation bar dengan menu sesuai gambar yang diberikan.

- Menu: HOME, ABOUT, CURRICULUM, FACILITIES, FACULTY MEMBERS, STUDENTS, ALUMNI
- Responsive design
- Smooth scroll ke section

**Props:** Tidak ada (menu hardcoded)

**Usage:**

```tsx
import Navbar from "@/components/Navbar";

<Navbar />;
```

---

### 2. **HeroSection.tsx**

Section hero/landing page dengan judul besar dan ilustrasi.

**Props:**

- `title` (string, required): Judul utama
- `subtitle` (string, optional): Subtitle di atas judul

**Usage:**

```tsx
<HeroSection
  title="Learn Robotics Technology in Polibatam"
  subtitle="Future of Innovation"
/>
```

---

### 3. **AboutSection.tsx**

Section tentang program robotik.

**Props:**

- `description` (string, required): Deskripsi program

**Usage:**

```tsx
<AboutSection description="Program deskripsi di sini..." />
```

---

### 4. **CurriculumSection.tsx**

Menampilkan daftar mata kuliah/kurikulum dalam grid.

**Props:**

- `courses` (Course[], required): Array of courses
  - `title` (string): Nama mata kuliah
  - `description` (string): Deskripsi mata kuliah
  - `duration` (string, optional): Durasi/semester

**Usage:**

```tsx
const courses = [
  {
    title: "Introduction to Robotics",
    description: "Learn fundamentals...",
    duration: "Semester 1-2",
  },
];

<CurriculumSection courses={courses} />;
```

---

### 5. **FacilitiesSection.tsx**

Menampilkan fasilitas yang tersedia.

**Props:**

- `facilities` (Facility[], required): Array of facilities
  - `name` (string): Nama fasilitas
  - `description` (string): Deskripsi fasilitas
  - `image` (string, optional): URL gambar

**Usage:**

```tsx
const facilities = [
  {
    name: "Robotics Laboratory",
    description: "State-of-the-art lab...",
  },
];

<FacilitiesSection facilities={facilities} />;
```

---

### 6. **FacultyMembersSection.tsx**

Menampilkan daftar dosen/pengajar.

**Props:**

- `members` (FacultyMember[], required): Array of faculty members
  - `name` (string): Nama dosen
  - `position` (string): Jabatan
  - `expertise` (string): Keahlian
  - `image` (string, optional): URL foto

**Usage:**

```tsx
const members = [
  {
    name: "Dr. Ahmad Rizki",
    position: "Head of Program",
    expertise: "Autonomous Systems",
  },
];

<FacultyMembersSection members={members} />;
```

---

### 7. **StudentsSection.tsx**

Menampilkan daftar mahasiswa aktif.

**Props:**

- `students` (Student[], required): Array of students
  - `name` (string): Nama mahasiswa
  - `year` (string): Tahun masuk
  - `program` (string): Program studi
- `totalStudents` (number, optional): Total jumlah mahasiswa

**Usage:**

```tsx
const students = [
  {
    name: "Andi Pratama",
    year: "2023",
    program: "Robotics Technology",
  },
];

<StudentsSection students={students} totalStudents={150} />;
```

---

### 8. **AlumniSection.tsx**

Menampilkan daftar alumni yang sukses.

**Props:**

- `alumni` (Alumni[], required): Array of alumni
  - `name` (string): Nama alumni
  - `graduationYear` (string): Tahun lulus
  - `currentPosition` (string): Posisi saat ini
  - `company` (string, optional): Perusahaan tempat bekerja

**Usage:**

```tsx
const alumni = [
  {
    name: "Dedi Setiawan",
    graduationYear: "2020",
    currentPosition: "Robotics Engineer",
    company: "Tech Robotics Indonesia",
  },
];

<AlumniSection alumni={alumni} />;
```

---

### 9. **Footer.tsx**

Footer website dengan informasi kontak dan social media.

**Props:** Tidak ada

**Usage:**

```tsx
<Footer />
```

---

## 🎨 Styling

Semua komponen menggunakan **Tailwind CSS** untuk styling dengan tema:

- Primary color: Orange (#f97316)
- Secondary color: Blue
- Background: Gray-50
- Cards: White dengan shadow

## 🔧 Cara Menggunakan

1. Import komponen yang dibutuhkan:

```tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// ... dst
```

2. Susun komponen di page.tsx:

```tsx
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection title="..." />
      <AboutSection description="..." />
      {/* ... section lainnya */}
      <Footer />
    </div>
  );
}
```

3. Update data sesuai kebutuhan di dalam page.tsx

## 📝 Maintenance Tips

- **Update Menu**: Edit `Navbar.tsx` untuk menambah/mengubah menu
- **Update Content**: Edit data di `page.tsx` untuk mengubah konten
- **Update Styling**: Semua styling ada di setiap komponen menggunakan Tailwind
- **Add New Section**: Buat komponen baru di `/components` dan import di `page.tsx`

## 🚀 Development

```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`
