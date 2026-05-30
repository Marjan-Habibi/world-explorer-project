import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundColor: "#8b5a2b",
        color: "#fffaf5",
        borderRadius: "1rem",
        padding: "3rem 2rem",
        textAlign: "center",
        marginBottom: "2rem",
        boxShadow: "0 4px 12px rgba(61, 43, 26, 0.1)"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌍 World Explorer</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
          Explore countries around the world and learn about their flags, capitals, 
          populations, currencies, and languages.
        </p>
        <Link href="/countries" style={{
          backgroundColor: "#f5efe6",
          color: "#7a5636",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "bold",
          display: "inline-block",
          transition: "all 0.3s ease"
        }}>
          Start Exploring →
        </Link>
      </div>

      {/* Features Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        <div style={{ 
          backgroundColor: "#fffaf5", 
          padding: "1.5rem", 
          borderRadius: "0.75rem", 
          boxShadow: "0 2px 8px rgba(61, 43, 26, 0.08)",
          border: "1px solid #e8dcca"
        }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#7a5636" }}>🌍 195+ Countries</h2>
          <p style={{ color: "#8b7355" }}>Explore every country recognized by the United Nations</p>
        </div>
        <div style={{ 
          backgroundColor: "#fffaf5", 
          padding: "1.5rem", 
          borderRadius: "0.75rem", 
          boxShadow: "0 2px 8px rgba(61, 43, 26, 0.08)",
          border: "1px solid #e8dcca"
        }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#7a5636" }}>🏳️ Flags & Facts</h2>
          <p style={{ color: "#8b7355" }}>View official flags, capitals, populations, and regions</p>
        </div>
        <div style={{ 
          backgroundColor: "#fffaf5", 
          padding: "1.5rem", 
          borderRadius: "0.75rem", 
          boxShadow: "0 2px 8px rgba(61, 43, 26, 0.08)",
          border: "1px solid #e8dcca"
        }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#7a5636" }}>🔍 Smart Search</h2>
          <p style={{ color: "#8b7355" }}>Find any country instantly with our search feature</p>
        </div>
      </div>
    </div>
  );
}