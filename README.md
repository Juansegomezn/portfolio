# 👨‍💼 Juan Gomez | Professional Portfolio

High-performance personal showcase engineered for scalability and modern web standards. A contemporary portfolio application built with React 19 and Vite 7, featuring glassmorphism UI patterns, responsive engineering, and automated email integration for seamless contact management.

---

## 🎯 Project Overview

This portfolio demonstrates advanced front-end architecture with contemporary design principles, performance optimization, and professional engineering practices. The application features a modular component structure, responsive breakpoints for all devices, and a serverless contact system powered by EmailJS. Built as a production-ready showcase of modern web development capabilities.

**Status:** Production-Ready | **Architecture:** Single-Page Application (SPA) with Modular Component Structure

---

## ✨ Features

### Visual Design & User Experience
- 🎨 **Glassmorphism UI** - Modern frosted glass aesthetic with advanced CSS backdrop filters
- 📱 **Fully Responsive** - Optimized layouts for mobile, tablet, and desktop devices
- ⚡ **Fluid Animations** - Smooth transitions and interactive micro-interactions
- 🎯 **Performance Optimized** - Lazy loading, code splitting, and efficient bundle management

### Professional Showcase Components
- 🦸 **Hero Section** - Compelling introduction with call-to-action elements
- 👤 **About Section** - Professional background and core competencies
- 💼 **Experience Timeline** - Career progression and professional achievements
- 🚀 **Projects Portfolio** - Curated project showcase with detailed descriptions
- 💬 **Testimonials Section** - Social proof from colleagues and clients
- 📞 **Contact System** - Serverless email integration with form validation

### Technical Excellence
- ⚙️ **Modern Tooling** - Vite 7 for lightning-fast development and HMR
- 🎨 **Advanced Styling** - Tailwind CSS 4 with utility-first architecture
- 🔧 **Code Quality** - ESLint configuration for consistent code standards
- 📦 **Efficient Icons** - Lucide React for lightweight, scalable SVG icons
- 🔐 **Environment Safety** - Secure credential management via environment variables

---

## 🛠️ Tech Stack

### Core Framework & Build Tools
- **Framework:** React 19 - Advanced hooks and concurrent rendering
- **Build Tool:** Vite 7 - Next-generation frontend tooling with instant HMR

### Styling & Design System
- **CSS Framework:** Tailwind CSS 4 with @tailwindcss/vite plugin
- **PostCSS:** Integrated for advanced CSS transformations
- **Design Pattern:** Utility-first responsive design with mobile-first approach

### UI & Iconography
- **Icon Library:** Lucide React - Lightweight, performant SVG icons
- **Components:** Modular, reusable React components with composition patterns

### Email & Integrations
- **Email Service:** EmailJS - Serverless email delivery without backend infrastructure
- **Form Handling:** Client-side validation with EmailJS integration

### Development Environment
- **Linter:** ESLint 9 with React plugin configuration
- **Package Manager:** npm with lock file for reproducible builds
- **Code Formatter:** Prettier (integrated)
- **Version Control:** Git for source code management

---

## 📁 Component Architecture

```
portfolio/
├── src/
│   ├── components/           # Reusable UI Components
│   │   ├── AnimatedBorderButton.jsx    # Custom button with animation
│   │   └── Button.jsx                  # Standard button component
│   │
│   ├── layout/               # Page Layout Components
│   │   ├── Navbar.jsx        # Navigation header
│   │   └── Footer.jsx        # Footer section
│   │
│   ├── sections/             # Full-page Section Components
│   │   ├── Hero.jsx          # Hero introduction section
│   │   ├── About.jsx         # Professional background
│   │   ├── Experience.jsx    # Career timeline
│   │   ├── Projects.jsx      # Portfolio showcase
│   │   ├── Testimonials.jsx  # Social proof / testimonials
│   │   └── Contact.jsx       # Contact form with EmailJS
│   │
│   ├── App.jsx               # Root application component
│   ├── main.jsx              # React DOM entry point
│   ├── index.css             # Global styles
│   │
├── public/                   # Static assets
│   └── projects/             # Project showcase media
│
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint ruleset
```

---

## � Environment Configuration

### Required Environment Variables

Create a `.env.local` file in the root directory with the following credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Obtaining EmailJS Credentials

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an Email Service** - Connect your preferred email provider
3. **Create an Email Template** - Design your contact form template
4. **Get API Keys** - Copy Service ID, Template ID, and Public Key
5. **Add to `.env.local`** - Populate the environment file with your credentials

### Security Best Practices

- ✅ **Never commit `.env.local`** - Add to `.gitignore` (already configured)
- ✅ **Use VITE_ prefix** - Variables become available in browser at build time
- ✅ **Regenerate keys periodically** - Rotate for security
- ✅ **Monitor EmailJS dashboard** - Track email delivery and failures

---

## 🚀 Installation & Setup

### Prerequisites
- npm v8 or higher
- Git
- EmailJS account (free tier available)

### Quick Start

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Juansegomezn/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_PUBLIC_KEY=your_public_key
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

5. **Build for Production:**
   ```bash
   npm run build
   ```
   Optimized production build will be generated in the `dist/` directory
---

## ⚡ Performance & Optimization

- ✅ **Code Splitting** - Automatic chunk splitting for optimal bundle sizes
- ✅ **Tree Shaking** - Unused code elimination for leaner production builds
- ✅ **Asset Optimization** - Images and static files are minified and cached
- ✅ **CSS Purging** - Tailwind CSS removes unused styles from production
- ✅ **Lazy Loading** - Components load on-demand to reduce initial bundle
- ✅ **Client-Side Rendering** - Optimized SPA architecture for fast interactions

---

## 🔄 Application Flow

1. **Hero Section** - Visitor lands on compelling introduction
2. **About Section** - Learn professional background and skills
3. **Experience Timeline** - Review career progression
4. **Projects Portfolio** - Explore featured work and case studies
5. **Testimonials** - Read feedback from collaborators
6. **Contact Form** - Send message via EmailJS integration

---

## � Responsive Breakpoints

The application is optimized for all device sizes:

```css
/* Mobile First Approach */
Mobile:     < 640px  (sm:)
Tablet:     640px    (md:)  - 1024px
Desktop:    1024px   (lg:)
Large:      1280px+  (xl:)
```

Each section is crafted with responsive utilities to ensure optimal viewing experience across all breakpoints.

---


## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute this portfolio template.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact & Support

For questions, suggestions, or collaboration opportunities:

- **GitHub:** [@Juansegomezn](https://github.com/Juansegomezn)
- **Portfolio:** Visit the live site for more details
- **Email:** Use the contact form on the portfolio

---

<div align="center">

**Made by Juan Sebastian Gomez Ayala**

High-performance web applications & modern portfolio solutions

</div>