import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { profile } from "../data/content";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono" });

export const metadata = {
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: "Gautami Kharwar, Senior Product Designer for AI products and e-commerce. 8+ years, based in India.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Header />
        {children}
        <div className="wrap">
          <Contact />
          <footer className="foot">
            <span>© 2026 {profile.name}</span>
            <span>{profile.location}</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
