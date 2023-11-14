import { ThemeMode } from '@emotion/react'
import { theme, bootstrapColors } from '#styles/theme'

type ThemeMode = typeof theme

type BootstrapColors = (typeof bootstrapColors)[number]

type BootstrapColorProps = {
  [key in BootstrapColors]: string
}

declare module '@emotion/react' {
  export interface Theme extends ThemeMode {
    colors: {
      white900: string

      gray100: string
      gray200: string
      gray300: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray800: string
      gray900: string

      blue100: string
      blue200: string
      blue300: string
      blue400: string
      blue500: string

      point100: string
      point200: string
    }
    fonts: {
      L900: string
      L800: string
      L700: string
      L600: string
      L500: string
      L400: string
      L300: string
      L200: string
      L100: string

      R900: string
      R800: string
      R700: string
      R600: string
      R500: string
      R400: string
      R300: string
      R200: string
      R100: string

      M900: string
      M800: string
      M700: string
      M600: string
      M500: string
      M400: string
      M300: string
      M200: string
      M100: string

      B900: string
      B800: string
      B700: string
      B600: string
      B500: string
      B400: string
      B300: string
      B200: string
      B100: string
    }
    text: {
      primary: string
      secondary: string
      danger: string
    }
    button: {
      bg: BootstrapColorProps
      fg: BootstrapColorProps
      hover: BootstrapColorProps
      pressed: BootstrapColorProps
    }
  }
}
