"use client";

export default function Home() {
  let zohoData = null;

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const zoho = params.get("zoho");

    if (zoho) {
      try {
        zohoData = JSON.parse(decodeURIComponent(zoho));
      } catch (err) {
        console.error("Failed to parse Zoho data", err);
      }
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Zoho Next Test</h1>
      <pre>
        {zohoData
          ? JSON.stringify(zohoData, null, 2)
          : "No Zoho data received"}
      </pre>
    </div>
  );
}
