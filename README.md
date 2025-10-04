# Gustavo Tejeda

A modern, responsive portfolio website built with Next.js 15, showcasing my journey and expertise in DevOps, Cloud Engineering, and Site Reliability Engineering.

## 🚀 Live Demo

Visit the live portfolio: [https://gtejeda.vercel.app/] 

## 👨‍💻 About

I'm a Cloud & DevOps Engineer with proven experience automating scalable infrastructure and enhancing security posture in cloud-native environments. Skilled in Docker, AWS, Python, and incident response, with a track record of improving deployment speed, system reliability, and compliance with PCI-DSS and ISO standards.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables for theming
- **UI Components**: Radix UI primitives, Lucide React icons
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Animations**: Tailwind CSS animations
- **Package Manager**: pnpm
- **Deployment**: Vercel (with Vercel Analytics)

## 📋 Features

- 🌙 **Dark/Light Theme Toggle**: Built with next-themes
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🚀 **Performance Optimized**: Next.js 15 with app router
- 📧 **Contact Form**: Integrated contact functionality
- 📊 **Analytics**: Vercel Analytics integration
- ♿ **Accessibility**: ARIA compliant with screen reader support

## 🏗️ Project Structure

```
devops-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix-based)
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Featured projects
│   ├── theme-provider.tsx # Theme context provider
│   └── ...               # Other page sections
├── styles/               # Additional stylesheets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghostgto/devops-portfolio.git
   cd devops-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the portfolio.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Featured Projects

The portfolio showcases various DevOps and Cloud Engineering projects:

- **DevOps Journey** - Comprehensive learning path with practical implementations
- **Jenkins GitOps with Kubernetes** - Complete GitOps pipeline with Helm charts
- **Spring Boot on Kubernetes** - Production-ready microservices deployment
- **GitOps Certification Examples** - ArgoCD and Flux implementations
- **90 Days DevOps Challenge** - Various DevOps practice projects

## 🎨 Customization

### Theme Configuration

The portfolio uses a CSS variable-based theming system. You can customize colors in:

- `app/globals.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind color configuration

### Content Updates

- **Personal Information**: Update `components/hero.tsx`
- **Projects**: Modify the projects array in `components/projects.tsx`
- **Skills & Experience**: Update respective component files
- **Contact Information**: Update contact details in relevant components

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 🔧 Performance Features

- **App Router**: Latest Next.js routing system
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size

## 📊 Analytics

Vercel Analytics is integrated for performance monitoring and user insights.

## 🤝 Connect With Me

- 📧 **Email**: [gustavo.t138@gmail.com](mailto:gustavo.t138@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/gustavo-tejedac](https://linkedin.com/in/gustavo-tejedac)
- 🐱 **GitHub**: [github.com/ghostgto](https://github.com/ghostgto)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
