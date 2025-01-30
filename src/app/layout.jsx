import fontVariables from "@/utils/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className = {`${fontVariables} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 

