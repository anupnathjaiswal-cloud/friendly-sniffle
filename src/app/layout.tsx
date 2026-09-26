import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Code Builder",
    description: "A modern AI-powered code builder",
};

export default function RootLayout({ children }: Readonly<LayoutProps<"/">>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("h-full", "font-sans")}
        >
            <body className="min-h-full flex flex-col">
                <ClerkProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <QueryProvider>{children}</QueryProvider>
                    </ThemeProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}
