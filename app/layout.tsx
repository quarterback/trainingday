import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "./_components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "Training Day",
  description: "Personal framework, story, and vocabulary reference.",
  applicationName: "Training Day",
  appleWebApp: {
    capable: true,
    title: "Training Day",
    statusBarStyle: "default",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
