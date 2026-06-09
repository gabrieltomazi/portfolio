import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Tomazi | Dev Front-End & Engenharia de Software",
  description: "Portfólio profissional de Gabriel Tomazi, Desenvolvedor Front-End especializado em React, Next.js e Node.js. Confira meus projetos e especializações.",
  keywords: ["Gabriel Tomazi", "Gabriel Tomazi desenvolvedor", "Front-End Criciúma", "Software Engineer portfolio"],
  authors: [{ name: "Gabriel Tomazi" }],
  openGraph: {
    title: "Gabriel Tomazi | Portfólio",
    description: "Desenvolvedor Front-End & Estudante de Engenharia de Software.",
    url: "https://gabrieltomazi.vercel.app/",
    siteName: "Gabriel Tomazi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body
        className={`${poppins.className} ${poppins.variable} antialiased min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
