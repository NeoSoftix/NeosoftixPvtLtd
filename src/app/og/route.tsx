import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site";

const logoSrc = readFile(join(process.cwd(), "public", "logo.png")).then(
  (data) => `data:image/png;base64,${data.toString("base64")}`,
);

const DEFAULT_TITLE = "Ideas to Impact";
const MAX_TITLE = 110;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || DEFAULT_TITLE).slice(0, MAX_TITLE);
  const label = (searchParams.get("label") || "Digital Growth Agency").slice(0, 40);
  const logo = await logoSrc;
  const fontSize = title.length > 70 ? 56 : title.length > 40 ? 66 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#050b16",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.45), transparent 45%), radial-gradient(circle at 10% 95%, rgba(56,189,248,0.25), transparent 40%)",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="NeoSoftix" width={300} height={48} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: 999,
              border: "2px solid rgba(56,189,248,0.4)",
              backgroundColor: "rgba(14,165,233,0.12)",
              color: "#38bdf8",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <span>{siteUrl.replace(/^https?:\/\//, "")}</span>
          <div style={{ display: "flex", height: 6, width: 160, borderRadius: 6, backgroundColor: "#2563eb" }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
      },
    },
  );
}
