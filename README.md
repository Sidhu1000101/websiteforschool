# ZPHS CHINAGANJAM - School Website

A modern, responsive website for Zilla Parishad High School Chinaganjam, Bapatla District, Andhra Pradesh.

## Features

- **Modern Design**: Clean, professional government school website
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized for performance with no heavy animations
- **Accessible**: Semantic HTML and proper heading hierarchy
- **SEO Friendly**: Proper metadata and Open Graph tags

## Pages

- **Home**: Hero section, school introduction, principal's message, vision & mission, highlights, statistics, facilities preview, announcements, gallery preview
- **About**: History, vision, mission, values, school information, affiliation, staff count, student strength, school timings
- **Facilities**: Smart Classrooms, Science Lab, Computer Lab, Library, Playground, Drinking Water, Mid-Day Meal, Digital Learning
- **Gallery**: Responsive image grid with placeholder images
- **Announcements**: Display announcement cards for admissions, holidays, exams, meetings
- **Academics**: Classes offered, subjects, academic calendar, examinations, achievements
- **Contact**: Contact information, Google Maps placeholder, contact form
- **404**: Custom not found page

## Technology Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel without any modifications:

1. Push the code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
zphs-chinaganjam/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── academics/
│   │   └── page.tsx
│   ├── announcements/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── facilities/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── Card.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── SectionTitle.tsx
├── public/
│   └── robots.txt
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Colors

The primary color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Customize these values
    50: '#eff6ff',
    // ... other shades
  },
}
```

### Content

All page content is in the respective page files in the `app/` directory. Simply edit the text to update the content.

### Images

Replace placeholder images in the `public/` folder with actual school images.

## Future Scope

The architecture is designed to be scalable for future enhancements:

- Backend API integration for dynamic content
- Authentication system for admin panel
- Database for announcements and news
- Student portal
- Parent portal
- Online admission system
- Exam results portal

## License

This project is for ZPHS Chinaganjam school use.

## Support

For any questions or support, please contact the school administration.
