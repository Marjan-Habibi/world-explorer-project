import CountrySearch from "@/components/CountrySearch";

export const metadata = {
  title: "Search Countries - World Explorer",
};

export default function SearchPage() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍 Search Countries</h1>
      <p style={{ color: "#4b5563", marginBottom: "2rem" }}>
        Find any country by typing its name below
      </p>
      <CountrySearch />
    </div>
  );
}