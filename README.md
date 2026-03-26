# NeoScratch Tech Platform

**NeoScratch** is a Rwanda-based software development, graphic design, and networking solutions company. This repository contains the source code for the official NeoScratch web platform, built with modern frontend technologies to ensure a fast, reliable, and premium user experience.

![NeoScratch](/public/neoscratch.png)

## 🚀 Tech Stack

- **Framework**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) (shadcn/ui)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v18.0.0` or higher
- **npm** or **yarn** or **pnpm** (npm is recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/neoscratch.git
   cd neoscratch
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and configure it mapping any necessary keys.
   *(Note: `.env` is intentionally ignored by git to protect sensitive keys)*

   ```bash
   touch .env
   # Add your specific variables inside .env
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be running locally at `http://localhost:5173`. 


---

## 📁 Project Structure

```text
├── public/              # Static assets (images, logos, robots.txt)
├── src/
│   ├── assets/          # Project specific images/icons
│   ├── components/      # Reusable React components (UI library, Layouts)
│   ├── contexts/        # React Context providers (ThemeContext)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility library functions and third-party setups
│   ├── pages/           # Application views (Home, About, Projects, etc)
│   ├── index.css        # Global stylesheet and Tailwind Base (Apple-style theme)
│   ├── App.tsx          # Main application routing tree
│   └── main.tsx         # Entry point
├── tailwind.config.ts   # Tailwind configuration
└── vite.config.ts       # Vite bundler configuration
```

## 🎨 Theme & Styling

The project features a **custom premium UI design** mimicking modern Apple-like aesthetics with bright orange/peach gradients.
- **index.css**: Contains all the global CSS variables and specific keyframe animations mimicking `cubic-bezier(0.16, 1, 0.3, 1)` easing.
- **Tailwind**: Used heavily across the components. Avoid writing raw CSS where Tailwind utility classes suffice.

---

## 🚀 Deployment

This application is fully static and can be deployed easily to any static hosting provider.

**Build the application:**
```bash
npm run build
```

This will compile and optimize the files into the `dist` folder. You can deploy this folder directly to platforms like:
- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- **Firebase Hosting**

## 🤝 Contributing

When contributing to this repository:
1. Ensure all new components are styled cleanly and fit within the aesthetic of `NeoScratch`.
2. Do not commit API keys or sensitive data. Always use the `.env` approach.
3. Make sure to run `npm run lint` and `npm run build` locally before pushing to verify no typescript or format errors were introduced.
