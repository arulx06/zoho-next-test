"use client";

export default function Home() {
  let zohoData: any = null;

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const zoho = params.get("zoho");
    console.log("Zoho param:", zoho);   // <-- debug

    if (zoho) {
      const decoded = decodeURIComponent(zoho);
      try {
        // Try parsing as JSON
        zohoData = JSON.parse(decoded);
      } catch {
        // If parsing fails, treat it as plain string
        zohoData = { name: decoded };
      }
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Zoho Next Test</h1>
      <pre>{zohoData ? JSON.stringify(zohoData, null, 2) : "No Zoho data received"}</pre>
    </div>
  );
}
