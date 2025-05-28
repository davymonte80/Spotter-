# Spotter.ai 🔍

> AI-Powered Analytics Platform transforming data into actionable insights inspired by fingerprint.com

## ✨ Features

- **AI-powered analytics dashboard**
- **Interactive data visualization**
- **Custom insights and reporting**
- **Responsive design** with Tailwind CSS
- **Modern UI** with animations and glass effects

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework
- **[React 19](https://reactjs.org/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or later)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/spotter.git
   cd spotter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
spotter/
├── app/             # Next.js App Router pages and layouts
├── components/      # Reusable React components
│   ├── sections/    # Main page sections
│   ├── layout/      # Layout components
│   └── ui/          # UI components
├── lib/             # Utility functions and shared code
└── public/          # Static assets
```

## 📦 Building and Deployment

### Build for Production

```bash
npm run build
```

### Run Production Build Locally

```bash
npm run dev
```

### Deployment

The application is configured for easy deployment on [Vercel](https://vercel.com). Connect your repository to Vercel for automatic deployments on push.

## 🎨 Customization

- Global styling can be modified in `globals.css`
- Main page content is located in `page.tsx`
- Site metadata and layout are defined in `layout.tsx`

## 📄 License

MIT

## 👨‍💻 Author

David Monte
