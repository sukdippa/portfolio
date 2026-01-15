import fontVariables from "../utils/font";
import Navbar from "../components/Navbar";
import "./globals.css";
import DarkModeToggle from "../components/DarkModeToggle";
import { NavbarProvider } from "../context/NavbarContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        <NavbarProvider>
          <Navbar />
          {children}
          <div className="flex flex-col h-48 items-center justify-center gap-2">
            <p className="text-center text-gray-500 text-xs">
              © 2025 Sophie Shu. All rights reserved.
            </p>
          </div>
          <div className="flex items-end justify-end h-16 fixed bottom-0 right-4 group z-50">
            <div className="h-full w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 origin-bottom-right">
              hello
            </div>
            <img
              src="/duck.png"
              className="h-full w-auto opacity-100 transition duration-300 hover:scale-105 origin-bottom-right"
            />
          </div>
        </NavbarProvider>
      </body>
    </html>
  );
}

