import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Foundry — We Build Apps That Ship",
  description:
    "App Foundry is a software house building mobile and web apps for clients worldwide. Flutter, Firebase, React — we deliver.",
  openGraph: {
    title: "App Foundry",
    description: "We build apps that ship.",
    url: "https://appfoundry.vercel.app",
    siteName: "App Foundry",
    images: [{ url: "/projects/islandcrush.jpg" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
