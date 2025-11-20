# Quick Reference - Robotics Website Components

## 📂 File Locations

| Component  | File Path                                  | Section ID    |
| ---------- | ------------------------------------------ | ------------- |
| Navbar     | `src/components/Navbar.tsx`                | -             |
| Hero       | `src/components/HeroSection.tsx`           | `#home`       |
| About      | `src/components/AboutSection.tsx`          | `#about`      |
| Curriculum | `src/components/CurriculumSection.tsx`     | `#curriculum` |
| Facilities | `src/components/FacilitiesSection.tsx`     | `#facilities` |
| Faculty    | `src/components/FacultyMembersSection.tsx` | `#faculty`    |
| Students   | `src/components/StudentsSection.tsx`       | `#students`   |
| Alumni     | `src/components/AlumniSection.tsx`         | `#alumni`     |
| Footer     | `src/components/Footer.tsx`                | -             |

## 🎯 Props Quick Reference

### HeroSection

```tsx
<HeroSection title="string (required)" subtitle="string (optional)" />
```

### AboutSection

```tsx
<AboutSection description="string (required)" />
```

### CurriculumSection

```tsx
<CurriculumSection
  courses={[{ title: string, description: string, duration: string }]}
/>
```

### FacilitiesSection

```tsx
<FacilitiesSection
  facilities={[{ name: string, description: string, image: string }]}
/>
```

### FacultyMembersSection

```tsx
<FacultyMembersSection
  members={[
    { name: string, position: string, expertise: string, image: string },
  ]}
/>
```

### StudentsSection

```tsx
<StudentsSection
  students={[{ name: string, year: string, program: string }]}
  totalStudents={number(optional)}
/>
```

### AlumniSection

```tsx
<AlumniSection
  alumni={[
    {
      name: string,
      graduationYear: string,
      currentPosition: string,
      company: string,
    },
  ]}
/>
```

## 🎨 Common Tailwind Classes

### Container

```tsx
className = "max-w-7xl mx-auto px-6 py-16";
```

### Section Background

```tsx
className = "bg-white"; // Even sections
className = "bg-gray-50"; // Odd sections (default)
```

### Heading

```tsx
className = "text-4xl md:text-5xl font-bold mb-12 text-center";
```

### Grid

```tsx
className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8";
```

### Card

```tsx
className =
  "bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow";
```

### Button

```tsx
className =
  "px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors";
```

## 🔧 Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Production
npm start
```

## 📝 Edit Checklist

### Menambah Data

1. ✅ Edit `src/app/page.tsx`
2. ✅ Tambah data di array yang sesuai
3. ✅ Save & refresh browser

### Menambah Menu

1. ✅ Edit `src/components/Navbar.tsx`
2. ✅ Tambah item di `menuItems` array
3. ✅ Save & refresh browser

### Menambah Section

1. ✅ Buat file di `src/components/`
2. ✅ Export di `src/components/index.ts`
3. ✅ Import di `src/app/page.tsx`
4. ✅ Render di return statement

## 🎯 Color Palette

```css
/* Primary */
orange-500: #f97316
orange-600: #ea580c

/* Backgrounds */
gray-50: #f9fafb
gray-100: #f3f4f6

/* Text */
gray-600: #4b5563
gray-900: #111827

/* Borders */
gray-200: #e5e7eb
```

## 📱 Breakpoints

```
sm: 640px   - Small devices
md: 768px   - Medium devices (tablets)
lg: 1024px  - Large devices (desktops)
xl: 1280px  - Extra large devices
```

## 🔗 Important Links

- Main Page: `src/app/page.tsx`
- Components: `src/components/`
- Types: `src/types/index.ts`
- Styles: `src/app/globals.css`

## 📚 Documentation Files

- `README.md` - Main documentation
- `COMPONENTS.md` - Component API reference
- `STRUCTURE.md` - Project structure
- `TUTORIAL.md` - How to add new sections
- `QUICK-REFERENCE.md` - This file

## 🆘 Need Help?

1. Check `TUTORIAL.md` for step-by-step guides
2. Check `COMPONENTS.md` for component props
3. Check `STRUCTURE.md` for architecture overview
4. Check browser console for errors
5. Run `npm run lint` to check code quality

## ⚡ Pro Tips

1. **Use Barrel Export**: Import multiple components from one file

   ```tsx
   import { Navbar, HeroSection, Footer } from "@/components";
   ```

2. **TypeScript Autocomplete**: Use Ctrl+Space for suggestions

3. **Hot Reload**: Save file to see changes instantly

4. **Responsive Design**: Test with browser DevTools mobile view

5. **Component Reusability**: Same component, different data
