"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchCountryByCode } from "@/lib/restCountries";

export default function CountryDetailsPage() {
  const params = useParams();
  const code = typeof params?.code === "string" ? params.code : "";

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchCountry() {
      if (!code) {
        setLoading(false);
        return;
      }

      try {
        const data = await fetchCountryByCode(code);

        if (!isMounted) return;

        setCountry(data);
        setError("");
      } catch (fetchError) {
        if (!isMounted) return;

        setCountry(null);
        setError("Could not load country details right now. Please try again.");
        console.error("Error fetching country details:", fetchError);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCountry();

    return () => {
      isMounted = false;
    };
  }, [code]);

  const getLanguages = () => {
    if (!country?.languages) return "N/A";
    return Object.values(country.languages).join(", ");
  };

  const getCurrencies = () => {
    if (!country?.currencies) return "N/A";
    return Object.values(country.currencies)
      .map((currency) => `${currency.name} (${currency.symbol || "N/A"})`)
      .join(", ");
  };

  if (loading) {
    return <p>Loading country details...</p>;
  }

  if (error || !country) {
    return (
      <div>
        <h1>Country not found</h1>
        <p>{error || "The requested country could not be loaded."}</p>
        <Link href="/countries">Back to Countries</Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/countries"
        style={{
          color: "#3b82f6",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "1.5rem",
        }}
      >
        ← Back to Countries
      </Link>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              backgroundColor: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={{ maxWidth: "100%", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            />
          </div>

          <div style={{ flex: "2", padding: "2rem" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
              {country.name.common}
            </h1>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
              {country.name.official}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <p>
                  <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Subregion:</strong> {country.subregion || "N/A"}
                </p>
                <p>
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
              </div>
              <div>
                <p>
                  <strong>Languages:</strong> {getLanguages()}
                </p>
                <p>
                  <strong>Currencies:</strong> {getCurrencies()}
                </p>
                <p>
                  <strong>Time Zones:</strong> {country.timezones.join(", ")}
                </p>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#22c55e",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                }}
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
