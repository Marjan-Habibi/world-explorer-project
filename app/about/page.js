export const metadata = {
  title: "About - World Explorer",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About World Explorer</h1>

      <div style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>What is World Explorer?</h2>
        <p style={{ color: "#4b5563" }}>
          World Explorer is a Next.js application that allows users to browse, search, and explore
          detailed information about countries from around the world. From capitals and populations
          to languages and currencies, you can find everything you need to know about any country.
        </p>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>API Used</h2>
        <p style={{ color: "#4b5563", marginBottom: "0.5rem" }}>
          This project uses the{" "}
          <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>
            REST Countries API
          </a>
          , a free and open API providing comprehensive country data.
        </p>
        <code style={{ display: "block", backgroundColor: "#f3f4f6", padding: "0.5rem", borderRadius: "0.5rem", fontSize: "0.875rem" }}>
          https://restcountries.com/v3.1/all
        </code>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Next.js Topics Practiced</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
          <p>✓ App Router</p>
          <p>✓ File-based routing</p>
          <p>✓ Shared layouts</p>
          <p>✓ Dynamic routes</p>
          <p>✓ Server components</p>
          <p>✓ Client components</p>
          <p>✓ Data fetching with async/await</p>
          <p>✓ Static rendering (force-cache)</p>
          <p>✓ Dynamic rendering (no-store)</p>
          <p>✓ Search functionality</p>
        </div>
      </div>
    </div>
  );
}