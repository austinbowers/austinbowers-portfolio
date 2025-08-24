import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Austin Bowers | Designer, Developer, Creator",
  description: "Hi, my name is Austin Bowers — a UI/UX designer and front-end developer with over seven years of experience crafting user interfaces, websites, and admin dashboards across diverse business environments. I also bring a strong background in freelance work, building websites and digital media for artists and small businesses.",
  openGraph: {
    title: "Austin Bowers | Designer, Developer, Creator",
    description: "Hi, my name is Austin Bowers — a UI/UX designer and front-end developer with over seven years of experience crafting user interfaces, websites, and admin dashboards across diverse business environments. I also bring a strong background in freelance work, building websites and digital media for artists and small businesses.",
    images: [
      {
        url: "/images/meta_thumbnail2.jpg",
        width: 1200,
        height: 630,
        alt: "Austin Bowers | Designer, Developer, Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Bowers | Designer, Developer, Creator",
    description: "Hi, my name is Austin Bowers — a UI/UX designer and front-end developer with over seven years of experience crafting user interfaces, websites, and admin dashboards across diverse business environments. I also bring a strong background in freelance work, building websites and digital media for artists and small businesses.",
    images: ["/images/meta_thumbnail2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`bg-gray-900 scroll-smooth ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between transition duration-500 backdrop-blur-[5px] bg-gray-900 w-full z-[100] items-center h-14 px-8 fixed bg-opacity-25 border-opacity-5 border-b border-gray-600">
          <Link href="/" className="inline-flex items-center">
            <svg className="w-7 mr-3 fill-current text-gray-300" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.05 157.09"><g id="b"><g><path d="M157.05,78.75c-.1,43.45-35.52,78.5-79.19,78.34C35,156.94-.1,121.45,0,78.35,.1,35.02,35.53-.17,78.88,0c43.18,.17,78.27,35.51,78.17,78.75Zm-78.6,74.53c41.19,.07,74.75-33.6,74.79-75.04,.04-40.63-33.59-74.23-74.48-74.42C37.9,3.63,3.9,37.31,3.81,78.09c-.09,41.38,33.41,75.12,74.64,75.19Z"/><path d="M24.22,109.45c13.5-30.17,26.92-60.16,40.61-90.77,4.93,9.29,8.99,18.6,13.8,27.9,.49,.97,2.05,1.95,3.14,1.98,8.81,.38,17.89-.85,26.54,1.17,12.83,3.35,15.89,18.46,6.99,27.82,10.77,5.19,13.72,10.11,13,21.49-.55,8.78-4.17,12.45-16.35,16.42,2.55,5.32,5.09,10.61,7.64,15.94-4.73,1.1-4.85,1.05-6.84-3.01-1.75-3.58-3.59-7.12-5.19-10.76-.79-1.8-1.88-2.27-3.75-2.27-17.71,.07-35.26,.04-52.99,.04,1.61-3.32,3.29-5.05,7.08-4.98,15.45,.28,30.64,.08,46.13,.1-4.41-9.29-8.76-17.89-13.07-27.12-.82-1.76-1.82-2.34-3.71-2.31-7.55,.1-15.1,.04-22.69,.04,.66-4.15,1.44-4.83,5.31-4.83,5.68,0,11.37,0,17.58,0-3.71-7.72-7.19-14.94-10.83-22.49l5-.39c-.49-2.84-1.32-4.99-4.76-4.4-2.1,.36-3.08-.79-3.9-2.56-2.44-5.26-5.03-10.46-7.86-16.3-11.57,25.52-22.79,50.63-34.09,76.2-1.38,3.13-3.06,4.3-6.81,3.09Zm57.88-55.47c3.47,7.14,6.91,14.29,10.46,21.38,.26,.52,1.33,.89,2.03,.9,3.88,.04,7.78,.11,11.64-.15,4.25-.28,7.42-3.13,8.52-7.23,2.13-7.93-1.09-13.85-9.23-14.72-7.62-.82-15.39-.18-23.41-.18Zm22.88,56.67c1.35,4.81,1.98,5.17,6.51,3.79l-1.37-3.83c6.21-1.03,11.87-2.56,12.95-9.63,.96-6.1,1.23-12.26-4.72-16.31-6.98-4.75-14.89-3.41-23.02-3.42,4.81,9.96,9.37,19.39,14.04,29.06-1.85,.21-2.59,.25-4.39,.34Zm-16.73-33.65c1.66,4.55,2.01,4.74,6.31,3.64-1.2-4.26-1.26-4.3-6.31-3.64Z"/></g></g></svg>
          </Link>
          <Link href="https://github.com/austinbowers">
            <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true"
                 className="w-7 fill-current text-gray-300">
              <path
                  d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
            </svg>
          </Link>
        </header>
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
