"use client"
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from 'next-themes'

export function ThemeContext({ children, ...props }: ThemeProviderProps) {
    return <ThemeProvider {...props} >
        {children}
    </ThemeProvider>
}