import "@/styles/globals.css";
import "@/styles/custom-styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/animation.css"
import "@/styles/button.css"
import "@/styles/card.css"

import "./fontawesome"; // <-- the config file you created above

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

// import "@/styles/custom-styles.css";

export const metadata = {
  title:{
    default:  "Franclean Laundry",
    template: "%s | Franclean Laundry",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
  },
  description: "Franclean Laundry offers professional laundry, washing, drying, ironing, and stain removal services with convenient pickup and delivery for homes and businesses.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Providers>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
