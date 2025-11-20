# Flowbite Integration Guide

## 📋 Overview

This project now uses **Flowbite** design system with Tailwind CSS to create a modern, professional, and consistent UI for the Polibatam Robotics website.

## 🎨 What is Flowbite?

Flowbite is an open-source library of interactive UI components built with Tailwind CSS. It provides:

- Production-ready components
- Consistent design patterns
- Responsive layouts
- Dark mode support
- Accessibility features

## 📦 Installed Packages

```bash
npm install flowbite flowbite-react react-icons
```

**Dependencies:**

- `flowbite` - Core Flowbite library with Tailwind CSS plugin
- `flowbite-react` - React components for Flowbite
- `react-icons` - Icon library (includes Hero Icons, Bootstrap Icons, etc.)

## 🏗️ Updated Components

### 1. **Navbar Component**

- Responsive navigation bar with mobile menu toggle
- Blue theme (`bg-blue-600`)
- Hamburger menu for mobile devices
- Smooth scroll navigation

**Features:**

- Mobile-responsive with toggle button
- Clean and modern design
- Accessibility features (sr-only labels)

### 2. **HeroSection Component**

- Gradient background (blue gradient)
- Call-to-action buttons
- Responsive typography
- Centered layout

**Features:**

- Large hero text with gradient background
- Two CTA buttons (Learn More, View Curriculum)
- Fully responsive design

### 3. **Card-based Sections**

All content sections now use Flowbite Card components:

#### CurriculumSection

- Grid layout (3 columns on large screens)
- Card components for each course
- Icon integration (HiAcademicCap, HiClock)

#### FacilitiesSection

- 2-column grid layout
- Clean card design
- Icon integration (HiOfficeBuilding)

#### FacultyMembersSection

- 4-column grid on large screens
- Avatar placeholders
- Card-based layout
- Icon integration (HiUserGroup)

#### StudentsSection

- 3-column grid layout
- Badge component for total students count
- Blue left border accent
- Icon integration (HiUsers)

#### AlumniSection

- 2-column grid layout
- Badge component for graduation year
- Success stories showcase
- Icon integration (HiStar)

#### AboutSection

- Single card layout
- Centered content
- Clean typography
- Icon integration (HiInformationCircle)

### 4. **Footer Component**

- Three-column layout
- Social media icons
- Quick links
- Copyright information

**Features:**

- Social media integration (Facebook, Instagram, Twitter, GitHub)
- Responsive grid layout
- Dark theme (`bg-gray-800`)

## 🎯 Design System

### Color Palette

**Primary Colors:**

- Blue: `blue-600`, `blue-700`, `blue-800`
- Gray: `gray-50`, `gray-400`, `gray-700`, `gray-800`
- White: `white`

**Accent Colors:**

- Success: `green` (for badges)
- Info: `blue` (for links and accents)

### Typography

**Headings:**

- H1: `text-4xl` to `text-6xl` - Hero sections
- H2: `text-4xl` - Section titles
- H3: `text-2xl` - Card titles
- H5: `text-xl` - Sub-headings

**Body Text:**

- Regular: `text-base`, `text-lg`
- Small: `text-sm`

### Spacing

- Sections: `py-16` (vertical padding)
- Cards: `p-6`, `p-8`
- Gaps: `gap-6`, `gap-8`

## 🔧 Configuration

### Tailwind Config

The project uses a custom `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
```

**Important:** The `content` array includes `flowbite-react` to ensure all Flowbite classes are available.

## 🚀 Usage Examples

### Using Card Component

```tsx
import { Card } from "flowbite-react";

<Card className="max-w-sm">
  <h5 className="text-2xl font-bold">Title</h5>
  <p className="text-gray-700">Content goes here</p>
</Card>;
```

### Using Badge Component

```tsx
import { Badge } from "flowbite-react";

<Badge color="info">Badge Text</Badge>;
```

### Using Avatar Component

```tsx
import { Avatar } from "flowbite-react";

<Avatar img="/path/to/image.jpg" rounded size="lg" />;
```

### Using Icons

```tsx
import { HiAcademicCap } from "react-icons/hi";

<HiAcademicCap className="h-10 w-10" />;
```

## 📱 Responsive Design

All components are fully responsive with breakpoints:

- **Mobile**: Default styles
- **Tablet** (`md:`): 768px and up
- **Desktop** (`lg:`): 1024px and up

Example:

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

## 🎨 Customization

### Changing Colors

To change the primary color scheme, update the Tailwind classes:

```tsx
// From blue to purple
className="bg-blue-600" → className="bg-purple-600"
```

### Adding New Components

1. Import necessary Flowbite components
2. Use Tailwind utility classes for styling
3. Follow the existing component structure

## 🔍 Component Props

### HeroSection

```typescript
interface HeroSectionProps {
  title: string;
  subtitle?: string;
}
```

### CurriculumSection

```typescript
interface CurriculumSectionProps {
  courses: Course[];
}
```

### StudentsSection

```typescript
interface StudentsSectionProps {
  students: Student[];
  totalStudents?: number;
}
```

## 📚 Resources

- [Flowbite Documentation](https://flowbite.com/)
- [Flowbite React Documentation](https://flowbite-react.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)

## 🐛 Troubleshooting

### Styles not applying?

1. Check if Flowbite plugin is added to `tailwind.config.js`
2. Ensure `flowbite-react` is in the content paths
3. Restart the development server

### Icons not showing?

1. Verify `react-icons` is installed
2. Check the correct import path (e.g., `react-icons/hi` for Hero Icons)

### Components not rendering?

1. Ensure all components have `'use client'` directive
2. Check for TypeScript errors
3. Verify all props are passed correctly

## ✅ Best Practices

1. **Use semantic HTML**: Proper section, header, footer tags
2. **Maintain consistency**: Use the same color scheme and spacing
3. **Responsive first**: Always test on mobile devices
4. **Accessibility**: Include aria-labels and sr-only text
5. **Type safety**: Use TypeScript interfaces for all props

## 📝 Next Steps

To further enhance the website:

1. Add images to Card components
2. Implement dark mode toggle
3. Add animations and transitions
4. Create more interactive components
5. Add form components (contact forms, etc.)

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Framework**: Next.js 16 with React 19  
**UI Library**: Flowbite + Tailwind CSS
