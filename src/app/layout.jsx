import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

// import "@/styles/custom-styles.css";


export const metadata = {
  title: "ProGate Welding & Automation",
  description: "Gate Motors • Remote Coding • Welding • Garage Doors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
