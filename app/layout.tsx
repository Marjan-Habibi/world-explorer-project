import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "World Explorer",
  description: "Explore countries around the world - flags, capitals, populations and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav style={{
          backgroundColor: "#7a5636",
          color: "#f5efe6",
          padding: "1rem",
          boxShadow: "0 2px 8px rgba(61, 43, 26, 0.15)"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "#f5efe6" }}>
              🌍 World Explorer
            </Link>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ color: "#f5efe6", textDecoration: "none" }}>Home</Link>
              <Link href="/countries" style={{ color: "#f5efe6", textDecoration: "none" }}>Countries</Link>
              <Link href="/search" style={{ color: "#f5efe6", textDecoration: "none" }}>Search</Link>
              <Link href="/about" style={{ color: "#f5efe6", textDecoration: "none" }}>About</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ minHeight: "80vh", maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{
          backgroundColor: "#5c3a1e",
          color: "#e8dcca",
          textAlign: "center",
          padding: "1.5rem",
          marginTop: "auto"
        }}>
          <p>© 2025 World Explorer | Data from REST Countries API</p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem", color: "#c4a77a" }}>
            Exploring the world, one country at a time
          </p>
        </footer>
      </body>
    </html>
  );
}
