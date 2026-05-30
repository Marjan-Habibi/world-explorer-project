"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CountrySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  // Filter countries based on search term
  const filteredCountries = Array.isArray(countries) 
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>Loading countries...</p>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country... (e.g., Afghanistan, Japan, Germany)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          border: "1px solid #d1d5db",
          borderRadius: "0.5rem",
          marginBottom: "1.5rem",
          outline: "none"
        }}
      />

      {searchTerm && (
        <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
          Found {filteredCountries.length} country{filteredCountries.length !== 1 ? "s" : ""}
        </p>
      )}

      {filteredCountries.length === 0 && searchTerm ? (
        <p style={{ textAlign: "center", color: "#6b7280", padding: "2rem" }}>
          No countries found matching "{searchTerm}"
        </p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {filteredCountries.slice(0, 30).map((country) => (
            <div key={country.cca3} style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1rem",
              textAlign: "center"
            }}>
              <img 
                src={country.flags.png} 
                alt={country.name.common}
                style={{ width: "80px", height: "auto", margin: "0 auto 0.75rem" }}
              />
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{country.name.common}</h3>
              <p style={{ color: "#4b5563", marginBottom: "0.75rem", fontSize: "0.875rem" }}>
                Capital: {country.capital?.[0] || "N/A"}
              </p>
              <Link 
                href={`/countries/${country.cca3}`}
                style={{ color: "#3b82f6", fontSize: "0.875rem" }}
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}