import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className="antialiased">
        <Header />

        <main className="max-w-7xl mx-auto px-6 md:px-12 pt-5 pb-20">
          {children}

          <Footer
            links={[
              { title: "Home", url: "/" },
              { title: "About", url: "/about" },
              { title: "Projects", url: "/projects" },
              { title: "Uses", url: "/uses" },
              { title: "Security", url: "/security" },
            ]}
          />
        </main>
      </body>
    </html>
  );
}
