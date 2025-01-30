import fonts from "@/utils/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className = {`${fonts.bodytext} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 

