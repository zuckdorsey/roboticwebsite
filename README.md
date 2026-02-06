# Robotics Technology Website - Polibatam

## Struktur Project

```
roboticwebsite/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
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
│   └── types/
│       └── index.ts          # TypeScript interfaces
├── public/                   # Static files
├── COMPONENTS.md             # Dokumentasi komponen
├── STRUCTURE.md              # Dokumentasi struktur
└── README.md                 # File ini
```

## Cara Development

### Prerequisites

- Node.js 20+
- npm atau yarn

### Installation & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Command Lainnya

```bash
# Build untuk production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```
