"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchCountries } from "@/lib/restCountries";

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadCountries() {
      try {
        const data = await fetchCountries();

        if (!isMounted) return;

        setCountries(Array.isArray(data) ? data : []);
        setError("");
      } catch (fetchError) {
        if (!isMounted) return;

        setError("Could not load countries right now. Please try again.");
        setCountries([]);
        console.error("Error fetching countries:", fetchError);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCountries();

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedCountries = Array.isArray(countries)
    ? [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))
    : [];

  const displayCountries = sortedCountries.slice(0, 20);

  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌍 Explore Countries</h1>
      <p style={{ color: "#4b5563", marginBottom: "2rem" }}>
        Browse through countries from around the world
      </p>

      {loading ? (
        <p>Loading countries...</p>
      ) : error ? (
        <div>
          <h1>Error loading countries</h1>
          <p>{error}</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {displayCountries.map((country) => (
            <div
              key={country.cca3}
              className="country-card"
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  height: "140px",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={{ height: "100%", width: "auto", objectFit: "contain" }}
                />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {country.name.common}
                </h2>
                <p style={{ color: "#4b5563", marginBottom: "0.25rem" }}>
                  <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                </p>
                <p style={{ color: "#4b5563", marginBottom: "0.25rem" }}>
                  <strong>Region:</strong> {country.region}
                </p>
                <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
                <Link
                  href={`/countries/${country.cca3}`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
