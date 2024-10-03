'use client'
import { ThemeProvider } from "@emotion/react"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
import { createTheme } from "@mui/material"


// override the default options in mui
declare module '@mui/material/styles' {


    // update typography to include new variants
    interface TypographyVariantsOptions {
        d1?: React.CSSProperties
        d2?: React.CSSProperties
        d3?: React.CSSProperties
        d4?: React.CSSProperties
        p1?: React.CSSProperties
        p2?: React.CSSProperties
        p3?: React.CSSProperties
        p4?: React.CSSProperties
        l1?: React.CSSProperties
        l2?: React.CSSProperties
        l3?: React.CSSProperties
        l4?: React.CSSProperties
        overlineLarge?: React.CSSProperties
        overlineSmall?: React.CSSProperties
    }
}

// allow the new typography variants to be used
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        d1: true
        d2: true
        d3: true
        d4: true
        p1: true
        p2: true
        p3: true
        p4: true
        l1: true
        l2: true
        l3: true
        l4: true
        overlineLarge: true
        overlineSmall: true
    }
}

export default function ThemeRegistry(
    {
        children
    }: {
        children: React.ReactNode
    }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#F97316'
            },
        },
        typography: {
            h4: {
                fontSize: "16px",
            },
            h1: {
                fontSize: "20px",
                fontWeight: 700
            },
            d1: {
                fontSize: "70px",
                fontWeight: 700
            }
        }
    })

    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}
