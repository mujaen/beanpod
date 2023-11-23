import { Theme } from '@emotion/react'

interface ThemeGroup {
  light: Theme
  dark: Theme
}

export const bootstrapColors = ['primary', 'secondary', 'noLine'] as const

const font_size_weight = {
  L900: `
    font-size: 40px;
    font-weight: 400;  
  `,
  L800: `
    font-size: 35px;
    font-weight: 400;  
  `,
  L700: `
    font-size: 30px;
    font-weight: 400;  
  `,
  L600: `
    font-size: 25px;
    font-weight: 400;  
  `,
  L500: `
    font-size: 22px;
    font-weight: 400;  
  `,
  L400: `
    font-size: 20px;
    font-weight: 400;  
  `,
  L300: `
    font-size: 17px;
    font-weight: 400;  
  `,
  L200: `
    font-size: 15px;
    font-weight: 400;  
  `,
  L100: `
  font-size: 13px;
  font-weight: 400;  
  `,

  R900: `
    font-size: 40px;
    font-weight: 500;  
  `,
  R800: `
    font-size: 35px;
    font-weight: 500;  
  `,
  R700: `
    font-size: 30px;
    font-weight: 500;  
  `,
  R600: `
    font-size: 25px;
    font-weight: 500;  
  `,
  R500: `
    font-size: 22px;
    font-weight: 500;  
  `,
  R400: `
    font-size: 20px;
    font-weight: 500;  
  `,
  R300: `
    font-size: 17px;
    font-weight: 500;  
  `,
  R200: `
    font-size: 15px;
    font-weight: 500;  
  `,
  R100: `
    font-size: 13px;
    font-weight: 500;  
  `,

  M900: `
    font-size: 40px;
    font-weight: 600;  
  `,
  M800: `
    font-size: 35px;
    font-weight: 600;  
  `,
  M700: `
    font-size: 30px;
    font-weight: 600;  
  `,
  M600: `
    font-size: 25px;
    font-weight: 600;  
  `,
  M500: `
    font-size: 22px;
    font-weight: 600;  
  `,
  M400: `
    font-size: 20px;
    font-weight: 600;  
  `,
  M300: `
    font-size: 17px;
    font-weight: 600;  
  `,
  M200: `
    font-size: 15px;
    font-weight: 600;  
  `,
  M100: `
    font-size: 13px;
    font-weight: 600;  
  `,

  B900: `
    font-size: 40px;
    font-weight: 700;  
  `,
  B800: `
    font-size: 35px;
    font-weight: 700;  
  `,
  B700: `
    font-size: 30px;
    font-weight: 700;  
  `,
  B600: `
    font-size: 25px;
    font-weight: 700;  
  `,
  B500: `
    font-size: 22px;
    font-weight: 700;  
  `,
  B400: `
    font-size: 20px;
    font-weight: 700;  
  `,
  B300: `
    font-size: 17px;
    font-weight: 700;  
  `,
  B200: `
    font-size: 15px;
    font-weight: 700;  
  `,
  B100: `
    font-size: 13px;
    font-weight: 700;  
  `,
}

const primary_light = '#305766'
const light = {
  colors: {
    white900: '#FFFFFF',

    gray100: '#F2F5F6',
    gray200: '#F1EEED',
    gray300: '#ECF0F5',
    gray400: '#E2E8F0',
    gray500: '#D7DADB',
    gray600: '#C2CBD6',
    gray700: '#919DAD',
    gray800: '#666666',
    gray900: '#313748',

    blue100: '#FCFEFF',
    blue200: '#E1F0FF',
    blue300: '#2F88FF',
    blue400: '#4975CE',
    blue500: primary_light,
    blue600: '#234684',

    point100: '#263f49',
    point200: '#ED997E',
    point300: '#EE8D6E',
    point400: '#F6E9A3',
    point500: '#E7D95E',
  },
  fonts: font_size_weight,
  text: {
    primary: '#313748',
    secondary: '#000000',
    danger: '#FF5555',
  },
  button: {
    bg: {
      primary: primary_light,
      secondary: '#FFFFFF',
      noLine: '#FFFFFF',
    },
    fg: {
      primary: '#ECF0F5',
      secondary: primary_light,
      noLine: primary_light,
    },
    hover: {
      primary: '#234684',
      secondary: '#F8F9FA',
      noLine: '#F8F9FA',
    },
    pressed: {
      primary: '#234684',
      secondary: '#F1F5F9',
      noLine: '#F1F5F9',
    },
  },
}

const dark = {
  colors: {
    white900: '#FFFFFF',

    gray100: '#F2F5F6',
    gray200: '#F1EEED',
    gray300: '#ECF0F5',
    gray400: '#E2E8F0',
    gray500: '#D7DADB',
    gray600: '#C2CBD6',
    gray700: '#919DAD',
    gray800: '#666666',
    gray900: '#313748',

    blue100: '#FCFEFF',
    blue200: '#E1F0FF',
    blue300: '#2F88FF',
    blue400: '#4975CE',
    blue500: primary_light,
    blue600: '#234684',

    point100: '#263f49',
    point200: '#ED997E',
    point300: '#EE8D6E',
    point400: '#F6E9A3',
    point500: '#E7D95E',
  },
  fonts: font_size_weight,
  text: {
    primary: '#313748',
    secondary: '#626262',
    danger: '#FF5555',
  },
  button: {
    bg: {
      primary: primary_light,
      secondary: '#FFFFFF',
      noLine: '#FFFFFF',
    },
    fg: {
      primary: '#ECF0F5',
      secondary: primary_light,
      noLine: primary_light,
    },
    hover: {
      primary: '#234684',
      secondary: '#F8F9FA',
      noLine: '#F8F9FA',
    },
    pressed: {
      primary: '#234684',
      secondary: '#F1F5F9',
      noLine: '#F1F5F9',
    },
  },
}

export const mode: ThemeGroup = {
  light: { ...light },
  dark: { ...dark },
}
