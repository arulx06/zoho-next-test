"use client";

export default function Home() {
  const params = new URLSearchParams(window.location.search);
  const zoho = params.get("zoho");

  return (
    <div>
      <h1>Zoho Next Test</h1>
      <pre>{zoho ? JSON.stringify(JSON.parse(zoho), null, 2) : "No Zoho data"}</pre>
    </div>
  );
}
