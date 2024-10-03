'use client'
import { ThemeProvider } from "@emotion/react"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
import { createTheme } from "@mui/material"
import { BorderColor } from "@mui/icons-material"


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
                main: '#4b3f72',
                contrastText: "#ffefef",
            },
            secondary : {
                main : "#457b9d",
                contrastText : "#000"
            }
        },
        typography: {
            h1: {
                fontSize: "20px",
                fontWeight: 700
            },
            h2: {
                fontSize: "20px",
                fontWeight: 600,
                color: "#000000DE",
                display: "flex",
                alignItems: "center",
                gap: "8px"
            },
            h4: {
                fontSize: "16px",
                marginBottom: "6px"
            },
            h5: {
                fontSize: "14px"
            },
            /** for the display */
            d1: {
                fontSize: "15px",
                color: "#000000",
                fontWeight: 700,
                textTransform: "capitalize",
                marginBottom: "10px",
                width: "100%",
                display: "block"
            },
            d2: {
                display: "block",
                fontSize: "15px",
                color: "#00000099",
                textTransform: "uppercase",
                width: "100%",
                marginBottom: "10px"
            },
            d3: {
                display: "block",
                fontSize: "15px",
                color: "#00000099",
                textTransform: "capitalize",
                width: "100%",
                marginBottom: "10px"
            },
            /** for the paragraph*/
            p1: {
                fontSize: "13px",
                marginTop: "16px"
            },
            p2: {

            },
            p3: {
                fontSize: "12px",
                color: "#00000061",
                marginTop: '16px'
            },
            p4: {
                fontSize: "12px",
                color: "#00000061",
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: "text",
                    color: 'secondary',
                    size: 'medium'
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: "transparent"
                    },
                    root: {
                        '& fieldset': {
                            borderWidth: '0px !important'
                        }
                    }
                }
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