# 🚀 Devansh Khatri - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing my skills, projects, and experience as a Full-Stack Developer.

## 🌐 Live Demo

[**View Live Portfolio**](https://your-netlify-url.netlify.app) *(Replace with your actual Netlify URL)*

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Contact Form**: Powered by Netlify Forms for direct email communication
- **Skills Showcase**: Comprehensive display of technical proficiencies
- **Project Portfolio**: Detailed project cards with live demos and GitHub links
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms

### Deployment & Backend
- **Hosting**: Netlify
- **Forms**: Netlify Forms
- **CI/CD**: Automatic deployments from GitHub

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devansh054/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Contact.tsx       # Contact form component
│   ├── Skills.tsx        # Skills section
│   └── Projects.tsx      # Projects showcase
├── public/               # Static assets
│   ├── images/          # Project images
│   └── resume.pdf       # Downloadable resume
├── styles/              # Additional stylesheets
└── README.md           # Project documentation
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/Contact.tsx` - Contact details and email
- `components/Skills.tsx` - Your technical skills
- `components/Projects.tsx` - Your project portfolio
- `app/layout.tsx` - Meta tags and site title

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Typography**: Update font configurations in `app/layout.tsx`
- **Components**: Customize shadcn/ui components in `components/ui/`

## 📧 Contact Form Setup

The contact form uses Netlify Forms for seamless email delivery:

1. **Deploy to Netlify** (automatic via GitHub integration)
2. **Configure form notifications**:
   - Go to Netlify Dashboard → Forms
   - Add email notifications to receive messages
3. **Enable spam protection** (optional but recommended)

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect GitHub repository**
   - Link your GitHub account to Netlify
   - Import your portfolio repository

2. **Configure build settings**
   ```
   Build command: npm run build
   Publish directory: out
   ```

3. **Environment Variables** (if needed)
   - Add any required environment variables in Netlify dashboard

4. **Custom Domain** (optional)
   - Configure custom domain in Site Settings → Domain Management

### Alternative Deployment Options

- **Vercel**: Optimized for Next.js applications
- **GitHub Pages**: For static exports
- **AWS Amplify**: Full-stack deployment with additional AWS services

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm Devansh Khatri, a passionate Full-Stack Developer from Ontario, Canada. I specialize in building modern web applications with a focus on user experience and performance.

### 🛠️ Skills
- **Frontend**: JavaScript, TypeScript, React.js, HTML/CSS, Tailwind CSS
- **Backend**: Java, Python, Node.js, PHP, Laravel, Express.js
- **Database**: MySQL, PostgreSQL, DynamoDB, MongoDB, Redis
- **Cloud & DevOps**: AWS, GitHub Actions, Travis-CI, Docker, CI/CD
- **Tools**: Git, Agile, Scrum, JIRA, Figma

### 📫 Let's Connect!
- **Email**: [ddevansh@uoguelph.ca](mailto:ddevansh@uoguelph.ca)
- **LinkedIn**: [devansh-khatri-aaa7832bb](https://linkedin.com/in/devansh-khatri-aaa7832bb)
- **GitHub**: [devansh054](https://github.com/devansh054)

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**

*Last updated: August 2025*
