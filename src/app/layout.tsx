import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/index.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap"
});

export const metadata: Metadata = {
    title: "Sharadindu Das",
    description:
        "Personal portfolio for full-stack developer based in Kolkata, West Bengal.",
    keywords: [
        "portfolio",
        "full stack developer",
        "web developer",
        "frontend developer",
        "backend developer"
    ],
    authors: [{ name: "Sharadindu Das", url: "https://github.com/R3MODAS" }],
    creator: "Sharadindu Das",
    publisher: "Sharadindu Das",
    applicationName: "Sharadindu Das",
    generator: "Next.js",
    metadataBase: new URL("https://sharadindudas.com/")
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
